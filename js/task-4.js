// варіант 1 ======================>

const formContainer = document.querySelector(".login-form");

formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    

    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    };

    const result = {
        email,
        password,
    };

    console.log(result);
    
    formContainer.reset();
});

// // Варінат 2 ======================>


// const formContainer = document.querySelector(".login-form");

// const sendUserInfor = (event) => {
//     event.preventDefault();

//     const email = event.target.elements.email.value.trim();
//     const password = event.target.elements.password.value.trim();
    

//     if (!email || !password) {
//         alert('All form fields must be filled in');
//         return;
//     };

//     const result = {};
//     result[event.target.elements.email.name] = email;
//     result[event.target.elements.password.name] = password;

//     console.log(result);
    
//     formContainer.reset();
// };

// formContainer.addEventListener("submit", sendUserInfor);
