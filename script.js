document.addEventListener('scroll', e => {
  scrollstartY = document.documentElement.scrollTop
  console.log(scrollstartY)
  checkEnd(scrollstartY);
})

leaf = document.getElementById(leaf);
q1 = document.getElementById(q1);
lander = document.getElementById(lander);

function checkEnd(scrollstartY) {
    if (scrollstartY>28){
        endFunction();
        console.log("End is here");
    }
}

function endFunction(){
    console.log("end was reached");
    leaf.style.animation = "scrollend 2s 1";
    leaf.style.width = "100%";
    leaf.style.borderRadius = "1000px";
    q1.style.display = "block";
}