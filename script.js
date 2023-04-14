// Mobile navigation toggle 

const btn = document.getElementsByClassName('toggleBtn');
const nav_block = document.getElementById('nav_menu-block');

const toggleNav = () => {
    nav_block.classList.toggle('d-none');
    console.log('working')
}

for(i=0; i<btn.length; i++){
    btn[i].addEventListener('click', toggleNav)
}


// for changing the header bg and the padding 

const header = document.getElementById('header');
const headerdiv = document.getElementById('headerdiv');
console.log(headerdiv.style.padding);

const headerStyle = () => {
    if(window.scrollY > 50){
        header.style.background = '#fff';
        if(innerWidth > 992){
            headerdiv.style.padding = '32px 0px !important';
            console.log(headerdiv.style.padding);
            headerdiv.setAttribute('style', 'padding: 32px 0px !important')
        }
    } else {
        header.style.background = 'transparent';
        if(innerWidth > 992){
            headerdiv.style.padding = '0px 0px';
            console.log(headerdiv.style.padding);
            headerdiv.setAttribute('style', 'padding: 48px 0px !important')
        }
    }
}

window.addEventListener('scroll', headerStyle);
