function check(){
    var score=0;

    var Html=document.quiz.Html.value;
    var Metro=document.quiz.Metro.value;
    var Mobile=document.quiz.Mobile.value;
    var App=document.quiz.App.value;
    var tf=document.quiz.tf.value;
    var Process=document.quiz.Process.value;
    var Cycle=document.quiz.Cycle.value;

    var a31=document.quiz.q31.value;
    var a32=document.quiz.q32.value;
    var a33=document.quiz.q33.value;
    var a34=document.quiz.q34.value;
    var a35=document.quiz.q35.value;
    var a36=document.quiz.q36.value;

    var a41=document.quiz.q41.value;
    var a42=document.quiz.q42.value;
    var a43=document.quiz.q43.value;
    var a44=document.quiz.q44.value;
    var a45=document.quiz.q45.value;
    var a46=document.quiz.q46.value;

    var a101=document.quiz.q101.value;
    var a102=document.quiz.q102.value;
    var a103=document.quiz.q103.value;
    var a104=document.quiz.q104.value;

    
    if(Html=="B") (score++);
    if(Metro=="H") (score++);
    if(Mobile=="I") (score++);
    if(App=="N") (score++);
    if(tf=="True") (score++);
    if(Process=="Q") (score++);
    if(Cycle=="V") (score++);

    if(a32=="B" && a34=="D" && a36=="F") (score++);
    if(a41=="A" && a42=="B" && a43=="C") (score++);
    if(a102=="B" && a104=="D") (score++);

    var percent=(score/10)*100;

    document.getElementById('result').innerHTML="Your Score is : " + parseInt(percent)+"%";
}