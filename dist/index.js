"use strict";
const UserForm = document.querySelector(".user-form");
const FirstName = document.querySelector("#fname");
const LastName = document.querySelector("#lname");
const Email = document.querySelector("#email");
UserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        FirstName: FirstName.value,
        LastName: FirstName.value,
        Email: Email.value,
    };
    console.log(data);
});
