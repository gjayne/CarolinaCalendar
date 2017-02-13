
function search(element) {
    var courseName = document.getElementById("inputName").value.toUpperCase();
    var courseNum = document.getElementById("inputNumber").value;
    var course = "" + courseName + courseNum;

    if (element == 'false') {
        var elements = document.getElementsByClassName("course");
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.display == 'none') {
                elements[i].style.display = 'block';
            }
        }
        document.getElementById('search').style.display = 'block';
        document.getElementById('reset').style.display = 'none';
        return;
    }

    if (course != "") {
        document.getElementById('search').style.display = 'none';
        document.getElementById('reset').style.display = 'block';
    }

    switch(document.getElementById('equality').value) {
        case 'equals':
            if (courseName != "" && courseNum != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].id.toUpperCase() != course) {
                        elements[i].style.display = 'none';
                    }
                }
            } else if (courseNum != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    // var id = elements[i].attr('id').match(/(\d+)/)[1];
                    var id = elements[i].id.substring(4, 8);
                    var valNum = parseInt(id, 10);
                    if (valNum != courseNum) {
                        elements[i].style.display = 'none';
                    }
                }
            } else if (courseName != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    var id = elements[i].id.substring(0, 4);
                    if (id != courseName) {
                        elements[i].style.display = 'none';

                    }
                }
            }
            break;
        case 'lessThan':
            if (courseName != "" && courseNum != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].id >= course || elements[i].id.substring(0, 4) != courseName) {
                        elements[i].style.display = 'none';
                    }
                }
            } else if (courseNum != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    // var id = elements[i].attr('id').match(/(\d+)/)[1];
                    var id = elements[i].id.substring(4, 8);
                    var valNum = parseInt(id, 10);
                    if (valNum >= courseNum) {
                        elements[i].style.display = 'none';                    }
                }
            } else if (courseName != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    var id = elements[i].id.substring(0, 4);
                    if (id >= courseName) {
                        elements[i].style.display = 'none';                    }
                }
            }
            break;
        case 'greaterThan':
            if (courseName != "" && courseNum != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    if (elements[i].id <= course || elements[i].id.substring(0, 4) != courseName) {
                        elements[i].style.display = 'none';                    }
                }
            } else if (courseNum != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    // var id = elements[i].attr('id').match(/(\d+)/)[1];
                    var id = elements[i].id.substring(4, 8);
                    var valNum = parseInt(id, 10);
                    if (valNum <= courseNum) {
                        elements[i].style.display = 'none';                    }
                }
            } else if (courseName != "") {
                var elements = document.getElementsByClassName("course");
                for (var i = 0; i < elements.length; i++) {
                    var id = elements[i].id.substring(0, 4);
                    if (id <= courseName) {
                        elements[i].style.display = 'none';                    }
                }
            }
            break;
    }
}

//changes elements inside popup and shows it;
function flip(id, event) {
    var a = event.target;
    if (a.classList.contains("add_button") || a.parentNode.classList.contains("add_button")) {
        return; //no need to show a popup since add button was clicked
    } else {
        var classInfo = a.className + " info:<br>Showing more info <ul><li> if you click more classes</li></ul>";
        document.getElementById("popupHeader").innerHTML="Class information for " + id;
        document.getElementById("extraInfo").innerHTML=classInfo;
        showPopup();
    }
}

function showPopup() {
    document.getElementById("overlay").style.display= 'block';

}

function closePopup() {
    document.getElementById("overlay").style.display= 'none';
}


