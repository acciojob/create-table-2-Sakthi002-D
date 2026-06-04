function createTable() {
    //Write your code here
	const rows = parseInt(prompt("Input number of rows"));
	const column = parseInt(prompt("Input number of columns"));

	if (isNaN(rows) || isNaN(column)  || rows <= 0 || column <= 0) {
		alert("Invalid input");
		return;
	}


	const table = document.getElementById("myTable");
	table.innerHTML ="";


	for(let i = 0; j < rows; i++) {
		const tr = document.createElement("tr");


		for(let j = 0; j < column; j++) {
			const td = document.createElement("td");
			td.textContent = `Row-${i}  Column-${j}`;
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
  
}
