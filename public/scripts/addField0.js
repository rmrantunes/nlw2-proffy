// Procurar o botão
// Quando clicar
document.querySelector("#add-time").addEventListener("click", cloneField);

// Executar uma ação
function cloneField() {
  // inibir que um campo seja criado sem que o outro tenha sido completado:

  // Duplicar os campos. Que campos?
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true); // Pega o que você quer duplicar

  const fields = newFieldContainer.querySelectorAll("input");
  // Antes de colocar na página, é importante limpar.
  // Pegar os campos

  //Limpando:
  fields.forEach(function (field) {
    field.value = "";
  }); // Tipo de for que eu nunca vi antes. Legal demais até

  // Colocar na página
  document.querySelector("#schedule-items").appendChild(newFieldContainer); // Dentro de quê você quer que duplique
}

// Excluir um horário clicando na lixeira

const deleteSchedule = document.querySelector(".delete-schedule");

deleteSchedule.addEventListener;

// tela de sucesso após a criação de um Proffy:
// const form = document.getElementById("create-class");

// form.addEventListener("submit", proffySuccessfullyAdded);

function proffySuccessfullyAdded(event) {
  console.log("adcionado com sucesso!");
  event.preventDefault();
}
