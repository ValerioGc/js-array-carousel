// Array foto
const img_arr = [   
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];
let img_arr_l = img_arr.length;
// Costruzione Dinamica HTML 
let carousel_cont = document.getElementById('img-carousel');
for (let i = 0; i < img_arr_l; i++) {
    carousel_cont.innerHTML += 
    `   <div class="img">
            <img src=${img_arr[i]} alt="Immagine ${i + 1}">
        </div>
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
