const colorBlue = document.querySelector(".addBlue");
const colorRed = document.querySelector(".addRed");
const colorgreen = document.querySelector(".addGreen");
const colorRemove = document.querySelector(".remove");


colorBlue.addEventListener("click", () =>{
    const block = document.querySelector(".block");
    block.classList.add("addBlue");
})

colorRed.addEventListener("click", () =>{
    const block = document.querySelector(".block");

    if (block.classList === )
    block.classList.add("addRed");
})

colorgreen.addEventListener("click", () =>{
    const block = document.querySelector(".block");
    block.classList.add("addGreen");
})
colorRemove .addEventListener("click", () =>{
    const block = document.querySelector(".block");
    block.classList.remove();
})