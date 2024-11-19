document.addEventListener('DOMContentLoaded', function(){
    var homediv = document.getElementById('Home');
var hobbydiv = document.getElementById('Hobby');
var worksdiv = document.getElementById('Works');
var contactdiv = document.getElementById('Contact');

var homenav = document.getElementById('homenav')
var hobbynav = document.getElementById('hobbynav')
var worksnav = document.getElementById('worksnav')
var contactnav = document.getElementById('contactnav')

homenav.addEventListener('click', function(){
    homediv.scrollIntoView({
        behavior : 'smooth',
        block: 'start'
    })
    console.log("hola")
})
hobbynav.addEventListener('click', ()=>{
    hobbydiv.scrollIntoView({
        behavior : 'smooth',
        block: 'start'
    })
})
worksnav.addEventListener('click', ()=>{
    worksdiv.scrollIntoView({
        behavior : 'smooth',
        block: 'start'
    })
})
contactnav.addEventListener('click', ()=>{
    contactdiv.scrollIntoView({
        behavior : 'smooth',
        block: 'start'
    })
})
})
