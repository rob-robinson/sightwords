

var grade = 'k';
var subject = 'math';
var level = 1;

var subIndex = 0;

var mouseIsDown = false;
var clickX;
var clickY;
var releaseX;
var releaseY;

function getWord(){
    var myIndex = vocab[level].words.length;
    var myRandom = Math.floor( Math.random() * myIndex);
    var toReturn;

    //console.log(myIndex + " " + myRandom);

    if(myRandom>=vocab[level].words.length) {
        toReturn = Math.floor( Math.random() * 100);
    } else {
        toReturn = vocab[level].words[myRandom];
    }

    return toReturn;
}

function getNumber() {
    return Math.floor( Math.random() * 1000);
}

function onMouseMove(evt) {
    'use strict';
    evt.preventDefault();
}

function onMouseStart(e) {
    'use strict';
    e.preventDefault();
    //console.log('hhh');

    if (e.changedTouches && e.changedTouches.length > 0) {
        clickX = e.changedTouches[0].pageX;
        clickY = e.changedTouches[0].pageY;
    } else {
        clickX = e.pageX;
        clickY = e.pageY;
    }

    mouseIsDown = true;
}

function onMouseEnd(e) {
    'use strict';
    e.preventDefault();
    mouseIsDown = false;

    if (e.changedTouches && e.changedTouches.length > 0) {
        releaseX = e.changedTouches[0].pageX;
        releaseY = e.changedTouches[0].pageY;

        var xOry = (Math.abs(releaseX-clickX)>Math.abs(releaseY-clickY)) ? "x" : "y";

        switch (xOry) {
            case 'x':
                if(releaseX-clickX > 0) {

                    moveItemForward();

                }
                else {

                    moveItemBackward();

                }
                break;

            case 'y':
                if(releaseY-clickY <= 0) {

                    moveOneLevelUp();

                } else {

                    moveOneLevelDown();

                }
                break;
        }
    } else {
        releaseX = e.pageX;
        releaseY = e.pageY;

        reDraw();
    }
}


window.addEventListener("load",function(){

    xhrGet(subject, grade, level, parseJSON, null);

},false);


parseJSON = function () {

    var parsedJSON = JSON.parse(this.responseText);

    // set global items to the parsed json:
    items = parsedJSON;

    reDraw();


};

function reDraw(callback) {

    document.getElementById('content').innerHTML = items.items[subIndex];
    document.getElementById('level').innerHTML = "Level:" + level + " use &uarr; &rarr; &darr; &larr;";


    if(callback) {
        callback();
    }
}

function moveItemForward() {
    (subIndex < items.items.length - 1 ? subIndex++ : subIndex = 0);
    reDraw();
}
function moveItemBackward() {
    (subIndex > 0 ? subIndex-- : subIndex = (items.items.length - 1));
    reDraw();
}
function moveOneLevelUp() {
    level += 1;
    xhrGet(subject, grade, level, parseJSON, null);
}
function moveOneLevelDown() {
    (level > 1 ? level-- : level = 1);
    xhrGet(subject, grade, level, parseJSON, null);
}
function KeyCheck(event) {
    'use strict';

    var KeyID = event.keyCode;

    if (KeyID === 39) {

        moveItemForward()

    } else if (KeyID === 37) {

        moveItemBackward();

    }  else if (KeyID === 38) {

        moveOneLevelUp();

    } else if (KeyID === 40) {

        moveOneLevelDown();

    } else if(KeyID === 32) {
        //reDraw(playSound);
    } else {
        //console.log(KeyID);
    }
}

window.addEventListener('keydown',KeyCheck,true);

document.getElementById("main_body").addEventListener('mousemove', onMouseMove, false);
document.getElementById("main_body").addEventListener('mousedown', onMouseStart, false);
document.getElementById("main_body").addEventListener('mouseup', onMouseEnd, false);

document.getElementById("main_body").addEventListener('touchmove', onMouseMove, false);
document.getElementById("main_body").addEventListener('touchstart', onMouseStart, false);
document.getElementById("main_body").addEventListener('touchend', onMouseEnd, false);

document.getElementById("ddl_subject").addEventListener('change', function(){

    subject = this.value;
    xhrGet(subject, grade, level, parseJSON, null);

}, false);