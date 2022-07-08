// Array foto
const img_arr = [   "img/01.jpg",
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



// Event Listner Back

// Event Listner Forw