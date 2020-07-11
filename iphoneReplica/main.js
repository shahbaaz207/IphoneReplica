const menuBtn =document.querySelector('.mobile-menu');
let menuOpen =false
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('active')
        menuOpen=true
    }else{
        menuBtn.classList.remove('active')
        menuOpen=false
    }
})
const menuBtn1 =document.querySelector('header');
menuBtn1.addEventListener('click',()=>{
    menuBtn1.classList.toggle('active')
})
