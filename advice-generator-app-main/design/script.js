document.querySelector(".new").addEventListener('click',()=>{
fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(advice => document.querySelector('#advice').innerHTML = '"'+ advice.slip.advice + '"')
.catch(error => document.querySelector('#advice').innerHTML = error);

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(id => document.querySelector('#advice-id').innerHTML = "advice #" + id.slip.id)
.catch(error => document.querySelector('#advice-id').innerHTML = error);
});

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(advice => document.querySelector('#advice').innerHTML = '"'+ advice.slip.advice + '"')
.catch(error => document.querySelector('#advice').innerHTML = error);

fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(id => document.querySelector('#advice-id').innerHTML = "advice #" + id.slip.id)
.catch(error => document.querySelector('#advice-id').innerHTML = error);

