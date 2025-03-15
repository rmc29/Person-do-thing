

var wordlist= new Set (["person","place","do","thing","eat", "feel", "get", "go","have","like","make","say","hear","see","think","use","want","big","far","fast","good","hot","many","other","real","hard","same","after","before","again","and","but","in","on","with","more","yes","no","can","up"]);

function checkInput()
{		
	var output = "";
	var inputstring = document.getElementById("inputbox").value.toLowerCase();
	var inputarray = inputstring.split(/[^\w]/); //split on all nonword characters, including hyphen
	for (i of inputarray) {
		color = (wordlist.has(i) ? "green" : "red");
		output += "<span style='color:" + color + "'>" + i + "</span> ";
		
	}		
	outputdiv.innerHTML = output;
}