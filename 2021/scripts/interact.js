//toggle full/compact
var checkbox = document.getElementById("toggle");
checkbox.addEventListener('change', (event) => {
	if (event.target.checked) {
		displayFull();
	} else {
		var full = document.getElementById("full");
		fadein(document.getElementById("grid"));
		fadeout(full);
		full.parentNode.removeChild(full);
	}
});

var numBox = 10;
var theDiv = document.querySelectorAll("#legend .key")[0];
for (var i=0; i<numBox; i++){
	//generate colors
	var theLoc = i/(numBox-1);
	var color = randomGradient(theLoc,theDiv);
	//generate label boxes
	theDiv.appendChild(makeBox(color));
	//color squares
	var prop = "--"+numberToWords.toWords(i+1);
	document.documentElement.style.setProperty(prop,"rgb("+color+")");

}

//day/night mode
var now = new Date().getHours();
if (now >= 19 || now < 8){
	document.documentElement.style.setProperty("--bg-color","#272727");
	document.documentElement.style.setProperty("--box-color","#323232");
	document.documentElement.style.setProperty("--text","#cccccc");
}

//dynamic generate colored box
function makeBox(color){
	var newElem = document.createElement("div");
	newElem.style.backgroundColor = "rgb("+color+")";
	return newElem;
}
