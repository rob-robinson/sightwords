
var vocab = [
	["I","a","the","and","is","see","can","to","like","my","said","went","play","at","look","go","up","no","it","we","come","for","here","me","are","have","on","saw","you","was",
"12","16","18","21","11","31","13","82","107","132"	
	]
];

var level = 0;
var subIndex = 0;

var mouseIsDown = false;
var clickX;
var clickY;
var releaseX;
var releaseY;

function getWordOrNumber(){
	var myIndex = vocab[0].length*2;
	var myRandom = Math.floor( Math.random() * myIndex);
	var toReturn;
	
	console.log(myIndex + " " + myRandom);
	
	if(myRandom>=vocab[0].length) {
		toReturn = Math.floor( Math.random() * 100);
	} else {
		toReturn = vocab[0][myRandom];
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
        			(subIndex < vocab[level].length-1 ? subIndex++ : subIndex=0);
    				reDraw();
    	    	}
        		else {
        			// decrement
        			(subIndex > 0 ? subIndex-- : subIndex=(vocab[level].length-1));
    				reDraw();
        		}
        	break;
        	
        	case 'y':
        		if(releaseY-clickY <= 0) {
        			reDraw(playSound);
        		} else {
        			document.getElementById("content").innerHTML = getWordOrNumber();
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
	document.getElementById('content').innerHTML = item[subIndex];
	document.getElementById('level').innerHTML = "Level:" + (level+1) + " use &uarr; &rarr; &darr; &larr;";
	
	ae = document.getElementById('audioItem');
	ae.src = "/karis/wav/" + item[subIndex] + ".wav";
	ae.load();
	
	//ga('send','event','ReDraw Function','Selected '+item[subIndex]+' Via Mouse or Gesture',callback?'with callback':'no callback');
  	//setTimeout(function(){location.href=clickEvent.href},200);
	
	if(callback) {
		callback();
	}
}

function playSound(){
	ae = document.getElementById('audioItem');
		//ae.load();
		ae.play();
		console.log("Play: " + ae.src);
}

function KeyCheck(event) {
    'use strict';
    
    var KeyID = event.keyCode;

    if (KeyID === 39) {
        // console.log('right');
        (subIndex < vocab[level].length-1 ? subIndex++ : subIndex=0);
        reDraw();
    } else if (KeyID === 37) {
        // console.log('left'); 
        (subIndex > 0 ? subIndex-- : subIndex=(vocab[level].length-1));
        reDraw();
    }  else if (KeyID === 38) {
        //console.log('up'); 
        (level < vocab.length-1 ? level++ : level = vocab.length-1);
        reDraw();
    } else if (KeyID === 40) {
        //console.log('down'); 
        (level > 0 ? level-- : level=0);
        //reDraw();
        document.getElementById("content").innerHTML = getWordOrNumber();
    } else if(KeyID === 32) {
    	reDraw(playSound);
    } else {
    	console.log(KeyID);
    }
}



		
	document.getElementById("pressPlay").addEventListener('click', function() {
		playSound();
	}, false);
	
	
	window.addEventListener('keydown',KeyCheck,true);  
	
	document.body.addEventListener('mousemove', onMouseMove, false);
	document.body.addEventListener('mousedown', onMouseStart, false);
	document.body.addEventListener('mouseup', onMouseEnd, false);
	
	document.body.addEventListener('touchmove', onMouseMove, false);
	document.body.addEventListener('touchstart', onMouseStart, false);
	document.body.addEventListener('touchend', onMouseEnd, false);	
