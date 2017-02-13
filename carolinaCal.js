var url_base = "http://wwwp.cs.unc.edu/Courses/comp426-f16/users/azmoudeh/final_project";

$(document).ready(function () {
	//Gets the current date
	//var d = new Date();
	//var day = d.getDate();
	//var month = d.getMonth()+1;

	var day = 24;
	var month = 12;
	var count = 0;
	
	console.log(month);
	console.log(day);

	//removes all hardcoded cards for testing
	 document.getElementById("cards").innerHTML = "";

	$('#august').css("display","table");
			
			var text = '8';
			count = 0;
			for (i = 0; i <= 4; i++) {
				var row = $('<tr></tr>');
				for(j = 0; j <7; j++) {
					
					if(i == 4 && j > 2) {
						row.append('<td class="next_month"></td>');
					}
					else {
						count++;
						text += count;
						var cells = "<td class='current_month' id="+text+"><div class='absolute'><span class='date'>"+count+"</span><br></div></td>"
						row.append(cells)
						text = '8';
					}
				}
				$('#august').append(row);
			}
	
		$('#september').css("display","table");
			
			var text = '9';
			count = 0;
			for (i = 0; i <= 4; i++) {
				var row = $('<tr></tr>');
				for(j = 0; j <7; j++) {
					if(j < 3 && i == 0){
						row.append('<td class="previous_month"></td>');
					}
					else if(i == 4 && j > 4) {
						row.append('<td class="next_month"></td>');
					}
					else {
						count++;
						text += count;
						var cells = "<td class='current_month' id="+text+"><div class='absolute'><span class='date'>"+count+"</span><br></div></td>"
						row.append(cells)
						text = '9';
					}
				}
				$('#september').append(row);
			}

		$('#october').css("display","table");
			
			var text = '10';
			count = 0;
			for (i = 0; i <= 5; i++) {
				var row = $('<tr></tr>');
				for(j = 0; j <7; j++) {
					if(j <= 4 && i == 0){
						row.append('<td class="previous_month"></td>');
					}
					else if(i == 5 && j > 0) {
						row.append('<td class="next_month"></td>');
					}
					else {
						count++;
						text += count;
						var cells = "<td class='current_month' id="+text+"><div class='absolute'><span class='date'>"+count+"</span><br></div></td>"
						row.append(cells)
						text = '10';
					}
				}
				$(october).append(row);
				$('#days .date').css("margin-top","-30px");
			}

		$('#november').css("display","table");
			
			text = '11';
			count = 0;
			for (i = 0; i <= 4; i++) {
				var row = $('<tr></tr>');
				for(j = 0; j <7; j++) {
					if(j == 0 && i == 0){
						row.append('<td class="previous_month"></td>');
					}
					else if(i == 4 && j > 2) {
						row.append('<td class="next_month"></td>');
					}
					else {
						count++;
						text += count;
						var cells = "<td class='current_month' id="+text+"><div class='absolute'><span class='date'>"+count+"</span><br></div></td>"
						row.append(cells);
						text = '11';
					}
				}
				$(november).append(row);
			}

		$('#december').css("display","table");
			
			var text = '12';
			count = 0;
			for (i = 0; i <= 4; i++) {
				var row = $('<tr></tr>');
				for(j = 0; j <7; j++) {
					if(j <= 2 && i == 0){
						row.append('<td class="previous_month"></td>');
					}
					else if(i == 4 && j > 5) {
						row.append('<td class="next_month"></td>');
					}
					else {
						count++;
						text += count;
						var cells = "<td class='current_month' id="+text+"><div data-role='main' class='absolute'><span class='date'>"+count+"</span><br></div></td>";
						row.append(cells);
						text = '12';
					}
				}
				$(december).append(row);
			}

	$('#august').hide();
	$('#september').hide();
	$('#october').hide();
	$('#november').hide();
	$('#december').hide();
	$('#addEvents').hide();
	var currentDay = "#"+month+day;

	switch(month){

		case 8:
			$('#august').find(currentDay).attr("id","currentDay");
			$('#currentMonth').replaceWith("<span id='currentMonth'>august</span>");
			$('#august').show();
		break;
			
		case 9:
			$('#september').find(currentDay).attr("id","currentDay");
			$('#currentMonth').replaceWith("<span id='currentMonth'>september</span>");
			$('#september').show();
		break;
			
		case 10:
			$('#october').find(currentDay).attr("id","currentDay");
			$('#currentMonth').replaceWith("<span id='currentMonth'>october</span>");
			$('#october').show();
		break;

		case 11:
			$('#november').find(currentDay).attr("id","currentDay");
			$('#currentMonth').replaceWith("<span id='currentMonth'>november</span>");
			$('#november').show();
		break;

		case 12:
			$('#december').find(currentDay).attr("id","currentDay");
			$(currentDay).attr("id","currentDay");
			$('#currentMonth').replaceWith("<span id='currentMonth'>december</span>");
			$('#december').show();
		break;
	}

	$('#findCourses').on('click', function () {
		$('#calendar').hide();
		$('#addEvents').show();
	});

	$('#carolinaCalendar').on('click', function () {
		$('#calendar').show();
		$('#addEvents').hide();
	});

	$('#cal').on('click', function () {
		$('#calendar').show();
		$('#addEvents').hide();
	});

	$('.prev').on('click', function () {

		//$('#november').css("display","hidden");
		var m = $('#currentMonth').text();
		switch(m) {
			case 'august':
			break;

			case 'september':
				$('#currentMonth').replaceWith("<span id='currentMonth'>august</span>");
				$('#september').hide();
				$('#august').show();
			break;

			case 'october':
				$('#currentMonth').replaceWith("<span id='currentMonth'>september</span>");
				$('#october').hide();
				$('#september').show();
			break;

			case 'november':
				console.log(m);
				$('#currentMonth').replaceWith("<span id='currentMonth'>october</span>");
				$('#october').show();
				$('#november').hide();
				
			break;

			case 'december':
				$('#currentMonth').replaceWith("<span id='currentMonth'>november</span>");
				$('#december').hide();
				$('#november').show();
			break;
		}
		
	});

	$(document).keydown(function(e){
		if(e.keyCode == 39){
			var m = $('#currentMonth').text();
			switch(m) {
				case 'august':
					$('#currentMonth').replaceWith("<span id='currentMonth'>september</span>");
					$('#august').hide();
					$('#september').show();
				break;

				case 'september':
					$('#currentMonth').replaceWith("<span id='currentMonth'>october</span>");
					$('#september').hide();
					$('#october').show();
				break;

				case 'october':
					$('#currentMonth').replaceWith("<span id='currentMonth'>november</span>");
					$('#october').hide();
					$('#november').show();
				break;

				case 'november':
					console.log(m);
					$('#currentMonth').replaceWith("<span id='currentMonth'>december</span>");
					$('#november').hide();
					$('#december').show();
					
				break;

				case 'december':
					
				break;
			}
		}

		else if(e.keyCode == 37){
				var m = $('#currentMonth').text();
			switch(m) {
				case 'august':
				break;

				case 'september':
					$('#currentMonth').replaceWith("<span id='currentMonth'>august</span>");
					$('#september').hide();
					$('#august').show();
				break;

				case 'october':
					$('#currentMonth').replaceWith("<span id='currentMonth'>september</span>");
					$('#october').hide();
					$('#september').show();
				break;

				case 'november':
					console.log(m);
					$('#currentMonth').replaceWith("<span id='currentMonth'>october</span>");
					$('#october').show();
					$('#november').hide();
					
				break;

				case 'december':
					$('#currentMonth').replaceWith("<span id='currentMonth'>november</span>");
					$('#december').hide();
					$('#november').show();
				break;
			}
		}
	});

	$('.next').on('click', function () {
		//$(currentMonth).value()
		var m = $('#currentMonth').text();
		switch(m) {
			case 'august':
				$('#currentMonth').replaceWith("<span id='currentMonth'>september</span>");
				$('#august').hide();
				$('#september').show();
			break;

			case 'september':
				$('#currentMonth').replaceWith("<span id='currentMonth'>october</span>");
				$('#september').hide();
				$('#october').show();
			break;

			case 'october':
				$('#currentMonth').replaceWith("<span id='currentMonth'>november</span>");
				$('#october').hide();
				$('#november').show();
			break;

			case 'november':
				console.log(m);
				$('#currentMonth').replaceWith("<span id='currentMonth'>december</span>");
				$('#november').hide();
				$('#december').show();
				
			break;

			case 'december':
				
			break;
		}
	});

	$.ajax(url_base + "/getCourses.php",
		{
			type: "GET",
			dataType: "json",
			success: function (class_ids, status, jqXHR) {
				for (var i = 0; i < class_ids.length; i++) {
					load_cards(class_ids[i]);
//                    alert("card id: " + class_ids[i]);
				}
			}
		});
	var load_cards = function (cid) {
		$.ajax(url_base + "/getCourses.php/" + "cards/" + cid,
			{
				type: "GET",
				dataType: "json",
				success: function (class_json, status, jqXHR) {
//                    alert("json: " + class_json.course_name);
					var c = new card(class_json);
//                    alert("cid: " + c.cid);
					addCard(c);
				}
			});
	}

});