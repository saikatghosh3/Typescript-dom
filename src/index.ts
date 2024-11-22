
const UserForm = document.querySelector(".user-form") as HTMLFormElement;



const FirstName = document.querySelector("#fname") as HTMLInputElement;
const LastName = document.querySelector("#lname") as HTMLInputElement;
const Email = document.querySelector("#email") as HTMLInputElement;



UserForm.addEventListener("submit", (event : Event)=>{
    event.preventDefault();
    const data = {
        FirstName: FirstName.value,
        LastName: FirstName.value,
        Email: Email.value,
    };
    console.log(data);
    
});