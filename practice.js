$(document).ready(function(){
	// number 1
	$('#submitBtn').click(function() {
		var inputField = $('#oneInput').val();
		$('#oneOutput').text(inputField);
	});


	//number 2
	$('.chex').click(function() {
		$('.hidden').toggleClass('hidden')
	})


	//number 3
	function makeNewCat(name, weight, hunger) {
		var newTableRow = $("<tr>");

		var nameColumn = $("<td>");
		var weightColumn = $("<td>");
		var hungerColumn = $("<td>");

		$('table').append(newTableRow);
		newTableRow.append(nameColumn);
		newTableRow.append(weightColumn);
		newTableRow.append(hungerColumn);


		nameColumn.append(name);
		weightColumn.append(weight);
		hungerColumn.append(hunger);

		if (hunger == "Hangry") {
			newTableRow.css({backgroundColor: "red"})
		}
		if (hunger == "Content") {
			newTableRow.css({backgroundColor: "green"})
		}
	}
	makeNewCat("Patricia", "5", "Content")
	makeNewCat("Tommy", "6", "Hangry")


	//number 4
	var allTheTDs = $('td');
	allTheTDs.each(function(i, td) {
		if ($(td).text() == "Hangry") {
			$(td).parent().css({backgroundColor: "red"})
		}
		if ($(td).text() == "Content") {
			$(td).parent().css({backgroundColor: "green"})
		}
		
	});


	makeNewCat("Ellie", "2", "Content")
	makeNewCat("Ellie", "2", "Content")
	makeNewCat("Ellie", "2", "Content")
	makeNewCat("Ellie", "2", "Hangry")
	makeNewCat("Ellie", "2", "Content")
	makeNewCat("Ellie", "2", "Content")
	makeNewCat("Ellie", "2", "Content")


});
