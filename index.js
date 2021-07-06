var solutions_indx;
let output1="";
const questioncards = document.getElementById("count");
$.getJSON('https://spreadsheets.google.com/feeds/cells/1nimQ1WlKMMbDJorNsxPp3gpSP0-lc9iJ2O5qKXaRW1o/1/public/full?alt=json', function(data) {

//   console.log(data.feed.entry);
  var reqdata=data.feed.entry;
  solutions_indx=reqdata;
  var k=reqdata.length;
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
    output1 += `       
    <div class="card" style="width: 80%; height:20%; margin-top:2%; margin-left:10%;">
  <div class="card-body" style="height:100%; width:100%; overflow:hidden;">
    <h4 class="card-title">${questionname}</h4>
    <h6 class="card-subtitle mb-2 text-muted">${difficulty}</h6>
     <p class="card-text" style="white-space: pre-line;">${description}</p>
     <button type="button" class="btn btn-primary">View Question</button>
     <button type="button" class="btn btn-primary">View Solution</button>
  </div>
</div>
      
        `;
        
    questions.push({"Time":time,"Name":name,"Title":questionname,"Question":description,"Level":difficulty,"Language":sollang,"Solution":solution});
	solutions_indx.push(solution);

  }
 
  document.getElementById("count").innerHTML=output1;
  const showCards = () => {
    let output = "";
    questions.forEach(
      ({ Time, Name, Title, Question, Level,Language,Solution }) => {
        (output += `       
        <div class="outer">
            <br>
            <div class="above_title">
            <span id="name">${Name}</span>
                <span id="level">${Level}</span>
            </div>
                
                <div class="inner">
                    ${Title}
                </div>
                <div class="below_title">
                <span id="view_question">View Question</span>
                <span id="view_solution">View Solution</span>
                </div>
           </div>
      
        `)
        alert(questions.length);
        alert(Name);
      }
    );
    document.getElementById("count").innerHTML=output;
    
  };


});
// alert(solutions_indx.length);
console.log(solutions_indx)