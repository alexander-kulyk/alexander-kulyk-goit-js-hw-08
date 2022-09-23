import throttle from "lodash.throttle";


const INPUT_KYE = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea'),
};

// refs.email.addEventListener('input', throttle(onEmailInput, 500));
// refs.message.addEventListener('input', throttle(onMessagelInput, 500));

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(evt) {
    const savedForm  = localStorage.getItem(INPUT_KYE);
    let formData = savedForm ? JSON.parse(savedForm)  : {};
    formData[evt.target.name] = evt.target.value;
    //formData.email = 
    // console.log('formData',evt.target.name);

    const inpuItems = JSON.stringify(formData);
    localStorage.setItem(INPUT_KYE,inpuItems);
}

pageUpdate();


function pageUpdate() {
    const getItemInput = JSON.parse(localStorage.getItem(INPUT_KYE));
    
    if (getItemInput) {
        refs.email.value = getItemInput.email || '';
        refs.message.value = getItemInput.message || '';

    };
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (refs.email.value === "" || refs.message.value === "") {
        alert("Please fill in all the fields!");
   } else{
    
    console.log('formData',formData);
    localStorage.removeItem(INPUT_KYE)
    refs.form.reset();
    // formData = {};
   };

};




// function onEmailInput(evt) {
//     const emailItem = JSON.stringify(formData);

//     localStorage.setItem(INPUT_KYE, emailItem) 
// };


// function onMessagelInput(evt) {
//     const messageItem = JSON.stringify(formData);
//     localStorage.setItem(INPUT_KYE, messageItem);
    
// }