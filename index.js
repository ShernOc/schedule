document.addEventListener('DOMContentLoaded',()=>{

const Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",]

// Update the days 
function updateDays(){
    const daySelect = document.querySelector('#weekday');
    const pday = document.querySelector('p');
    
    // event listener 
    daySelect.addEventListener('change',(e)=>{
        const daySelected = e.target.value.toUpperCase();
        pday.textContent = daySelected;    
})
}
updateDays();

// Upadate the to do list 




// event handler for the button 


// 

})

