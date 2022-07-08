// Array foto
const img_arr = [   
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];
let img_arr_l = parseInt(img_arr.length);
// Costruzione Dinamica HTML 
let carousel_cont = document.getElementById('img-carousel');
for (let i = 0; i < img_arr_l; i++) {
    carousel_cont.innerHTML += 
    `   <li class="img">
            <img src=${img_arr[i]} alt="Immagine ${i + 1}">
        </li>
    `;
}
const img = document.getElementsByClassName('img');
let active = 0;
img[active].classList.add('show');
// EventListners
const forw = document.getElementById('forw');
const back = document.getElementById('back');
// Event Listner Avanti
forw.addEventListener('click',
    function () {
        // Spostamento classe
        img[active].classList.remove('show');
        active++;
        img[active].classList.add('show');
        // Rimozione bottone avanti
        back.classList.remove('hidden');
        if (active == img_arr_l - 1 ) {
            forw.classList.add('hidden');
        }
    });
// Event Listner Indietro
back.addEventListener('click',
    function () {
        // Spostamento classe
        img[active].classList.remove('show');
        active--;
        img[active].classList.add('show');
        // Rimozione bottone indietro
        forw.classList.remove('hidden');
        if (active == 0 ) {
            back.classList.add('hidden');
        }
    });



let position_r = document.getElementById('position-round');
// Costruzione Dinamica HTML borttoni pagina
for (let y = 0; y < 5; y++) {
    position_r.innerHTML +=
        `<li class="rnd" id=r${y}></li>`;
}
/*
// Spostamento classe active penultima foto
let prevbtn1 = document.getElementById('r0');
prevbtn1.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show')
        active = img_arr_l - 5;
        img[active].classList.add('show');
        position_r.querySelector(' #position-round *').classList.remove('rnd-active');
        prevbtn1.classList.add('rnd-active');
    });
// Spostamento classe active penultima foto
let prevbtn2 = document.getElementById('r1');
prevbtn2.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show')
        active = img_arr_l - 4;
        img[active].classList.add('show');
        document.getElementById('r1').classList.remove('rnd-active');
        document.getElementById('r3').classList.remove('rnd-active');
        document.getElementById('r4').classList.remove('rnd-active');
        document.getElementById('r0').classList.remove('rnd-active');
        prevbtn2.classList.add('rnd-active');
    });
// Spostamento classe active penultima foto
let prevbtn3 = document.getElementById('r2');
prevbtn3.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show')
        active = img_arr_l - 3;
        img[active].classList.add('show');
        position_r.querySelector('#position-round *').classList.remove('rnd-active');
        prevbtn3.classList.add('rnd-active');
    });
// Spostamento classe active penultima foto
let prevbtn4 = document.getElementById('r3');
prevbtn4.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show')
        active = img_arr_l - 2;
        img[active].classList.add('show');
        position_r.querySelector('#position-round *').classList.remove('rnd-active');
        prevbtn4.classList.add('rnd-active');
    });
// Spostamento classe active ultima foto
let prevbtn5 = document.getElementById('r4');
prevbtn5.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show')
        active = img_arr_l - 1;
        img[active].classList.add('show');
        position_r.querySelector(' #position-round *').classList.remove('rnd-active');
        prevbtn5.classList.add('rnd-active');
    });


    */