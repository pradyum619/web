const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, msg){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small'); 
    small.innerText = msg;  
}

function checkEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(email.value.trim()).toLowerCase())){
        showSuccess(email);
    }else{
        showError(email, "Email is not valid");
    }
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkLength(input, min, max){

    if(input.value.length < min){
        // #min hai
        showError(input, `${getFieldName(input)} is less than ${min}`);
    } else if(input.value.length > max){
        // max hai
        showError(input, `${getFieldName(input)} is greater than ${max}`);
    }else{
        showSuccess(input);
    }

}

function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        showError(password2, 'Passwords does not match');
    }
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    
}
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input,(`${getFieldName(input)} is required`));
        } else{
            showSuccess(input);
        }
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkRequired([username, password, password2, email]);
    checkLength(username, 3, 15);
    checkLength(password, 8, 20);
    checkEmail(email);
    checkPasswords(password2, password);

    
    // Use below line to submit
    // console.log(document.form.submit());
})