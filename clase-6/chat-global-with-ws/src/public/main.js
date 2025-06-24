const socket = io();

let username = prompt("Ingrese su nombre de usuario");

socket.emit("login", username);
socket.on("new-user", (newUser) => alert(`${newUser} se ha conectado!`));

const form = document.getElementById("form");
const inputMsg = document.getElementById("msg");
const box = document.getElementById("messages-box");

socket.on("all-msgs", (data) => {
  let tagHtml = "";
  if (data.length) {
    tagHtml = data.reduce((acc, doc) => {
      return acc + `<li>${doc.user}: ${doc.message}</li>`;
    }, "");
    tagHtml = `<ul>${tagHtml}</ul>`;
  } else {
    tagHtml = "<p>No existen mensajes, ¡Se el primero!</p>";
  }

  box.innerHTML = `<div>${tagHtml}</div>`;
});

inputMsg.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const dataMessage = { user: username, message: inputMsg.value };
    socket.emit("new-msg", dataMessage);
    inputMsg.value = "";
  }
});
