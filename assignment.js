var assignment = function(assignment_json) {
    this.cid = assignment_json.cid;
    this.courseName = assignment_json.course_name;
    this.aid = assignment_json.aid;
    this.assn_name = assignment_json.assn_name;
    this.due_date = assignment_json.due_date;
};

var addAssn = function(assn) {
    
    var id = assn.due_date;
    var element = document.getElementById(id).childNodes[0];
    var entry = document.createElement('li');
    entry.setAttribute('class', assn.cid);
    entry.append(assn.courseName + ' - ' + assn.assn_name);
    element.append(entry);
}

var deleteAssn = function(assn) {
    var cls = assn.cid;
    $('.'+cls).remove();
}