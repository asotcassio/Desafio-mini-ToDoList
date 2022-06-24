
var formulario = document.getElementById('task-form');
var tarefas = document.getElementById('tasks');

formulario.onsubmit = function (e){
    e.preventDefault();

    const valorInput = document.getElementById('task-input');

    addTarefa(valorInput.value)
    
    form.reset()
}


function addTarefa(param){

    const caixa = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const NomeTarefa = document.createElement('label');
    const DesTarefa = document.createTextNode(param);

    novaTarefa.type = "checkbox";
    novaTarefa.setAttribute("name", param);
    novaTarefa.setAttribute("id", param);

    NomeTarefa.setAttribute("for",param);
    NomeTarefa.appendChild(DesTarefa);

    caixa.classList.add("task-item");
    caixa.appendChild(novaTarefa);
    caixa.appendChild(NomeTarefa);

    tarefas.appendChild(caixa);

     
}