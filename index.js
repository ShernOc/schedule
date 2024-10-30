/*A delete function that will remove tasks from your list
A priority value selected from a dropdownLinks to an external site. that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
An additional input field (e.g. user, duration, date due)
Ability to edit tasks
Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM*/

document.addEventListener('DOMContentLoaded', () => {
    // Grab all the elements we might need 

    // Update the days 
    function updateDays() {
        const daySelect = document.querySelector('#weekday');
        const pday = document.querySelector('.day');

        // event listener 
        daySelect.addEventListener('change', (e) => {
            const daySelected = e.target.value;
            pday.textContent = `Tasks to do on ${daySelected}`;
        })
    }
    updateDays();
    
    const selectOption = document.createElement('ol');
    selectOption.className = "ulist";

    // even handler of todolist 
    function todoList(todo) {
        const section = document.querySelector('section');
        const listdiv = document.createElement('div');
        listdiv.className = 'lists'
        
        const ulist = document.createElement('li'); 
        ulist.textContent = todo;

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Done';

        // event listern for delete button 
        delBtn.addEventListener('click', deleteBtn);

        // add/append the delete 
        selectOption.appendChild(ulist);
        ulist.appendChild(delBtn);
        listdiv.appendChild(selectOption);
        section.appendChild(listdiv);
    };

    // event handler for delete button 
    function deleteBtn(e) {
        e.preventDefault();
        e.target.parentNode.remove();
    };

     // Upadate the to do list 
     const form = document.querySelector('#todoform');
     form.addEventListener('submit', (e) => {
         e.preventDefault();
         todoList(e.target.addtodo.value)
         form.reset();
     });

    function footerSection(){
        const footer = document.getElementById('copyright');
        if(footer){
            const PresentYear = new Date().getFullYear();
            const text = `Copyright &copy;${PresentYear}`;
            footer.innerHTML = text; 
        }
        }
        footerSection();
});

