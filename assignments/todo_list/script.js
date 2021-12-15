// let answer = document.querySelector('.show');
let competlebtn =document.querySelector(".completed")
let pendingbtn =document.querySelector(".pending")
let allList =document.querySelector(".all")
let answer=document.querySelector(".data")


const completed = [];
const pending = [];

async function funcName(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    printAll()
    function printAll(){
    for(let i=0; i<data.length;i++){
        if(data[i]['completed']===true){
            completed.push(data[i]);
        }else{
            pending.push(data[i]);
        }
        let div = document.createElement('div');
        div.setAttribute('class','row');

        let h1 = document.createElement('h4');
        h1.setAttribute("class",'column')
        let h2 = document.createElement('h4');
        h2.setAttribute("class",'column')
        let h3 = document.createElement('h4');
        h3.setAttribute("id","title")
        let h4 = document.createElement('h4');
        h4.setAttribute("class",'column')


        h2.innerText = data[i].id;
        h3.innerText = data[i].title;
        h1.innerText = data[i].userId;
        h4.innerText = data[i].completed ? "completed":"pending";

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);

        answer.appendChild(div)
    }}
    


    competlebtn.addEventListener('click', ()=>{
            answer.innerHTML = "";

            for(let i=0; i<completed.length; i++){

                let div = document.createElement('div');
                div.setAttribute('class','row');

                let h1 = document.createElement('h4');
                h1.setAttribute("class",'column')
                let h2 = document.createElement('h4');
                h2.setAttribute("class",'column')
                let h3 = document.createElement('h4');
                h3.setAttribute("id","title")
                let h4 = document.createElement('h4');
                h4.setAttribute("class",'column')


                h1.innerText = completed[i].userId;
                h2.innerText = completed[i].id;
                h3.innerText = completed[i].title;
                h4.innerText = "completed"

                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(h4);

                answer.appendChild(div)
            }})
       
    pendingbtn.addEventListener('click', ()=>{
        answer.innerHTML = "";
            for(let i=0; i<pending.length; i++){
                let div = document.createElement('div');
                div.setAttribute('class','row');

                let h1 = document.createElement('h4');
                h1.setAttribute("class",'column')
                let h2 = document.createElement('h4');
                h2.setAttribute("class",'column')
                let h3 = document.createElement('h4');
                h3.setAttribute("id","title")
                let h4 = document.createElement('h4');
                h4.setAttribute("class",'column')


                h1.innerText = pending[i].userId;
                h2.innerText = pending[i].id;
                h3.innerText = pending[i].title;
                h4.innerText = "pending"

                div.appendChild(h1);
                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(h4);

                answer.appendChild(div)
            }})
    allList.addEventListener("click",()=>{
        answer.innerHTML = "";
        printAll()
    })
        
      
            
        
    
}

var url = 'https://jsonplaceholder.typicode.com/todos';
var total = funcName(url); 