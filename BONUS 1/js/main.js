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