// Procurar o botão
// Quando clicar
document.querySelector("#add-time").addEventListener("click", cloneField);

// Executar uma ação
function cloneField() {
  let newClone = false;
  // Duplicar os campos. Que campos?
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true); // Pega o que você quer duplicar

  const fields = newFieldContainer.querySelectorAll("input");
  const weekdaysFields = newFieldContainer.querySelector("select");

  // // inibir que um campo seja criado sem que o outro tenha sido completado:
  if (weekdaysFields.value) {
    newClone = true;
  } else {
    newClone = false;
  }

  fields.forEach((field) => {
    if (field.value) {
      newClone = true;
    } else {
      newClone = false;
    }
  }); // está para negar o vazio, não o não completo.

  if (field.value) {
    // Antes de colocar na página, é importante limpar.
    // Pegar os campos

    //Limpando:
    fields.forEach(function (field) {
      field.value = "";
    }); // Tipo de for que eu nunca vi antes. Legal demais até

    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer); // Dentro de quê você quer que duplique
  }
}

// Excluir um horário clicando na lixeira
const allScheduleItems = document.getElementsByClassName("schedule-item");
function test(event) {
  if (event.key === "t") {
    console.log(allScheduleItems);
  }
}
window.addEventListener("keydown", test);
console.log(allScheduleItems);
const deleteSchedule = document.querySelectorAll(".delete-schedule");

deleteSchedule.forEach((item) => {
  function deleteScheduleNow(event) {
    // console.log(event.path[2].classList);
    // for (let i = 0; i < event.path.length; i++) {
    //   for (let j = 0; j < event.path[i].classList.length; i++) {
    //     if (event.path[i].classList[j] === "schedule-item") {
    //       event.path[i].remove();
    //     }
    //   }
    // }
    // console.log(event.path);
    item.parentElement.remove();
  }
  item.addEventListener("click", deleteScheduleNow);
});

// tela de sucesso após a criação de um Proffy:
// const form = document.getElementById("create-class");

// form.addEventListener("submit", proffySuccessfullyAdded);

function proffySuccessfullyAdded(event) {
  console.log("adcionado com sucesso!");
  event.preventDefault();
}
