// from data.js
var tableData = data;

// YOUR CODE HERE!

var table = d3.select("tbody");

function buildTable(data) {
    table.html("")
    data.forEach((dataRow) => {
        var row = table.append("tr");

        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
buildTable(tableData);

var filterButton =  d3.select("#filter-btn");

var inputField = d3.select("#datetime");
var newText = "";

inputField.on("change", function(){
	newText = d3.event.target.value;
});
function onClick(){
	console.log(newText);
	table.selectAll("tr").remove();
	if (newText === ""){
		fillTable();
	}
	else{
		for (var i = 0; i < tableData.length; i++){
			if (tableData[i].datetime === newText){
				var row = table.append("tr");

				var cell = row.append("td");
				cell.text(tableData[i].datetime);

				cell = row.append("td");
				cell.text(tableData[i].city);

				cell = row.append("td");
				cell.text(tableData[i].state);

				cell = row.append("td");
				cell.text(tableData[i].country);

				cell = row.append("td");
				cell.text(tableData[i].shape);

				cell = row.append("td");
				cell.text(tableData[i].durationMinutes);

				cell = row.append("td");
				cell.text(tableData[i].comments);
			}
		}
	}
}
filterButton.on("click", onClick);

fillTable();