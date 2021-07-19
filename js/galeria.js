
const images = document.querySelectorAll('.img');
const containerImage = document.querySelector('.container-img');
const imagesContainer = document.querySelector('.img-show');
const copy = document.querySelector('.copy')

images.forEach(image =>{
    image.addEventListener('click', ()=>{

        addImage(image.getAttribute('src'),image.getAttribute('alt'));

    })
})

const addImage = ( srcImage, altImage ) =>{
    containerImage.classList.toggle('move');
    imagesContainer.classList.toggle('show');
    imagesContainer.src = srcImage;
    copy.innerHTML = altImage;
}

containerImage.addEventListener('click', () =>{
    containerImage.classList.toggle('move');
    imagesContainer.classList.toggle('show');
})