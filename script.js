const fullImg = document.querySelector('.full-img');
const smallImg = document.querySelectorAll('.gallery img');
const modal = document.querySelector('.modal');

smallImg.forEach(function (img) {
    img.addEventListener("click",function () {
        modal.classList.add('active');
        fullImg.classList.add('active');

        // ici changeons nos images de maniere dynamique

        const originalQuality = img.getAttribute('alt');
        fullImg.src = `/full/${originalQuality}.jpg`
    })
})

modal.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove('active');
        fullImg.classList.remove('active');
    }
})