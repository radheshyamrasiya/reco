document.addEventListener('scroll', e => {
  scrollstartY = document.documentElement.scrollTop
  console.log(scrollstartY)
  checkEnd(scrollstartY);
})
quesnumber = 1;
leaf = document.getElementById(leaf);
q1 = document.getElementById(q1);
lander = document.getElementById(lander);
qtext = document.getElementById(qtext);
qnum = document.getElementById(qnum);
yngroup = document.getElementById(yngroup);
function checkEnd(scrollstartY) {
    if (scrollstartY>28){
        scrolldown();
        console.log("End is here");
    }
    if (scrollstartY>200){
        doit = 1;
        console.log(doit);
    }
    if (scrollstartY<200 && doit==1){
        scrollup();
        console.log("End is here");
    }
}

function scrolldown(){
    console.log("end was reached");
    leaf.style.animation = "scrolldown 1.3s 1";
    leaf.style.width = "100%";
    leaf.style.borderRadius = "100px 100px 1000px 1000px";
    q1.style.display = "block";
}

function scrollup(){
    console.log("end was reached2");
    leaf.style.animation = "scrollup 1.5s 1";
    leaf.style.width = "90%";
    leaf.style.borderRadius = "1000px 1000px 100px 100px";
    q1.style.display = "block";
}

function ynfadeout(){
    yngroup.style.animation = "ynfadeout 0.3s 1";
    yngroup.addEventListener("animationend" ,function restart(){yngroup.style.animation = "";}) 
    
    console.log("ynfadeout");
    yngroup.style.opacity = 0;
}


mroad=document.getElementById(mroad);
function y(){
    qfadeout();
    ynfadeout();
    qnum.innerHTML = "result."
    if (quesnumber==1){
        mroad.src = "black.jpg";
        console.log("Black Dustbin")
        qtext.innerHTML = "throw the trash in <br> black dustbin";
    }
    if (quesnumber==2){
        mroad.src = "yellow.jpg";
        console.log("Yellow Dustbin")
        qtext.innerHTML = "throw the trash in <br> yellow dustbin";}

    if (quesnumber==3){
        console.log("Blue Dustbin")
        mroad.src = "blue.jpg";
        qtext.innerHTML = "throw the trash in <br> blue dustbin";}
    qfadein();
    rewardpopup();
    setTimeout("rewardout()", 1500);

   
}
function rewardpopup(){
    let rewardbox = document.getElementById("rewardpopup");  
    rewardbox.style.display = "block";
}
function rewardout(){
    let rewardbox = document.getElementById("rewardpopup");  
    rewardbox.style.animation = "rewardanimout 1s 1";
    rewardbox.style.display = "none";
}

function qfadeout(){
    qnum.style.animation = "qnumfadeout 1s 1";
    qtext.style.animation = "qnumfadeout 1s 1";
   
}



function qfadein(){
    qnum.style.animation = "qnumfadein 1s 1";
    qtext.style.animation = "qnumfadein 1s 1";
    qnum.addEventListener("animationend" ,function restart(){qnum.style.animation = "";})    
    qtext.addEventListener("animationend" ,function restart(){qtext.style.animation = "";})   
    console.log("heo") 

}
function n(){
    quesnumber = quesnumber+1;
    if (quesnumber==2){
        qfadeout();
        qtext.innerHTML = "does your trash contain any kind battery?"
        qnum.innerHTML = "2."
        qfadein();}
      
    if (quesnumber==3){
        qfadeout();
        qtext.innerHTML = "does your trash contain any plastic?"
        qnum.innerHTML = "3."
        qfadein();}
    
  
}

