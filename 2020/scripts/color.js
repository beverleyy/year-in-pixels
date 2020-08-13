/* Gradient stop calculation script */
// Honestly this is a lil overkill but ehh... too lazy to stop the gradients myself

function randomGradient(randomNumber,colourDivSelector){	
	var colourSet = [], twoByTwo = []; 
	var stopArray = [], withStop = [];
	var outputArray = [];
	
	var colourDiv = checkVariableType(colourDivSelector); 
	var style = window.getComputedStyle(colourDiv).getPropertyValue("background-image");
				
	if(style.indexOf('gradient')<0){
		console.log("this element does not have a gradient background!");
		return 1;
	}
			
	var gradient = (style.slice(style.indexOf('gradient'),-1)).split("gradient(")[1]; 
	var colourArray = gradient.replace(/\s+/g, '').split(","); 
	if(gradient.includes("to ") || gradient.includes("deg") || gradient.includes("rad")) 
		colourArray.shift(); 
	
	var indexArrayRGB = []; 
	var indexArrayWord = []; 
	for(var i=0; i<colourArray.length; i++){ 
		var str = colourArray[i].toLowerCase();
		if(str.indexOf("rgb") > -1)
			indexArrayRGB.push(i); 
		else if(str.match(/[a-z]/i)) 
			indexArrayWord.push(i);
	}

	var newArray = []; 
	for(var j=0; j<colourArray.length; j++){ 
		if(indexArrayWord.includes(j)) 
			newArray.push(colourArray[j]); 
		else if(indexArrayRGB.includes(j)){ 
			var tempArray = []; 
			for(var x=j; x<j+3; x++) 
				tempArray.push(colourArray[x]);
			newArray.push(tempArray.join()); 
		} 
	} 
	
	for(var k=0; k<newArray.length; k++){
		if(newArray[k].includes("%")){ 
			withStop.push(k); 
			if(newArray[k].includes(")")){ 
				var strSpl = newArray[k].split(")"); 
				stopArray.push(strSpl[1].slice(0,-1)); 
				newArray[k] = strSpl[0]+")"; 
			} 
			else if(newArray[k].match(/[a-z]/i)){ 
				stopArray.push(newArray[k].match(/\d/g).join("")); 
				newArray[k] = newArray[k].split(newArray[k].match(/\d/))[0]; 
			} 
		} 
		else 
			stopArray.push(0);
		if(newArray[k].toLowerCase().includes("rgb") && newArray[k].substr(-1) !== ")")
			newArray[k] = newArray[k]+")";
		newArray[k] = newArray[k].replace("rgba","rgb");
	} 
	
	for (var s=0; s<stopArray.length; s++) 
		stopArray[s] = parseFloat(stopArray[s]);
	
	if(stopArray[stopArray.length-1] == 0){
		stopArray[stopArray.length-1] = 100; 
		withStop.push(stopArray.length-1);
	}
	
	for(var i=0; i<withStop.length; i++){
		var lower = withStop[i-1];
		if(i==0 && stopArray[0]==0) 
			lower = 0;
		var upper = withStop[i];
		var lowerBound = stopArray[lower];
		var upperBound = stopArray[upper];
		for(var j=0; j<=(upper-lower); j++)
			stopArray[lower+j] = lowerBound + j * ((upperBound-lowerBound)/(upper-lower));
	} 
	
	var dummyDiv = document.createElement("div"); 
	document.body.appendChild(dummyDiv); 
	for(var y=0; y<newArray.length; y++){ 
		twoByTwo[y] = [];
		dummyDiv.setAttribute("style","background-color:"+newArray[y]+";");
		newArray[y] = window.getComputedStyle(dummyDiv).getPropertyValue("background-color");
		splitColour(newArray[y],twoByTwo[y]);
	} 
	document.body.removeChild(dummyDiv);
	
	if(twoByTwo.length != stopArray.length){
		console.log("error!");
		return false;
	}
	
	for(var z=0; z<twoByTwo.length && z<stopArray.length; z++)
		colourSet[z] = [stopArray[z],twoByTwo[z]]
	
	var outputArray = calcGradient(colourSet,randomNumber);
	return outputArray.join();
}

function checkVariableType(selector){
	var returnValue; 
	switch(typeof selector){ 
		case 'string': 
			if(selector.indexOf("#") > -1)
				returnValue = document.getElementById(selector.split("#").pop()); 
			else if (selector.indexOf(".") > -1)
				returnValue = document.getElementsByClassName(selector.split(".").pop())[0]; 
			else 
				returnValue = document.getElementsByTagName(selector)[0];
			break; 
		case 'object': 
			function checkObjectType(object){
				if(object.length !== undefined)
					return object[0]; 
				else 
					return object; 
			} 
			if(window.jQuery){  
				if(selector instanceof jQuery)
					returnValue = selector[0];
				else 
					returnValue = checkObjectType(selector);
			} 
			else 
				returnValue = checkObjectType(selector);
			break;
		default: 
			console.log("Invalid selector!");
			return 3; 
	}
	return returnValue;
}

function splitColour(rgb, colourStorage) {
	var c = (rgb.slice(rgb.indexOf('(')+1, rgb.indexOf(')'))).split(',');
	for(var k=0; k<c.length; k++){
		if(k<3) 
			c[k] = parseInt(c[k],10);
		else
			c[k] = parseFloat(c[k]);
	}
	for(var i=0; i<c.length; i++)
		colourStorage[i] = c[i]; 
	if(colourStorage.length > 3) 
		colourStorage = colourStorage.slice(0,3);
} 

function calcGradient(gradient,random) {
    var colourRange = []; 
    var stop = random*100; 
	if(gradient[0][0] != 0) 
		gradient[0][0] = 0;
    for(var i=0; i<gradient.length-1; i++){
    	if(gradient[i][0] <= stop && stop <= gradient[i+1][0]){
           	colourRange.push(gradient[i],gradient[i+1]);
            break;
        }
    }
	if (!Array.isArray(colourRange) || !colourRange.length) {
	  	colourRange.push(gradient[i-1],gradient[i]);
	}
    var firstcolour = colourRange[0][1];
    var secondcolour = colourRange[1][1];
    var firstcolour_x = colourRange[0][0]; 
    var secondcolour_x = colourRange[1][0]-firstcolour_x; 
    var ratio = (stop-firstcolour_x)/secondcolour_x; 
    var result = mixGradient(secondcolour,firstcolour,ratio); 
	return result;
}

/* thanks to the folks over at less for the colour mixing function */
/* http://lesscss.org/functions/#color-operations-mix */
function mixGradient(color1, color2, weight) {
    var p = weight;
    var w = p * 2 - 1;
    var w1 = (w/1+1) / 2;
    var w2 = 1 - w1;
    var rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
        Math.round(color1[1] * w1 + color2[1] * w2),
        Math.round(color1[2] * w1 + color2[2] * w2)];
    return rgb;
}