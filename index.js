var solutions_indx;
let output1="";
const questioncards = document.getElementById("count");
$.getJSON('https://spreadsheets.google.com/feeds/cells/1nimQ1WlKMMbDJorNsxPp3gpSP0-lc9iJ2O5qKXaRW1o/1/public/full?alt=json', function(data) {
console.log(data);
//   console.log(data.feed.entry);
  var reqdata=data.feed.entry;
  solutions_indx=reqdata;
  var k=reqdata.length;
  var countofques=k/7;
  countofques=countofques-1;
//   document.getElementById("ques_count").innerHTML=countofques;
  var questions=[];
  for(var i=7;i<k;i+=7){

	var time=reqdata[i+0].gs$cell.$t;
	
	var name=reqdata[i+1].gs$cell.$t
	
	var questionname=reqdata[i+2].gs$cell.$t
	
	var description=reqdata[i+3].gs$cell.$t
	
	var difficulty=reqdata[i+4].gs$cell.$t
	
	var sollang=reqdata[i+5].gs$cell.$t
	
	var solution=reqdata[i+6].gs$cell.$t
	
	var show=document.getElementById("display");
    
    solutions_indx.push(solution);
	// console.log(time);
	// console.log(name);
	// console.log(questionname);
	// console.log(description);
	// console.log(difficulty);
	// console.log(sollang);
	// console.log(solution);
    var giving_id=i/7;
    output1 += `       
    <div class="card" style="width: 80%; height:20%; margin-top:2%; margin-left:10%;" id="${giving_id}"onClick="viewsolution(this.id)">
  <div class="card-body" style="height:100%; width:100%; overflow:hidden;">
    <h4 class="card-title">${questionname}</h4>
    <h6 class="card-subtitle mb-2 text-muted">${difficulty}</h6>
     <p class="card-text" style="white-space: pre-line;">${description}</p>
     
  </div>
</div>
<div class="card text-white bg-success mb-3" style="width: 80%; height:20%; margin-top:2%; margin-left:10%; visibility: block;" id="solution_${giving_id}">
  <div class="card-header"><h3>Solution</h3></div>
  <div class="card-body">
    <h5 class="card-title">Language:- ${sollang} </h5>
    <h5 class="card-title">Solution By:- ${name} </h5>
    <p class="card-text" style="white-space: pre-line;">${solution}</p>
    <h5 class="card-title">Time:- ${time} </h5>
    
  </div>
</div>
      
        `;
        var creatid='#solution_'+giving_id;
        $(""+creatid).slideToggle()
    questions.push({"Time":time,"Name":name,"Title":questionname,"Question":description,"Level":difficulty,"Language":sollang,"Solution":solution});
	solutions_indx.push(solution);

  }
 
  document.getElementById("count").innerHTML=output1;



});
// alert(solutions_indx.length);
// console.log(solutions_indx)
function viewsolution(id){
    console.log(id);
    var creatid='#solution_'+id;
    console.log(creatid);
      
   
    $(""+creatid).slideToggle()
  
}
// function toogleall(){
//     var k=document.getElementById("ques_count").innerText;
//     console.log(k);
//         for(var i=1;i<=k;i++){
//         var creatid='#solution_'+i;
//         $(""+creatid).slideToggle()
//     }
// }
// document.(toogleall);