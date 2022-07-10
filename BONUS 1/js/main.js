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
let position_r = document.getElementById('position-round');
for (let i = 0; i < img_arr_l; i++) {
    carousel_cont.innerHTML += 
    `   <li class="img">
            <img src=${img_arr[i]} alt="Immagine ${i + 1}">
        </li>
    `;
    position_r.innerHTML +=
        `<li class="rnd" id=r${i}></li>`;
}
const img = document.getElementsByClassName('img');
const preview_rnd = document.querySelectorAll('#position-round li');
let active = 0;
img[active].classList.add('show');
preview_rnd[active].classList.add('rnd-active');
// EventListners
const forw = document.getElementById('forw');
const back = document.getElementById('back');
const last = img_arr_l - 1;
// Event Listner Avanti
forw.addEventListener('click',
    function () {
        // Ciclo infinito
        if (active == last) {
            // Rimozione classe Active 
            img[active].classList.remove('show')
            preview_rnd[active].classList.remove('rnd-active');
            // Reset posizione contatore
            active = 0;
            // Aggiunta classe Active
            img[active].classList.add('show');
            preview_rnd[active].classList.add('rnd-active');
        }
        // Spostamento classe
        img[active].classList.remove('show');
        preview_rnd[active].classList.remove('rnd-active');
        active++;
        img[active].classList.add('show');
        preview_rnd[active].classList.add('rnd-active');
    });
// Event Listner Indietro
back.addEventListener('click',
    function () {
        // Ciclo infinito
        if (active == 0) {
            // Rimozione classe Active 
            img[active].classList.remove('show')
            preview_rnd[active].classList.remove('rnd-active');
            // Reset posizione contatore
            active = last;
            // Aggiuta classe Active 
            img[active].classList.add('show');
            preview_rnd[active].classList.add('rnd-active');
        }
        // Spostamento classe
        img[active].classList.remove('show');
        preview_rnd[active].classList.remove('rnd-active');
        active--;
        img[active].classList.add('show');
        preview_rnd[active].classList.add('rnd-active');
    });

// Collegamenti preview foto
const l_prev = document.getElementsByClassName('rnd');
// Spostamento classe active prima foto
let dotbtn1 = document.getElementById('r0');
dotbtn1.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show');
        l_prev[active].classList.remove('rnd-active');
        active = last - 5;
        forw.classList.remove('hidden');
        back.classList.add('hidden');
        img[active].classList.add('show');
        l_prev[active].classList.add('rnd-active');
    });
// Spostamento classe active seconda foto
let dotbtn2 = document.getElementById('r1');
dotbtn2.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show');
        l_prev[active].classList.remove('rnd-active');
        active = last - 4;
        forw.classList.remove('hidden');
        back.classList.remove('hidden');
        img[active].classList.add('show');
        l_prev[active].classList.add('rnd-active');
    });
// Spostamento classe active terza foto
let dotbtn3 = document.getElementById('r2');
dotbtn3.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show');
        l_prev[active].classList.remove('rnd-active');
        active = last - 3;
        forw.classList.remove('hidden');
        back.classList.remove('hidden');
        img[active].classList.add('show');
        l_prev[active].classList.add('rnd-active');
    });
// Spostamento classe active penultima foto
let dotbtn4 = document.getElementById('r3');
dotbtn4.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show');
        l_prev[active].classList.remove('rnd-active');
        active = last - 2;
        forw.classList.remove('hidden');
        back.classList.remove('hidden');
        img[active].classList.add('show');
        l_prev[active].classList.add('rnd-active');
    });
// Spostamento classe active ultima foto
let dotbtn5 = document.getElementById('r4');
dotbtn5.addEventListener('click',
    function () {
        // Spostamento classe active
        img[active].classList.remove('show');
        l_prev[active].classList.remove('rnd-active');
        active = last - 1;
        forw.classList.add('hidden');
        back.classList.remove('hidden');
        img[active].classList.add('show');
        l_prev[active].classList.add('rnd-active');
    });