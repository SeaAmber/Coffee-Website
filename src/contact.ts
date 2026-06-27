
function formValidation(
  firstName: string,
  lastName: string,
  email: string,
 message: string
): string | null  {
if(firstName.trim().length < 2) {
  return "First name must be at least 2 characters."
}

if(lastName.trim().length <2) {
  return "Last name must be at least 2 characters."
}

if(!email.includes("@") || !email.includes(".")) {
  return "Please enter a valid email address."
}

if(message.trim().length < 5) {
  return "Message must be at least 5 characters."
}

return null;
}







const submitButton = document.getElementById("submitBtn") as HTMLInputElement;
const form = document.getElementById("contactForm") as HTMLFormElement;
const firstNameValue = document.getElementById("firstName") as HTMLInputElement;
const lastNameValue = document.getElementById("lastName") as HTMLInputElement;
const emailValue = document.getElementById("email") as HTMLInputElement;
const messageValue = document.getElementById("message") as HTMLTextAreaElement;

const successMessage = document.getElementById("successMsg") as HTMLInputElement;

const menu = document.getElementById("menubtn") as HTMLElement;
const navigationMenu = document.getElementById("nav-menu") as HTMLElement;



submitButton.addEventListener("click", (e) => {

    e.preventDefault();

    const firstNameInput = firstNameValue.value;
        const lastNameInput = lastNameValue.value;
    const email = emailValue.value;
    const message = messageValue.value;

    const errorValidation = formValidation(
    firstNameInput,
    lastNameInput,
    email,
    message
    );


 if(errorValidation) {
  alert(errorValidation);
  return;
 }

    form.reset();
  successMessage.classList.remove("hidden");

setTimeout(() =>successMessage.classList.add("hidden"),1000);
})



menu.addEventListener("click", () => {
 navigationMenu.classList.toggle("hidden");

 if(navigationMenu.classList.contains("hidden")) {
    menu.textContent = '☰';
 }
    else{
        menu.textContent = '✖';
    }
 }
)