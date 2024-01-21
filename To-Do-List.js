const addtodo = [];

displayTitle();

function displayTitle(){

    let todoHtmlbody = '';
    for(let i = 0; i < addtodo.length; i++){

        const todoname = (addtodo[i]);
        todoHtml = `<p>${todoname}</p>`;
        todoHtmlbody += todoHtml;

        document.querySelector('.to-do-diaplay')
        .innerHTML = todoHtmlbody;

    }
}

function addTodo(){

    const inputElement = document.querySelector('.task-name');

        let name = inputElement.value;

        console.log(name);
        addtodo.push(name);
        console.log(addtodo);
    
        inputElement.value = '';
    
        displayTitle();
}