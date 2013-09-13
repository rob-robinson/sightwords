
var vocab =
	[ 
	{"level":"a", "words": ["I","a","the","and","is","see","can","like","my"]},
	{"level":"b", "words": ["look","it","no","said","went","play","at","go","up","we"]},
	{"level":"c", "words": ["come","for","me","here","are","have","on","you","saw","was"]},
	{"level":"d", "words": ["boy","girl","he","she","him","her","this","that","of","yes"]},
	{"level":"e", "words": ["had","has","away","will","with","then","they","them","want","put"]},
	{"level":"f", "words": ["under","litle","good","out","our","your","why","not","do","where"]},
	{"level":"short a","words" : ["mad","rat","van","tag","sat","jam","bad","map","ham","fan"]},
	{"level":"short e","words" : ["set","pet","hen","fed","men","bed","red","jet","leg","wet"]},
	{"level":"short i","words" : ["six","fin","wig","sit","pig","dig","bit","him","lip","rip"]}
	];
	
	

var level = 0;
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
        			// increment
        			(subIndex < vocab[level].words.length-1 ? subIndex++ : subIndex=0);
    				reDraw();
    	    	}
        		else {
        			// decrement
        			(subIndex > 0 ? subIndex-- : subIndex=(vocab[level].words.length-1));
    				reDraw();
        		}
        	break;
        	
        	case 'y':
        		if(releaseY-clickY <= 0) {
        			//reDraw(playSound);
        		} else {
        			document.getElementById("content").innerHTML = getWord();
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
	reDraw();
},false);

function reDraw(callback) {
	var item = vocab[level];
	document.getElementById('content').innerHTML = item.words[subIndex];
	document.getElementById('level').innerHTML = "Level:" + (level+1) + " use &uarr; &rarr; &darr; &larr;";

	if(callback) {
		callback();
	}
}

function KeyCheck(event) {
    'use strict';
    
    var KeyID = event.keyCode;

    if (KeyID === 39) {
        // console.log('right');
        (subIndex < vocab[level].words.length-1 ? subIndex++ : subIndex=0);
        reDraw();
    } else if (KeyID === 37) {
        // console.log('left'); 
        (subIndex > 0 ? subIndex-- : subIndex=(vocab[level].words.length-1));
        reDraw();
    }  else if (KeyID === 38) {
        //console.log('up'); 
        (level < vocab.length-1 ? level++ : level = vocab.length-1);
        reDraw();
    } else if (KeyID === 40) {
        //console.log('down'); 
        (level > 0 ? level-- : level=0);
        reDraw();
        document.getElementById("content").innerHTML = getWord();
    } else if(KeyID === 32) {
    	//reDraw(playSound);
    } else {
    	//console.log(KeyID);
    }
}
	
	window.addEventListener('keydown',KeyCheck,true);  
	
	document.body.addEventListener('mousemove', onMouseMove, false);
	document.body.addEventListener('mousedown', onMouseStart, false);
	document.body.addEventListener('mouseup', onMouseEnd, false);
	
	document.body.addEventListener('touchmove', onMouseMove, false);
	document.body.addEventListener('touchstart', onMouseStart, false);
	document.body.addEventListener('touchend', onMouseEnd, false);	