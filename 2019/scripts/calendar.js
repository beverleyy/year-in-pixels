var jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec;

/* ------ tell the page what color the boxes should be ------ */

jan = {
    1: "stress",
    2: "sad",
    3: "average",
    4: "average",
    5: "shag",
    6: "average",
    7: "average",
    8: "average",
    9: "happy",
    10: "average",
    11: "shag",
    12: "average",
    13: "average",
    14: "awesome",
    15: "stress",
    16: "happy",
    17: "shag",
    18: "awesome",
    19: "happy",
    20: "shag",
    21: "happy",
    22: "happy",
    23: "stress",
    24: "average",
    25: "shag",
    26: "angry",
    27: "stress",
    28: "happy",
    29: "awesome",
    30: "happy",
    31: "shag"
};
feb = {
    1: "angry",
    2: "shag",
    3: "shag",
    4: "shag",
    5: "happy",
    6: "average",
    7: "shag",
    8: "happy",
    9: "sick",
    10: "sick",
    11: "happy",
    12: "happy",
    13: "awesome",
    14: "sad",
    15: "shag",
    16: "shag",
    17: "happy",
    18: "happy",
    19: "shag",
    20: "happy",
    21: "shag",
    22: "average",
    23: "average",
    24: "average",
    25: "happy",
    26: "shag",
    27: "average",
    28: "shag",
    29: "" // leave this blank if it's not a leap year!
};
mar = {
    1: "happy",
    2: "awesome",
    3: "stress",
    4: "awesome",
    5: "average",
    6: "average",
    7: "happy",
    8: "average",
    9: "shag",
    10: "shag",
    11: "happy",
    12: "stress",
    13: "shag",
    14: "shag",
    15: "shag",
    16: "happy",
    17: "average",
    18: "average",
    19: "happy",
    20: "average",
    21: "average",
    22: "shag",
    23: "shag",
    24: "angry",
    25: "happy",
    26: "stress",
    27: "stress",
    28: "awesome",
    29: "average",
    30: "angry",
    31: "shag"
};
apr = {
    1: "average",
    2: "awesome",
    3: "average",
    4: "shag",
    5: "shag",
    6: "average",
    7: "happy",
    8: "happy",
    9: "stress",
    10: "happy",
    11: "average",
    12: "average",
    13: "stress",
    14: "shag",
    15: "stress",
    16: "stress",
    17: "happy",
    18: "happy",
    19: "average",
    20: "average",
    21: "average",
    22: "average",
    23: "stress",
    24: "stress",
    25: "shag",
    26: "stress",
    27: "happy",
    28: "shag",
    29: "shag",
    30: "shag"
};
may = {
    1: "shag",
    2: "stress",
    3: "shag",
    4: "shag",
    5: "shag",
    6: "stress",
    7: "stress",
    8: "stress",
    9: "stress",
    10: "shag",
    11: "awesome",
    12: "average",
    13: "shag",
    14: "average",
    15: "average",
    16: "shag",
    17: "shag",
    18: "stress",
    19: "stress",
    20: "average",
    21: "happy",
    22: "happy",
    23: "happy",
    24: "shag",
    25: "stress",
    26: "average",
    27: "happy",
    28: "awesome",
    29: "average",
    30: "awesome",
    31: "average"
};
jun = {
    1: "happy",
    2: "average",
    3: "sad",
    4: "average",
    5: "average",
    6: "awesome",
    7: "average",
    8: "happy",
    9: "happy",
    10: "happy",
    11: "happy",
    12: "average",
    13: "awesome",
    14: "shag",
    15: "shag",
    16: "shag",
    17: "average",
    18: "happy",
    19: "average",
    20: "average",
    21: "average",
    22: "average",
    23: "stress",
    24: "stress",
    25: "shag",
    26: "average",
    27: "awesome",
    28: "happy",
    29: "happy",
    30: "happy"
};
jul = {
    1: "sick",
    2: "happy",
    3: "shag",
    4: "happy",
    5: "average",
    6: "average",
    7: "average",
    8: "awesome",
    9: "stress",
    10: "happy",
    11: "happy",
    12: "happy",
    13: "average",
    14: "sick",
    15: "happy",
    16: "average",
    17: "shag",
    18: "stress",
    19: "sad",
    20: "average",
    21: "shag",
    22: "shag",
    23: "shag",
    24: "stress",
    25: "average",
    26: "awesome",
    27: "stress",
    28: "average",
    29: "average",
    30: "average",
    31: "shag"
};
aug = {
    1: "happy",
    2: "happy",
    3: "shag",
    4: "happy",
    5: "shag",
    6: "shag",
    7: "shag",
    8: "happy",
    9: "average",
    10: "average",
    11: "average",
    12: "average",
    13: "shag",
    14: "stress",
    15: "happy",
    16: "happy",
    17: "average",
    18: "average",
    19: "happy",
    20: "happy",
    21: "happy",
    22: "awesome",
    23: "awesome",
    24: "happy",
    25: "average",
    26: "stress",
    27: "shag",
    28: "happy",
    29: "happy",
    30: "happy",
    31: "stress"
};
sep = {
    1: "stress",
    2: "stress",
    3: "shag",
    4: "happy",
    5: "happy",
    6: "awesome",
    7: "happy",
    8: "shag",
    9: "stress",
    10: "shag",
    11: "shag",
    12: "shag",
    13: "happy",
    14: "happy",
    15: "average",
    16: "average",
    17: "sick",
    18: "happy",
    19: "happy",
    20: "happy",
    21: "sick",
    22: "sick",
    23: "sick",
    24: "happy",
    25: "awesome",
    26: "happy",
    27: "happy",
    28: "awesome",
    29: "awesome",
    30: "average"
};
oct = {
    1: "average",
    2: "happy",
    3: "stress",
    4: "average",
    5: "average",
    6: "average",
    7: "stress",
    8: "angry",
    9: "happy",
    10: "happy",
    11: "shag",
    12: "average",
    13: "average",
    14: "shag",
    15: "happy",
    16: "awesome",
    17: "happy",
    18: "happy",
    19: "average",
    20: "stress",
    21: "shag",
    22: "angry",
    23: "shag",
    24: "shag",
    25: "happy",
    26: "average",
    27: "happy",
    28: "stress",
    29: "angry",
    30: "stress",
    31: "average"
};
nov = {
    1: "happy",
    2: "happy",
    3: "average",
    4: "happy",
    5: "stress",
    6: "stress",
    7: "happy",
    8: "stress",
    9: "stress",
    10: "stress",
    11: "average",
    12: "happy",
    13: "happy",
    14: "awesome",
    15: "happy",
    16: "awesome",
    17: "happy",
    18: "happy",
    19: "happy",
    20: "happy",
    21: "stress",
    22: "stress",
    23: "stress",
    24: "stress",
    25: "shag",
    26: "stress",
    27: "happy",
    28: "shag",
    29: "happy",
    30: "happy"
};
dec = {
    1: "average",
    2: "happy",
    3: "sad",
    4: "happy",
    5: "shag",
    6: "happy",
    7: "happy",
    8: "average",
    9: "happy",
    10: "average",
    11: "happy",
    12: "average",
    13: "shag",
    14: "happy",
    15: "average",
    16: "shag",
    17: "happy",
    18: "happy",
    19: "happy",
    20: "average",
    21: "average",
    22: "average",
    23: "happy",
    24: "average",
    25: "average",
    26: "average",
    27: "happy",
    28: "average",
    29: "average",
    30: "happy",
    31: "average"
};

/* ------ end color coding section ------ */

var months = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];
var tooltips = [];
var leapYear = false; // change to true if it's a leap year!

/* ------ tooltips! ------ */

/*
to add more tooltips:

tooltips.push({
   month: 1 // change this to the appropriate month
   day: 1 // change this to the appropriate day
   content:"your content goes in between the inverted commas here"
});

*/

tooltips.push({
    month:2,
    day:13,
    content:"a bunch of profs brought me and my friend for happy hour aka drinks"
});
tooltips.push({
    month:2,
    day:14,
    content:"the end of lab experiments for my research project"
});
tooltips.push({
    month:3,
    day:2,
    content:"had university open house duty and it was fun!"
});
tooltips.push({
    month:3,
    day:4,
    content:"scholars programme annual dinner & dance! fun, games, laughter and the birth of #dumbanddumber"
});
tooltips.push({
    month:3,
    day:28,
    content:"the juniors had their glider competition and i went to watch/help out"
});
tooltips.push({
    month:5,
    day:11,
    content:"my first time doing outreach for the school, good experience being on the panel and nice networking"
});
tooltips.push({
    month:9,
    day:6,
    content:"i think i did pretty good on my first-ever conference presentation, had a nice walk around torino centro and a good dinner too"
});
tooltips.push({
    month:9,
    day:28,
    content:"won my first conference award + had an awesome time walking around lotte mart gwangbok and gukje market in busan!"
});
tooltips.push({
    month:11,
    day:14,
    content:"last korean lesson, had lots of fun but :("
});
tooltips.push({
    month:11,
    day:17,
    content:"MY PROF SENT ME 2 PARAGRAPHS OF PRAISE IM SHOOKEDTH"
});
tooltips.push({
    month:12,
    day:3,
    content:"totally bombed my aircraft propulsion final and had to be comforted by my prof BUT IT'S OKAY CAUSE I PASSED"
});
