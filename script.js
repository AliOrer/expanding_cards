const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses () {
    panels.forEach(panel=> {
        panel.classList.remove('active')
    })
}


function myFunction () {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


let btnSend = document.querySelector('button');
btnSend.addEventListener('click', () =>{
    btnSend.innerText = 'Light Mode';
    setTimeout(()=>{
        btnSend.style.display = "none";
        
    },5000);
});