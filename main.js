const countEl = document.getElementById("count-El");
const incrementEl = document.getElementById("increment");
const saveBtnEl = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");
let count = 0;

incrementEl.addEventListener("click", ()=>{
    count += 1;
    countEl.innerText = count;
})

saveBtnEl.addEventListener("click",()=>{
    const countStr = count + " - ";
    saveEl.innerText = count;
    console.log(count)
})
