let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.querySelector('.theme-switch')
const display = document.querySelector('.display')

if (darkmode === 'active') enableDarkMode()

themeSwitch.addEventListener('click',()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode()
})    

function enableDarkMode(){
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active') 
}

function disableDarkMode(){
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null) 
}

function appendToDisplay(input) {
    if(display.value !== 'Error')  display.value += input   
}

function clearDisplay() {
    display.value = ""
}

function deleteLast(){
    if(display.value !== 'Error') display.value = display.value.slice(0,-1)
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }  
}