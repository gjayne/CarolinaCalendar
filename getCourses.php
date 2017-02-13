<?php

require_once('orm.php');

$path_components = explode('/', $_SERVER['PATH_INFO']);

if ($_SERVER['REQUEST_METHOD'] == "GET") {
    
        if (($path_components[1]) == 'cards'  &&
           (count($path_components) >= 3)) {
        
        $cid = intval($path_components[2]);
        
        $class_info = assignment::getClassInfo($cid);
        
        if ($class_info == null) {
            header("HTTP/1.0 404 Not Found");
            print("course id: " . $cid . " not found.");
            exit();
        }
        
        header("Content-type: application/json");
        print($class_info->getClassJSON());
        exit();
    }

    
    if ((count($path_components) >= 3) &&
      ($path_components[2] != "")) {
        
        $aid = intval($path_components[2]);
        
        $cid = intval($path_components[1]);
        
        $assn = assignment::findAssignmentByID($aid, $cid);
        
        if ($assn == null) {
          // Todo not found.
          header("HTTP/1.0 404 Not Found");
          print("assignment id: " . $aid. " not found.");
          exit();
        }
        
        header("Content-type: application/json");
        print($assn->getAssnJSON());
        exit();
        
    }

	if ((count($path_components) >= 2) &&
      ($path_components[1] != "cards")) {

		$courseID = intval($path_components[1]);

		$assn_ids = assignment::findByID($courseID);

		if ($assn_ids == null) {
          // Todo not found.
          header("HTTP/1.0 404 Not Found");
          print("course id: " . $courseID . " not found.");
          exit();
        }

        header("Content-type: application/json");
        print(json_encode($assn_ids));
        exit(); 

    }
    
    // ID not specified, then must be asking for index
    header("Content-type: application/json");
    print(json_encode(assignment::getAllCourseIDs()));
    exit();
        

}


?>