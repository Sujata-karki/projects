const countEl = document.getElementById("count-El");
const incrementEl = document.getElementById("increment");
const saveEl = document.getElementById("save");
let count = 0;

incrementEl.addEventListener("click", ()=>{
    count = count + 1;
    countEl.innerText = count;
})

saveEl.addEventListener("click",()=>{
    
})

