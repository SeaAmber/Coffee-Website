const nameInput = document.getElementById("name") as HTMLInputElement;
const nameError = document.getElementById("name-error") as HTMLInputElement;
const submitButton = document.getElementById("submitBtn") as HTMLInputElement;
const successMessage = document.getElementById("successMsg") as HTMLInputElement;


submitButton.addEventListener("click", (event) => {

    event.preventDefault();

   const name = nameInput?.value;

  if(name.trim() === "") {
    nameError.textContent = "Name is required";
    nameInput.classList.add("border-red-500, bg-red-50");
    return;
  }


  if(name.trim().length < 2) {
     nameError.textContent = "Name must be at least 2 characters";
     nameInput.classList.add("border-red-500, bg-red-50");
     return;

  }


  successMessage.textContent = "Messge sent successfully"
})


