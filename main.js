const countEl = document.getElementById("count-El");
const incrementEl = document.getElementById("increment");
let count = 0;

incrementEl.addEventListener("click", ()=>{
    count = count + 1;
    countEl.innerText = count;
})


