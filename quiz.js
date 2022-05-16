function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var results=document.getElementById('results');
    var quiz=document.getElementById('quiz');
    if(q1=="lilongwe") {c++}
    if(q2=="Africa") {c++} 
    if(q3=="Tarmac roads") {c++}
    if(q4=="Everest") {c++}
    if(q5=="R.Nile") {c++}
  if (c<2){
      results.innerText = c+' :'+'Poor results,retake the quiz'
  }
  else if(c>3){
    results.innerText = c+' :'+'Excellently passed'
}else
{results.innerText = c+' :'+'fairly passed'

}

    //document.write(c);
}
