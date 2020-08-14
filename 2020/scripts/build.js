var jan = {};
var feb = {};
var mar = {};
var apr = {};
var may = {};
var jun = {};
var jul = {};
var aug = {};
var sep = {};
var oct = {};
var nov = {};
var dec = {};

var months = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];
var tooltips = [];
var leapYear = true;

var grid = document.getElementById("grid"),
	legend = document.getElementById("legend"),
	toggle = document.getElementById("container");

grid.style.display = "none";
legend.style.display = "none";
toggle.style.display = "none";

var loader = document.getElementById("load");

/* For the CORS-Anywhere server, I'm just reusing the one I made for the MOE2018TRF005 study because too lazy to make a new one... */
Papa.parse("https://moe2018trf005cors.herokuapp.com/https://docs.google.com/spreadsheets/d/144ZovLziyEiaYrRXNbIZtItAwVq6yhaPK6Q6fKi7tHg/pub?output=csv",{
	download: true, 
	header: true,
	step: function(row) {
		var thisRow = row.data;
		var thisMonth = parseInt(thisRow.Month);
		var thisDay = parseInt(thisRow.Day);
		months[thisMonth-1][thisRow.Day] = thisRow.Type.toLowerCase();
		if(thisRow.Tooltip){
			tooltips.push({
				month:thisMonth,
				day:thisDay,
				content:thisRow.Tooltip
			});
		}
	},
	complete: function (results) {
		fillGrid(months,tooltips,leapYear);
		fadeout(loader);
		fadein(legend);
		fadein(toggle);
		fadein(grid);
	} 
});


function fillGrid(months, tooltips, leapYear) {
	for (let i = 1; i <= 12; i++) {
		var mth = document.createElement("div");
		var mthName;
		switch (i) {
			case 1:
				mthName = "Jan";
				mth.className = "one";
				break;
			case 2:
				mthName = "Feb";
				mth.className = "two";
				break;
			case 3:
				mthName = "Mar";
				mth.className = "three";
				break;
			case 4:
				mthName = "Apr";
				mth.className = "four";
				break;
			case 5:
				mthName = "May";
				mth.className = "five";
				break;
			case 6:
				mthName = "Jun";
				mth.className = "six";
				break;
			case 7:
				mthName = "Jul";
				mth.className = "seven";
				break;
			case 8:
				mthName = "Aug";
				mth.className = "eight";
				break;
			case 9:
				mthName = "Sep";
				mth.className = "nine";
				break;
			case 10:
				mthName = "Oct";
				mth.className = "ten";
				break;
			case 11:
				mthName = "Nov";
				mth.className = "eleven";
				break;
			case 12:
				mthName = "Dec";
				mth.className = "twelve";
				break;
		} // end switch
		mth.className += " wrapper";
		switch (i) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				for (let j = 1; j <= 31; j++) {
					var day = document.createElement("div");
					day.className += months[i - 1][j];
					day.className += " elem";
					mth.appendChild(day);
				}
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				mth.className = "wrapper";
				for (let j = 1; j <= 30; j++) {
					var day = document.createElement("div");
					day.className = months[i - 1][j];
					day.classList += " elem";
					mth.appendChild(day);
				}
				break;
			case 2:
				var leapCount;
				if (leapYear) leapCount = 29;
				else leapCount = 28;
				for (let j = 1; j <= leapCount; j++) {
					var day = document.createElement("div");
					day.className = months[i - 1][j];
					day.className += " elem";
					mth.appendChild(day);
				}
				break;
		} // end switch
		var howManyBefore = [2,5,6,2,4,0,2,5,1,3,6,1];
		for (var j = 0; j < howManyBefore[i - 1]; j++) {
			var daybf = document.createElement("div");
			daybf.className = "elem bef";
			mth.insertBefore(daybf, mth.firstChild);
		}
		var howManyAfter = [9,8,5,10,7,12,9,6,11,8,6,10];
		for (var j = 0; j < howManyAfter[i - 1]; j++) {
			var dayaf = document.createElement("div");
			dayaf.className = "elem aft";
			mth.appendChild(dayaf);
		}
		document.getElementById("grid").appendChild(mth);
	} // end for
	genTooltip(document.getElementById("grid"));
	makeTooltip();
}

function genTooltip(elem){
	for (let k = 0; k < tooltips.length; k++) {
		let m = tooltips[k].month - 1;
		let d = tooltips[k].day;
		let c = tooltips[k].content;
		let wrap = elem.getElementsByClassName("wrapper")[m];
		let b = wrap.getElementsByClassName("bef").length;
		wrap.getElementsByTagName("div")[d + b - 1].title = c;
		wrap.getElementsByTagName("div")[d + b - 1].classList.add("titled");
	}
}

function displayFull() {
	fadeout(document.getElementById("grid"));
	var newGrid = document.createElement("main");
	var allElems = document.getElementsByClassName("wrapper");
	for (var k = 0; k < allElems.length; k++) {
		var newWrap = allElems[k].cloneNode(true);
		while (newWrap.querySelector(".bef"))
			newWrap.removeChild(newWrap.querySelector(".bef"));
		while (newWrap.querySelector(".aft"))
			newWrap.removeChild(newWrap.querySelector(".aft"));
		newGrid.appendChild(newWrap);
	}
	newGrid.id = "full";
	genTooltip(newGrid);
	document.body.appendChild(newGrid);
	makeTooltip();
}

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

var len = document.getElementById("legend").querySelectorAll(".key").length;
var gradient = document.getElementById("top");
for(var i=0; i<len; i++){
	var rand = i*(1/(len-1));
	var color = randomGradient(rand,gradient);
	var prop = "--p"+(i+1).toString();
	document.documentElement.style.setProperty(prop,"rgb("+color+")");
}

function fadein(el) {
	el.style.opacity = 0;
	el.style.display = "";
	var last = +new Date();
	var tick = function() {
		el.style.opacity = +el.style.opacity + (new Date() - last) / 400;
		last = +new Date();
		if (+el.style.opacity < 1) {
			(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
		}
	};
	tick();
}

function fadeout(el) {
	el.style.opacity = 1;
	var last = +new Date();
	var tick = function() {
		el.style.opacity = +el.style.opacity - (new Date() - last) / 400;
		last = +new Date();
		if (+el.style.opacity > 0) {
			(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
		}
		else {
			el.style.display = "none";
		}
  	};
  	tick();
}

function makeTooltip(){
	tippy('[title]',{
		followCursor: true,
		arrow: false,
		touch: false,
		content(reference) {
			const title = reference.getAttribute('title');
			reference.removeAttribute('title');
			return title;
		},
		maxWidth: 300
	});
}