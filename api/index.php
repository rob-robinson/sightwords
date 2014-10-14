<?php

if(isset($_GET['section'])){

    switch($_GET['section']) {

        case 'letter_sounds':

            if(isset($_GET['level'])){
                switch ($_GET['level']){

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

            if(isset($_GET['level'])){
                switch ($_GET['level']){

                    /*
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

                    case 1:
                        echo '{"items":[
                        "bugs",
                        "insect",
                        "ant",
                        "butterfly",
                        "fly",
                        "bee",
                        "wasp",
                        "crane fly",
                        "beetle",
                        "roly-poly",
                        "centipede",
                        "praying mantis",
                        "caterpillar",
                        "roach",
                        "aphid",
                        "bumble bee",
                        "inchworm",
                        "firefly",
                        "walking stick",
                        "abdomen",
                        "poisonous",
                        "chrysalis",
                        "proboscis",
                        "antennae"]}';
                        break;
                    case 2:
                        echo '{"items":["Two","Three","Four"]}';
                        break;

                }
            }

        break;

        case 'math':

            if(isset($_GET['level'])){

                $nums = array();

                switch ($_GET['level']){


                    case 1:

                        for($i=0;$i<25;$i+=1){
                            $nums[] = rand(0,100);
                        }
                        echo '{"items":[' . join(',',$nums) . ']}';
                    break;

                    case 2:

                        for($i=0;$i<25;$i+=1){
                            $nums[] = rand(100,200);
                        }
                        echo '{"items":[' . join(',',$nums) . ']}';

                    break;


                    case 3:

                        for($i=0;$i<25;$i+=1){
                            $nums[] = rand(200,400);
                        }
                        echo '{"items":[' . join(',',$nums) . ']}';

                    break;

                    case 4:

                        for($i=0;$i<25;$i+=1){
                            $nums[] = rand(400,600);
                        }
                        echo '{"items":[' . join(',',$nums) . ']}';

                    break;

                    case 5:

                        for($i=0;$i<25;$i+=1){
                            $nums[] = rand(600,800);
                        }
                        echo '{"items":[' . join(',',$nums) . ']}';

                    break;

                    case 6:

                        for($i=0;$i<25;$i+=1){
                            $nums[] = rand(800,1000);
                        }
                        echo '{"items":[' . join(',',$nums) . ']}';

                    break;
                }
            }

        break;
    }



}

?>