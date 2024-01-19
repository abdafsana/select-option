const div=document.querySelector(".socialMedia");
const ul=document.querySelector("ul");
const li=document.querySelectorAll("li");
const selectMedia=document.querySelector(".selectMedia");


function SocialClick(e){
    ul.classList.toggle("active-flex")
    div.classList.toggle("active")
}

li.forEach(elem => {
    elem.addEventListener("click",function () {
       selectMedia.innerText=elem.innerText
    })
});
