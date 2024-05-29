let headingEle = document.getElementById("heading");
let btnElEle = document.getElementById("btnEl");

btnElEle.onclick = function(){
    headingEle.classList.remove("heading-old-styles");
    headingEle.classList.add("heading-new-styles");
}