const todoForm = document.querySelector(".form-todo")
const todoinput = document.querySelector(".form-todo input[type='text']")
console.log(todoinput)
const ul =document.querySelector(".todos")

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newli=document.createElement("div")
    const insideNewli=`<span class="text">${todoinput.value}</span>
    <div>
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>

    </div>`
    newli.innerHTML=insideNewli
    // console.log(todoinput.value);
    ul.append(newli)
    todoinput.value="";
})

ul.addEventListener("click",(e)=>{
    if (e.target.classList.contains("remove")){
        const removeitem= e.target.parentNode.parentNode
        removeitem.remove()
    }
    if (e.target.classList.contains("done")){
        const lispan =e.target.parentNode.previousElementSibling;
        // console.log(lispan)
        lispan.style.textDecoration ="line-through"
    }
})
