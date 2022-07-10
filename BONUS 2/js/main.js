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
const img = document.getElementsByClassName('img');
const cont_l_prev = document.getElementById('l-prev');
const l_prev = document.getElementsByClassName('imgp');
let carousel_cont = document.getElementById('img-carousel');
let preview = document.getElementById('ao');
for (let i = 0; i < img_arr_l; i++) {
    carousel_cont.innerHTML += 
    `   <li class="img">
            <img src=${img_arr[i]} alt="Immagine ${i + 1}">
        </li> 
    `;
    cont_l_prev.innerHTML +=
        `   <li class="imgp ovrl">
                <img src=${img_arr[i]} alt="Immagine ${i + 1}">
            </li>
    `;
}
let active = 0;
img[active].classList.add('show');
l_prev[active].classList.remove('ovrl');
// EventListners
const forw = document.getElementById('forw');
const back = document.getElementById('back');
// Event Listner Avanti
forw.addEventListener('click',
    function () {
        // Spostamento classe
        img[active].classList.remove('show');
        l_prev[active].classList.add('ovrl');
        active++;
        img[active].classList.add('show');
        l_prev[active].classList.remove('ovrl');
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
        l_prev[active].classList.add('ovrl');
        active--;
        img[active].classList.add('show');
        l_prev[active].classList.remove('ovrl');
        // Rimozione bottone indietro
        forw.classList.remove('hidden');
        if (active == 0 ) {
            back.classList.add('hidden');
        }
    });

