emailjs.init("oQuKe7Y721HHztn-P");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_10m8lj7";
  const templateID = "template_aecri1b";

  let buttonSubmit = document.querySelector("#form-submit");

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      buttonSubmit.innerHTML = "Enviado com Sucesso!";
      buttonSubmit.style.backgroundColor = "#00FA9A";

      setTimeout(() => {
        document.querySelector("#user_name").value = "";
        document.querySelector("#user_lastname").value = "";
        document.querySelector("#user_email").value = "";
        document.querySelector("#message").value = "";

        buttonSubmit.innerHTML = "Enviar";
        buttonSubmit.style.backgroundColor = "#016266";
      }, 2000);
    },
    (err) => {
      buttonSubmit.innerHTML = "Por favor, tente novamente!";
      buttonSubmit.style.backgroundColor = "#FF0000";
      console.log(JSON.stringify(err));
    }
  );
});
