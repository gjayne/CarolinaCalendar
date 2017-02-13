var card = function(class_json) {
    this.cid = class_json.cid;
    this.courseName = class_json.course_name;
};

var addCard = function(card) {
    var id = card.cid;
    var course = card.courseName;
    var number = course.match(/(\d+)/)[1];
    var name = course.substring(0, 4);
    var element = document.getElementById('cards');

    //outer div
    var entry = document.createElement("div");
    entry.setAttribute('id', "listCourses");
    entry.onclick = "flip('" + course + "', event);";

    //inner div
    var inside = document.createElement("div");
    inside.setAttribute('class', "course");
    inside.setAttribute('id', name + number);
    entry.append(inside);

    //name
    var nameLabel = document.createElement("div");
    nameLabel.setAttribute('class', "courseName");
    nameLabel.innerHTML = name;
    nameLabel.style.textAlign = "center";
    inside.append(nameLabel);

    //number
    var numLabel = document.createElement("div");
    numLabel.setAttribute('class', "courseNumber");
    numLabel.innerHTML = number;
    numLabel.style.textAlign = "center";
    inside.append(numLabel);

    //button
    var button = document.createElement("button");
    button.setAttribute('id', id);
    button.setAttribute('class', "add_button");
    button.style.margin = "0 auto";
    button.innerHTML = "<strong>Add</strong>";
    inside.append(button);

    //delete button
    var deleted = document.createElement("button");
    deleted.setAttribute('id', id);
    deleted.setAttribute('class', "delete_button");
    deleted.style.margin = "0 auto";
    deleted.innerHTML = "<strong>Delete</strong>";
    inside.append(deleted);

    element.append(entry);
}
