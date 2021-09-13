const btnEl = document.querySelectorAll(".follow");
const modal = document.querySelector(".modal-container");
const iconEl = document.querySelector(".icon");
//Setting up the icon functionality when it is clicked//
iconEl.addEventListener("click",()=>{
    if(!modal.classList.contains("show")){
        modal.classList.add("show")
    } else {
        modal.classList.remove("show")
    }
})
btnEl.forEach(btn => {
    btn.addEventListener("click",() => {
        if(btn.innerHTML === "Follow") {
            btn.innerHTML = "Unfollow";
            btn.classList.toggle("dark")
        }else {
            btn.innerHTML = "Follow";
            btn.classList.toggle("light");
        }
    })
})