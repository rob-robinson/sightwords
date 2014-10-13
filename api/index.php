<?php

if(isset($_GET['section'])){

    switch($_GET['section']) {

        case 'vocab':

            if(isset($_GET['level'])){
                switch ($_GET['level']){

                    case 1:
                        echo '{"items":["One","Two","Three"]}';
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