function fillGrid(months,tooltips,leapYear){
    for(let i=0; i<=12; i++){
        var mth = document.createElement("div");
        var mthName;
        switch(i){
            case 1:
                mthName = "Jan";
                break;
            case 2:
                mthName = "Feb";
                break;
            case 3:
                mthName = "Mar";
                break;
            case 4:
                mthName = "Apr";
                break;
            case 5:
                mthName = "May";
                break;
            case 6:
                mthName = "Jun";
                break;
            case 7:
                mthName = "Jul";
                break;
            case 8:
                mthName = "Aug";
                break;
            case 9:
                mthName = "Sep";
                break;
            case 10:
                mthName = "Oct";
                break;
            case 11:
                mthName = "Nov";
                break;
            case 12:
                mthName = "Dec";
                break;
            default:
                mthName = "";
                break;
        } // end switch
        switch(i){
            case 0:
                mth.className = "number";
                for(let j=0; j<=31; j++){
                    var day = document.createElement("div");
                    if(j){
                        var num = document.createTextNode(j);
                        day.appendChild(num);
                    }
                    mth.appendChild(day);
                }
                break;
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                mth.className = "month";
                for(let j=0; j<=31; j++){
                    var day = document.createElement("div");
                    if(!j){
                        var label = document.createTextNode(mthName);
                        day.className = "label";
                        day.appendChild(label);
                    }
                    else 
                        day.className = months[i-1][j];
                    mth.appendChild(day);
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                mth.className = "month";
                for(let j=0; j<=30; j++){
                    var day = document.createElement("div");
                    if(!j){
                        var label = document.createTextNode(mthName);
                        day.className = "label";
                        day.appendChild(label);
                    }
                    else 
                        day.className = months[i-1][j];
                    mth.appendChild(day);
                }
                break;
            case 2:
                var leapCount;
                if(leapYear)
                    leapCount = 29;
                else
                    leapCount = 28;
                mth.className = "month";
                for(let j=0; j<=leapCount; j++){
                    var day = document.createElement("div");
                    if(!j){
                        var label = document.createTextNode(mthName);
                        day.className = "label";
                        day.appendChild(label);
                    }
                    else 
                        day.className = months[i-1][j];
                    mth.appendChild(day);
                }
                break;
        } // end switch
        document.getElementById("grid").appendChild(mth);
    } // end for
    for(let k=0; k<tooltips.length; k++){
        let m = tooltips[k].month-1;
        let d = tooltips[k].day;
        let c = tooltips[k].content;
        document.getElementsByClassName("month")[m].getElementsByTagName("div")[d].title = c;
    }
}
$(document).ready(function(){
    $(document).tooltip({
        track:true
    });
});
