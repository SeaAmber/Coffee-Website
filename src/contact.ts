const nameInput = document.getElementById("name") as HTMLInputElement;
const nameError = document.getElementById("name-error") as HTMLInputElement;
const submitButton = document.getElementById("submitBtn") as HTMLInputElement;
const form = document.getElementById("contactForm") as HTMLFormElement;
const firstName = document.getElementById("firstName") as HTMLInputElement;
const lastName = document.getElementById("lastName") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const message = document.getElementById("message") as HTMLTextAreaElement;

const successMessage = document.getElementById("successMsg") as HTMLInputElement;


submitButton.addEventListener("click", (e) => {

    e.preventDefault();


  if (firstName.value.trim().length < 2) return alert("First name too short");
  if (lastName.value.trim().length < 2) return alert("Last name too short");
  if (!email.value.includes("@")) return alert("Invalid email");
  if (message.value.trim().length < 5) return alert("Message too short");

  

    form.reset();
  successMessage.classList.remove("hidden");

setTimeout(() =>successMessage.classList.add("hidden"),1000);
})


