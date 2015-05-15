<?php

if (isset($_GET['section'])) {

    switch ($_GET['section']) {

        case 'letter_sounds':

            if (isset($_GET['level'])) {
                switch ($_GET['level']) {

                    case 1:
                        echo '{"items":[
                        "m","g","D","b","o","J","K","x","L","a","s","P","U","e","h","n","Z","t","y","R","f","I","x","H","M","z",
                        "u","O","i","v","y","wh","A","l","Ch","N","G","sh","r","Ph","ch","F","Th","v","E","g","V","a","w",
                        "t","s","y","ph","K","qu","X","Sh","i","u","th","K","b","L","g","J","a","m","o","x","D","n","P",
                        "t","e","y","s","h","R","U","Z","u","M","x","i","f","z","I","v","H","O","l","A","N","sh","y","Ph",
                        "Ch","r","wh","G","w","ch","V","g","Th","a","F","t","v","E"]}';
                        break;
                    case 2:
                        echo '{"items":["Two","Three","Four"]}';
                        break;

                }
            }

            break;

        case 'vocab':

            if (isset($_GET['level'])) {
                switch ($_GET['level']) {

                    /*
                    	[
                        {"level":"a", "words": ["I","a","the","and","is","see","can","like","my"]},
                        {"level":"b", "words": ["look","it","no","said","went","play","at","go","up","we"]},
                        {"level":"c", "words": ["come","for","me","here","are","have","on","you","saw","was"]},
                        {"level":"d", "words": ["boy","girl","he","she","him","her","this","that","of","yes"]},
                        {"level":"e", "words": ["had","has","away","will","with","then","they","them","want","put"]},
                        {"level":"f", "words": ["under","little","good","out","our","your","why","not","do","where"]},
                        {"level":"short a","words" : ["mad","rat","van","tag","sat","jam","bad","map","ham","fan"]},
                        {"level":"short e","words" : ["set","pet","hen","fed","men","bed","red","jet","leg","wet"]},
                        {"level":"short i","words" : ["six","fin","wig","sit","pig","dig","bit","him","lip","rip"]}
                        ];
                    */

                    case 1:
                        echo '{"items":["all","I","an","go","my","no","be","at","sat","yes"]}';
                        break;
                    case 2:
                        echo '{"items":["are","can","had","am","into","let","day","did","has","me"]}';
                        break;
                    case 3:
                        echo '{"items":["little","big","as","see","we","run","was","saw","two","too"]}';
                        break;
                    case 4:
                        echo '{"items":["will","ran","this","up","down","Mrs.","Mr.","Miss","on","ask"]}';
                        break;
                    case 5:
                        echo '{"items":["new","old","about","from","girl","have","came","come","get","off"]}';
                        break;
                    case 6:
                        echo '{"items":["he","away","boy","its","do","by","out","sun","they","she"]}';
                        break;
                    case 7:
                        echo '{"items":["not","help","dad","baby","his","or","look","if","said","way"]}';
                        break;
                    case 8:
                        echo '{"items":["when","stop","say","thing","what","put","cat","dog","mother","father"]}';
                        break;
                    case 9:
                        echo '{"items":["men","him","but","cry","fun","got","bed","were","with","sky"]}';
                        break;
                    case 10:
                        echo '{"items":["pet","room","very","tell","why","her","fly","hat","oh","now"]}';
                        break;
                    case 11:
                        echo '{"items":["book","hello","ball","pig","tree","stay","so","would","could","may"]}';
                        break;
                    case 12:
                        echo '{"items":["aunt","know","miss","best","car","grandfather","grandmother","here","hill","eat"]}';
                        break;
                    case 13:
                        echo '{"items":["after","bit","apple","fat","just","like","mad","took","over","then"]}';
                        break;
                    case 14:
                        echo '{"items":["three","play","take","want","us","wall","uncle","sleep","pick","toy"]}';
                        break;
                    case 15:
                        echo '{"items":["went","happy","gave","for","fast","call","bring","cake","how","good"]}';
                        break;
                    case 16:
                        echo '{"items":["man","night","woman","roll","under","white","boat","children","make"]}';
                        break;
                    case 17:
                        echo '{"items":["once","next","long","around","bat","cold","four","name","fell","every"]}';
                        break;
                    case 18:
                        echo '{"items":["them","wet","use","thank","your","rain","please","there","work","side"]}';
                        break;
                    case 19:
                        echo '{"items":["egg","doll","hair","door","noise","someone","train","yard","laugh","money"]}';
                        break;
                    case 20:
                        echo '{"items":["build","afraid","horse","pink","gray","color","near","guess","water","rock"]}';
                        break;
                    case 21:
                        echo '{"items":["brown","tail","ready","wind","garden","farm","must","basket","head","airplane"]}';
                        break;
                    case 22:
                        echo '{"items":["balloon","heard","rabbit","window","snow","hurry","broken","shall","picture","wagon"]}';
                        break;
                    case 23:
                        echo '{"items":["shoe","who","good-bye","hear","blue","yellow","orange","green","red","purple"]}';
                        break;
                    case 24:
                        echo '{"items":["hand","found","birthday","hole","fish","street","bird","cow","pretty","black"]}';
                        break;
                    case 25:
                        echo '{"items":["paper","their","sometimes","times","funny","goat","chair","nose","made","truck"]}';
                        break;
                    case 26:
                        echo '{"items":["pocket","school","paint","box","began","live","bear","find","leave","morning"]}';
                        break;
                    case 27:
                        echo '{"items":["something","road","ride","wish","story","catch","fire","dress","barn","chicken"]}';
                        break;
                    case 28:
                        echo '{"items":["pull","walk","think","again","another","ate","open","many","far","give"]}';
                        break;
                    case 29:
                        echo '{"items":["add","lost","house","other","noon","jump","home","coat","ground","first"]}';
                        break;
                    case 30:
                        echo '{"items":["our","party","some","soon","town","where","feet","five","back","animal"]}';
                        break;

                }
            }

            break;

        case 'math':

            if (isset($_GET['level'])) {

                $nums = array();

                switch ($_GET['level']) {




                    case 1:

                        for ($i = 0; $i < 25; $i += 1) {
                            $nums[] = rand(100, 1000);
                        }
                        echo '{"items":[' . join(',', $nums) . ']}';

                        break;
                    case 2:

                        for ($i = 0; $i < 25; $i += 1) {
                            $nums[] = rand(1000, 2000);
                        }
                        echo '{"items":[' . join(',', $nums) . ']}';

                        break;
                    case 3:

                        for ($i = 0; $i < 25; $i += 1) {
                            $nums[] = rand(2000, 5000);
                        }
                        echo '{"items":[' . join(',', $nums) . ']}';

                        break;
                    case 4:

                        for ($i = 0; $i < 25; $i += 1) {
                            $nums[] = rand(5000, 10000);
                        }
                        echo '{"items":[' . join(',', $nums) . ']}';

                        break;

                    case 5:

                        for ($i = 0; $i < 25; $i += 1) {
                            $nums[] = rand(1, 10) . " + " . rand(1, 10) . " = ___ ";

                        }



                        echo  json_encode('{"items":' . $nums . '}');

                        break;

                }
            }

            break;
    }


}

?>