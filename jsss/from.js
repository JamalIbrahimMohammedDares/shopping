let butop=document.getElementById("loog");
butop.innerText="To contact us";
let box=document.getElementById("ho");
box.style.display="none";
/*butop.addEventListener("click",()=>{
    home.classList. add("show")
})
butop.addEventListener("click",()=>{
    home.classList. remove("show")
})*/
function tool(){
    box.style.display=box.style.display==="none" ? "block":"none";

}
butop.addEventListener("click",tool);

