var solutions_indx;
let output1="";
let output2="";
const questioncards = document.getElementById("count");
$.getJSON('https://spreadsheets.google.com/feeds/cells/1s18hwCFf1_wvPn60yYDiugI2if54ujAfSXJb8_WNVu0/1/public/full?alt=json', function(data) {
console.log(data);
 // console.log(data.feed.entry);
  var reqdata=data.feed.entry;
  solutions_indx=reqdata;
  var k=reqdata.length;
  var countofques=k/7;
  countofques=countofques-1;
//   document.getElementById("ques_count").innerHTML=countofques;
// var que_list=document.getElementById("question_list");
  var questions=[];
  for(var i=7;i<k;i+=7){

	var email=reqdata[i+0].gs$cell.$t;
	
	var name=reqdata[i+1].gs$cell.$t
	
	var questionname=reqdata[i+2].gs$cell.$t
	
	var description=reqdata[i+3].gs$cell.$t
	
	var difficulty=reqdata[i+4].gs$cell.$t
	
	var sollang=reqdata[i+5].gs$cell.$t
	
	var solution=reqdata[i+6].gs$cell.$t
	
	var show=document.getElementById("display");
    
    // solutions_indx.push(solution);
	// console.log(time);
	// console.log(name);
	// console.log(questionname);
	// console.log(description);
	// console.log(difficulty);
	// console.log(sollang);
	// console.log(solution);
    var giving_id=i/7;
    output1 += `       
    <div class="card" style="width: 80%; height:20%; margin-top:2%; margin-left:10%;" >
  <div class="card-body" style="height:100%; width:100%; overflow:hidden;">
    <h4 class="card-title">${questionname}</h4>
    <h6 class="card-subtitle mb-2 text-muted">${difficulty}</h6>
     <p class="card-text" style="white-space: pre-line; " id="${giving_id}"onClick="viewsolution(this.id)">${description}</p>
     <div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" onclick="editpost(${giving_id})" type="button">Edit</button>
  <button class="btn btn-primary" onclick="deletepost(${giving_id})" type="button">Delete</button>
</div>
  </div>
</div>
<div class="card text-white bg-success mb-3" style="width: 80%; height:20%; margin-top:2%; margin-left:10%; visibility: block;" id="solution_${giving_id}">
  <div class="card-header"><h3>Solution</h3></div>
  <div class="card-body">
    <h5 class="card-title">Language:- ${sollang} </h5>
    <h5 class="card-title">Solution By:- ${name} </h5>
    <p class="card-text" style="white-space: pre-line;">${solution}</p>
    
    
  </div>
</div>
      
        `;
        
    // questions.push({"Time":time,"Name":name,"Title":questionname,"Question":description,"Level":difficulty,"Language":sollang,"Solution":solution});
	// solutions_indx.push(solution);

  }
 
  document.getElementById("count").innerHTML=output1;
// que_list.innerHTML=output2;


});
// alert(solutions_indx.length);
console.log(solutions_indx)
function viewsolution(id){
    console.log(id);
    var creatid='#solution_'+id;
    console.log(creatid);
      
   
    $(""+creatid).slideToggle()
  
}
function toogleall(){
    var k=document.getElementById("ques_count").innerText;
    console.log(k);
        for(var i=1;i<=k;i++){
        var creatid='#solution_'+i;
        $(""+creatid).slideToggle()
    }
}
// document.(toogleall);
function editpost(id){
  console.log("want to edit"+id);
}
function deletepost(id){
console.log("want to delete post"+id);
}