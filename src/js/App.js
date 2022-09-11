const a = document.querySelectorAll("a");

a.forEach((a)=>{
    a.addEventListener("click", (e)=>{
        e.preventDefault();
    })
})