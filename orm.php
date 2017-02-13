<?php
date_default_timezone_set('America/New_York');


class assignment
{
	private $cid;
    private $courseName;
    private $aid;
    private $assn_name;
    private $due_date;

	public static function connect() {
			return new mysqli("classroom.cs.unc.edu", 
                            "azmoudeh", 
                            "25212521", 
                            "azmoudehdb");
	}
    
    public static function findByID($cid) {
    $mysqli = assignment::connect();

    $result = $mysqli->query("select aid from Assignments where cid = " . $cid);
    if ($result) {
      if ($result->num_rows == 0) {
	return null;
      }
    while ($next_row = $result->fetch_array()) {
	$assn_ids[] = intval($next_row['aid']);
      }
        return $assn_ids;
    }
    return null;
  }
    
    public static function findAssignmentByID($aid, $cid) {
        $mysqli = assignment::connect();
        
        $result = $mysqli->query("select * from Assignments where aid = " . $aid);
        if ($result) {
            if ($result->num_rows == 0) {
                return null;
            }
            
            $todo_info = $result->fetch_array();
            
            return new assignment(intval($todo_info['cid']),
                                  $todo_info['CourseName'],
                                  intval($todo_info['aid']),
                                 $todo_info['AssignmentName'],
                                 $todo_info['DueDate']);
        }
        return null;
    }

	public static function getAllCourseIDs() {
		$mysqli = assignment::connect();

		$result = $mysqli->query("SELECT DISTINCT cid FROM Classes");
		$courseID_array = array();

		if ($result) {
        while ($next_row = $result->fetch_array()) {
            $courseID_array[] = intval($next_row['cid']);
        }
      }
      return $courseID_array;
	}

	public static function getAllCourseNames() {
		$mysqli = assignment::connect();
		$result = $mysqli->query("SELECT DISTINCT CourseName FROM Classes");
		$courseName_array = array();

		if ($result) {
        while ($next_row = $result->fetch_array()) {
            $courseName_array[] = $next_row['CourseName'];
        }

        return $courseName_array;

        /*
        return new event(
        		$courseName_array
        		);
        */
	}
}
    public static function getClassInfo($cid) {
        $mysqli = assignment::connect();
        $result = $mysqli->query("select * from Classes where cid = " . $cid);
        if ($result) {
            if ($result->num_rows == 0) {
                return null;
            }
        $class_info = $result->fetch_array();
        
        return new assignment ($class_info['cid'], $class_info['CourseName'], 0, "ok", 0);
        }
        return null;
    }

	private function __construct($cid, $courseName, $aid, $assn_name, $due_date) {
			$this->cid = $cid;
            $this->courseName = $courseName;
            $this->aid = $aid;
            $this->assn_name = $assn_name;
            $this->due_date = $due_date;
	}

    public function getAssnJSON() {
        
        $json_obj = array('cid' => $this->cid,
                          'course_name' => $this->courseName,
                          'aid' => $this->aid,
		                  'assn_name' => $this->assn_name,
		                  'due_date' => $this->due_date);
    return json_encode($json_obj);
    }
    
    public function getClassJSON() {
        $json_obj = array('cid' => $this->cid,
                          'course_name' => $this->courseName);
        return json_encode($json_obj);
    }
}

?>