function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var output=document.getElementById("output");
    var quiz=document.getElementById("quiz");
    if(q1=="lilongwe") {c++}
    if(q2=="Africa") {c++}
    if(q3=="Tarmac roads") {c++}
    if(q4=="Everest") {c++}
    if(q5=="R.Nile") {c++}
    quiz.style.display="none";
    output.textContent=${c};

}
