// Create player objects

function player (firstname, lastname, team, date, pa, ab, runs, hits, doubles, triples, homers, rbi, walks, ibb, strikeouts, hitbypitch, sacbunt, sacfly, roe, gdp, steals, cs, average, onbase, slugging, ops){
this.firstname=firstname;
this.lastname=lastname;
this.team=team;
this.date=date;
this.pa=pa;
this.ab=ab;
this.runs=runs;
this.hits=hits;
this.doubles=doubles;
this.triples=triples;
this.homers=homers;
this.rbi=rbi;
this.walks=walks;
this.ibb=ibb;
this.strikeouts=strikeouts;
this.hitbypitch=hitbypitch;
this.sacbunt=sacbunt;
this.sacfly=sacfly;
this.roe=roe;
this.gdp=gdp;
this.steals=steals;
this.cs=cs;
this.average=average;
this.onbase=onbase;
this.slugging=slugging;
this.ops=ops;
}

rollinsJimmy = new player("Jimmy","Rollins", "Phillies", 80313, 6, 6, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0.257, 0.314, 0.352, 0.666);

console.log(rollinsJimmy.slugging);
console.log(rollinsJimmy.steals);


utleyChase = new player("Chase","Utley", "Phillies", 80313, 6, 6, 1, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 	0, 0, 2, 0, 0.257, 0.314, 0.352, 0.666);


// Create input variables

//IDEA USE BRUTE STRENGTH. ASSIGN EACH PLAYER AN ID. GET ID. USE SWITCH STATEMENT TO CALL VARIABLE. REPEAT. So if id(OR TEXT)Jimmy Rollins=Jimmy Rollins, then ex

function choosePlayer(){
var myPlayer=document.getElementById("myPlayer");
if (mylist.options[mylist.selectedIndex].text==="Jimmy Rollins"){
	console.log(rollinsJimmy.firstname);}
else if (mylist.options[mylist.selectedIndex].text==="Chase Utley"){
	console.log(utleyChase.firstname);
}
else (console.log('IDK LOL'))



// Create if/else statements