// Mobile navigation toggle 

const btn = document.getElementsByClassName('toggleBtn');
const nav_block = document.getElementById('nav_menu-block');

const toggleNav = () => {
    nav_block.classList.toggle('d-none');
}

for(i=0; i<btn.length; i++){
    btn[i].addEventListener('click', toggleNav)
}


// for changing the header bg and the padding 

const header = document.getElementById('header');
const headerdiv = document.getElementById('headerdiv');

const headerStyle = () => {
    if(window.scrollY > 50){
        header.style.background = '#fff';
        if(innerWidth > 992){
            headerdiv.style.padding = '32px 0px !important';
            headerdiv.setAttribute('style', 'padding: 32px 0px !important')
        }
    } else {
        header.style.background = 'transparent';
        if(innerWidth > 992){
            headerdiv.style.padding = '0px 0px';
            headerdiv.setAttribute('style', 'padding: 48px 0px !important')
        }
    }
}
window.addEventListener('scroll', headerStyle);


// form submit button fuction 

const submitBtn = document.getElementById('submitBtn');
const emailInput = document.getElementById('email');
const inputBlock = document.getElementById('inputBlock');
const inputError = document.getElementById('inputError');



const checkInput = () => {
    const vaild = emailInput.checkValidity();
    if(emailInput.value.length === 0) {
        inputBlock.classList.add('border_invalid-input');
        inputError.innerText = "Please Enter your email";
    } else if(vaild) {
        inputBlock.classList.remove('border_invalid-input');
        inputError.innerText = "";
        emailInput.value = "";
    } else {
        inputBlock.classList.add('border_invalid-input');
        inputError.innerText = "Whoops, make sure it's an email";
    }
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    checkInput();
})