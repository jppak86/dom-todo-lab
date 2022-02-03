const textInput = document.getElementById('submit-button')


textInput.addEventListener('click', function(ev){
  const nLi = document.createElement('li')
  const nInp = document.getElementById('todo')
  nLi.textContent = nInp.value
  if(nInp.value !==""){
    document.getElementById('todo-list').appendChild(nLi)
    nInp.value = ""
  }
})