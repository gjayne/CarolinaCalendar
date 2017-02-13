var url_base = "http://wwwp.cs.unc.edu/Courses/comp426-f16/users/azmoudeh/final_project";
$(document).ready(function () {

	$(document).on('click', ".add_button", function () {
		var cid = $(this).attr('id');

		$.ajax(url_base + "/getCourses.php/" + cid,
			{
				type: "GET",
				dataType: "json",
				success: function (assn_ids, status, jqXHR) {
					for (var i = 0; i < assn_ids.length; i++) {
						load_assn_item(assn_ids[i], cid);
					}
				}
			});
	});

	$(document).on('click', ".delete_button", function () {
		var cid = $(this).attr('id');
		$.ajax(url_base + "/getCourses.php/" + cid,
			{
				type: "GET",
				dataType: "json",
				success: function (assn_ids, status, jqXHR) {
					for (var i = 0; i < assn_ids.length; i++) {
						delete_assn_item(assn_ids[i], cid);
					}
				}
			});
	});

	var load_assn_item = function (aid, cid) {
		$.ajax(url_base + "/getCourses.php/" + cid + "/" + aid,
			{
				type: "GET",
				dataType: "json",
				success: function (assignment_json, status, jqXHR) {
					var t = new assignment(assignment_json);
					addAssn(t);
				}
			});
	}

	var delete_assn_item = function (aid, cid) {
		$.ajax(url_base + "/getCourses.php/" + cid + "/" + aid,
			{
				type: "GET",
				dataType: "json",
				success: function (assignment_json, status, jqXHR) {
					var t = new assignment(assignment_json);
					deleteAssn(t);
				}
			});
	}
    
//    function randomAdd(id) {
//	var cid = id;
//
//	//used for testing
//	// alert("Adding class: " + cid);
//	if (($.inArray(cid, activeClasses) != -1)) {
//		alert("Class is already in the calendar!");
//		return;
//	} else {
//		activeClasses.push(id);
//	}
//
//	$.ajax(url_base + "/getCourses.php/" + cid,
//		{
//			type: "GET",
//			dataType: "json",
//			success: function (assn_ids, status, jqXHR) {
//				for (var i = 0; i < assn_ids.length; i++) {
//					load_assn_item(assn_ids[i], cid);
//				}
//			}
//		});
});