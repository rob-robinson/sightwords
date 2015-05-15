var app = {

    config : {
        grade : 'k',
        subject : 'math',
        level : 1
    },

    eventStore : {
        mouseIsDown : false,
        clickX : null,
        clickY : null,
        releaseX : null,
        releaseY : null
    },

    subIndex : 0,

    data : {
        items : {}
    },

    setConfig : function(config){
        app.config = config;
    },

    xhrGet : function (callback) {

        var reqUri = '/karis/api/' + app.config.subject + '/' + app.config.grade + '/level/' + app.config.level + '';
        var xhr = new XMLHttpRequest();

        xhr.open("GET", reqUri, true);

        xhr.onload = callback;

        xhr.send();
    },
    getWord : function(){
        var myIndex = vocab[level].words.length,
            myRandom = Math.floor( Math.random() * myIndex),
            toReturn;

        if(myRandom>=vocab[level].words.length) {
            toReturn = Math.floor( Math.random() * 100);
        } else {
            toReturn = vocab[level].words[myRandom];
        }

        return toReturn;
    },

    getNumber : function () {
        return Math.floor( Math.random() * 1000);
    },

    listeners : {
        onMouseMove : function(evt) {
            'use strict';
            evt.preventDefault();
        },

        onMouseStart : function (e) {
            'use strict';
            e.preventDefault();

            if (e.changedTouches && e.changedTouches.length > 0) {
                app.eventStore.clickX = e.changedTouches[0].pageX;
                app.eventStore.clickY = e.changedTouches[0].pageY;
            } else {
                app.eventStore.clickX = e.pageX;
                app.eventStore.clickY = e.pageY;
            }

            app.eventStore.mouseIsDown = true;

            console.log(app.eventStore);

        },

        onMouseEnd : function(e) {
            'use strict';
            e.preventDefault();
            app.eventStore.mouseIsDown = false;

            console.dir(e);

            if (e.changedTouches) {
                app.eventStore.releaseX = e.changedTouches[0].pageX;
                app.eventStore.releaseY = e.changedTouches[0].pageY;
            } else {
                app.eventStore.releaseX = e.pageX;
                app.eventStore.releaseY = e.pageY;
            }

            //if (e.changedTouches && e.changedTouches.length > 0) {
            //    app.eventStore.releaseX = e.changedTouches[0].pageX;
            //    app.eventStore.releaseY = e.changedTouches[0].pageY;

                // check to see if the swiping motion is more horizontal, or vertical
                var xOry = (Math.abs(app.eventStore.releaseX-app.eventStore.clickX)>Math.abs(app.eventStore.releaseY-app.eventStore.clickY)) ? "x" : "y";

                console.log(xOry);

                switch (xOry) {

                    // swipe was more horizontal
                    case 'x':
                        if(app.eventStore.releaseX-app.eventStore.clickX > 0) {
                            app.moves.moveItemForward();
                        } else {
                            app.moves.moveItemBackward();
                        }
                        break;

                    // swipe was more vertical
                    case 'y':
                        if(app.eventStore.releaseY-app.eventStore.clickY <= 0) {
                            app.moves.moveOneLevelUp();
                        } else {
                            app.moves.moveOneLevelDown();
                        }
                        break;
                }
            //} else {
            //    app.eventStore.releaseX = e.pageX;
            //    app.eventStore.releaseY = e.pageY;
            //    app.reDraw();
            //}
            app.reDraw();

            console.log(app.eventStore);
        }, 
        KeyCheck : function (event) {
            'use strict';
        
            var KeyID = event.keyCode;
        
            if (KeyID === 39) {
                app.moves.moveItemForward()
            } else if (KeyID === 37) {
                app.moves.moveItemBackward();
            }  else if (KeyID === 38) {
                app.moves.moveOneLevelUp();
            } else if (KeyID === 40) {
                app.moves.moveOneLevelDown();
            } else if(KeyID === 32) {
                //reDraw(playSound);
            } else {
                //console.log(KeyID);
            }
        }
    },
    moves : {
        moveItemForward : function() {

            (app.subIndex < app.data.items.length - 1 ? app.subIndex++ : app.subIndex = 0);
            app.reDraw();

        },

        moveItemBackward : function() {

            (app.subIndex > 0 ? app.subIndex-- : app.subIndex = (app.data.items.length - 1));
            app.reDraw();

        },

        moveOneLevelUp : function() {

            app.config.level += 1;
            app.xhrGet(app.parseJSON);

        },

        moveOneLevelDown : function() {

            (app.config.level > 1 ? app.config.level-- : app.config.level = 1);
            app.xhrGet(app.parseJSON);
        }
    },


    parseJSON : function() {

        console.log(this.responseText);

        var parsedJSON = JSON.parse(this.responseText);
        app.data.items = parsedJSON;
        app.reDraw();
    },

    reDraw : function(callback) {

        document.getElementById('content').innerHTML = app.data.items.items[app.subIndex];
        document.getElementById('level').innerHTML = "Level:" + app.config.level + " use &uarr; &rarr; &darr; &larr;";

        if(callback) {
            callback();
        }
    },



    
};


window.addEventListener("load",function() {
    
    app.xhrGet(app.parseJSON);
    
},false);

window.addEventListener('keydown', app.listeners.KeyCheck,true);

document.getElementById("main_body").addEventListener('mousemove', app.listeners.onMouseMove, false);
document.getElementById("main_body").addEventListener('mousedown', app.listeners.onMouseStart, false);
document.getElementById("main_body").addEventListener('mouseup', app.listeners.onMouseEnd, false);

document.getElementById("main_body").addEventListener('touchmove', app.listeners.onMouseMove, false);
document.getElementById("main_body").addEventListener('touchstart', app.listeners.onMouseStart, false);
document.getElementById("main_body").addEventListener('touchend', app.listeners.onMouseEnd, false);

document.getElementById("ddl_subject").addEventListener('change', function(){

    app.config.subject = this.value;

    app.xhrGet(app.parseJSON);

}, false);