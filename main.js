
let lists = document.querySelector('.list')
let display  = document.querySelector('.input')


function addTask(){
    let li = document.createElement('li')
    lists.appendChild(li)
    li.className = 'each'
    let span = document.createElement('span')
    li.appendChild(span)
    span.className = 'text'
    span.textContent = display.value;
    display.value = ''
    let ex = document.createElement('i')
    ex.className = 'fa-solid fa-x'
    li.appendChild(ex)

}

lists.addEventListener('click', (event)=>{
    let target = event.target;
    if(target.tagName == 'I'){
        const dadElement = target.parentElement;
        dadElement.remove()
    }


})

document.addEventListener('DOMContentLoaded', function() {
    const  button = document.getElementById('myButton');
  
    document.addEventListener('keypress', function(event){
      if(event.keyCode === 13){
        button.click();
      }
    });
  });


