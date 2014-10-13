
/*
ideally, the vocab would be gotten from a rest service...
 */

var items = {};

function xhrGet(subject, grade, level, callback, type) {
    var reqUri = '/karis/api/'+subject+'/'+grade+'/level/'+level+'';
    var xhr = new XMLHttpRequest();

    xhr.open("GET",reqUri,true);

    if (type === null) {
        xhr.responseType = type;
    }

    xhr.onload = callback;
    xhr.send();
}



// Test code for you to run
//var test = function() {
//    xhrGet('/karis/api/vocab/k/level/1', parseJSON, null);
//};

/*
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
	
*/