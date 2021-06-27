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

//color squares
var len = 10;
var gradient = document.querySelectorAll("#legend .key")[0];
for(var i=1; i<=len; i++){
	var rand = (i-1)*(1/(len-1));
	var color = randomGradient(rand,gradient);
	var prop = "--"+numberToWords.toWords(i);
	document.documentElement.style.setProperty(prop,"rgb("+color+")");
}

//day/night mode
var now = new Date().getHours();
if (now >= 19 && now <= 8){
	document.documentElement.style.setProperty("--bg-color","#272727");
	document.documentElement.style.setProperty("--box-color","#323232");
	document.documentElement.style.setProperty("--text","#cccccc");
}