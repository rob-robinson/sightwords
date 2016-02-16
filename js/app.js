var app = function(){

    var currentState = {
        grade : 'k',
        subject : 'vocab',
        level : 0
    };

    var eventStore = {
        mouseIsDown : false,
        clickX : null,
        clickY : null,
        releaseX : null,
        releaseY : null
    };

    var subIndex = 0;

    var data = {};

    function fetchAPIData(callback) {

        var reqUri = './api/data.json';
        var xhr = new XMLHttpRequest();

        xhr.open("GET", reqUri, true);
        xhr.onload = callback;
        xhr.send();
    };

    var listeners = function() {

        'use strict';

        function onMouseMove(e) {
            e.preventDefault();
        };

        function onMouseStart(e) {
            e.preventDefault();

            // if event is a touch screen : ... TODO: which devices support each ?
            if (e.changedTouches && e.changedTouches.length > 0) {
                eventStore.clickX = e.changedTouches[0].pageX;
                eventStore.clickY = e.changedTouches[0].pageY;
            } else { // event is an actual click ( maybe ) ...
                eventStore.clickX = e.pageX;
                eventStore.clickY = e.pageY;
            }

            eventStore.mouseIsDown = true;
        };

        function onChangeSubjectDDL() {

            var newSubject = this.value;

            console.log(this.value);

            currentState.subject = newSubject;
            currentState.level = 0;
            subIndex = 0;

            updatePage();

        };

        function onMouseEnd(e) {
            'use strict';
            e.preventDefault();

            eventStore.mouseIsDown = false;

            if (e.changedTouches) {
                eventStore.releaseX = e.changedTouches[0].pageX;
                eventStore.releaseY = e.changedTouches[0].pageY;
            } else {
                eventStore.releaseX = e.pageX;
                eventStore.releaseY = e.pageY;
            }

            // check to see if the swiping motion is more horizontal, or vertical
            var xOry =
                (Math.abs(eventStore.releaseX - eventStore.clickX) > Math.abs(eventStore.releaseY - eventStore.clickY))
                    ? "x"
                    : "y";

            switch (xOry) {

                // swipe was more horizontal
                case 'x':
                    if(eventStore.releaseX-eventStore.clickX > 0) {
                        moves.moveItemForward();
                    } else {
                        moves.moveItemBackward();
                    }
                    break;

                // swipe was more vertical
                case 'y':
                    if(eventStore.releaseY-eventStore.clickY <= 0) {
                        moves.moveOneLevelUp();
                    } else {
                        moves.moveOneLevelDown();
                    }
                    break;
            }

            updatePage();
        };

        function KeyCheck(e) {
            'use strict';
        
            var KeyID = e.keyCode;

            switch(KeyID){
                case 39: // left arrow
                    moves.moveItemForward()
                    break;
                case 37: // right arrow
                    moves.moveItemBackward();
                    break;
                case 38: // up arrow
                    moves.moveOneLevelUp();
                    break;
                case 40: // down arrow
                    moves.moveOneLevelDown();
                    break;
                case 32: // space bar
                    // updatePage(playSound);
                    break;
                default:
                    // console.log(KeyID);
                    break;
            }
        };
        return {
            KeyCheck : KeyCheck, 
            onMouseEnd : onMouseEnd, 
            onMouseStart : onMouseStart, 
            onMouseMove : onMouseMove,
            onChangeSubjectDDL : onChangeSubjectDDL
        };
    }();

    var moves = function(){
        function moveItemForward() {

            console.log(currentState);

            (subIndex < data[currentState.subject][currentState.level].items.length - 1 ? subIndex++ : subIndex = 0);
            updatePage();
        };
        function moveItemBackward() {
            (subIndex > 0 ? subIndex-- : subIndex = (data[currentState.subject][currentState.level].items.length - 1));
            updatePage();
        };
        function moveOneLevelUp() {
            currentState.level += 1; // TODO: add conditional here
            fetchAPIData(parseJSON);
        };
        function moveOneLevelDown() {
            (currentState.level > 0 ? currentState.level-- : currentState.level = 0);
            fetchAPIData(parseJSON);
        };
        return {
            moveItemForward : moveItemForward, 
            moveItemBackward : moveItemBackward, 
            moveOneLevelUp : moveOneLevelUp, 
            moveOneLevelDown : moveOneLevelDown
        }
    }();

    function parseJSON() {
        var parsedJSON = JSON.parse(this.responseText);
        data = parsedJSON;
        updatePage();
    };

    function updatePage(callback) {

        console.log(currentState);

        document.getElementById('content').innerHTML = data[currentState.subject][currentState.level].items[subIndex];
        document.getElementById('level').innerHTML = "Subject:" + currentState.subject + ", Level:" + currentState.level + " use &uarr; &rarr; &darr; &larr;";

        if(callback) { callback(); }
    }

    return {
        currentState:currentState,
        eventStore:eventStore,
        subIndex:subIndex,
        data:data,
        fetchAPIData:fetchAPIData,
        moves:moves,
        listeners:listeners,
        parseJSON:parseJSON,
        updatePage:updatePage }
}();

window.addEventListener("load",function() {
    
    app.fetchAPIData(app.parseJSON);
    
},false);

window.addEventListener('keydown', app.listeners.KeyCheck,true);

document.getElementById("main_body").addEventListener('mousemove', app.listeners.onMouseMove, false);
document.getElementById("main_body").addEventListener('mousedown', app.listeners.onMouseStart, false);
document.getElementById("main_body").addEventListener('mouseup', app.listeners.onMouseEnd, false);

document.getElementById("main_body").addEventListener('touchmove', app.listeners.onMouseMove, false);
document.getElementById("main_body").addEventListener('touchstart', app.listeners.onMouseStart, false);
document.getElementById("main_body").addEventListener('touchend', app.listeners.onMouseEnd, false);

document.getElementById("ddl_subject").addEventListener('change', app.listeners.onChangeSubjectDDL, false);