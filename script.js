const openModalOneBtn = document.getElementById('info-modal-button1');
const openModalTwoBtn = document.getElementById('info-modal-button2');
const openModalThreeBtn = document.getElementById('info-modal-button3');

const modalOne = document.getElementById('gallery-image1-modal');
const modalTwo = document.getElementById('gallery-image2-modal');
const modalThree = document.getElementById('gallery-image3-modal');

const closeModalOneBtn = document.getElementById('close-circle-one');
const closeModalTwoBtn = document.getElementById('close-circle-two');
const closeModalThreeBtn = document.getElementById('close-circle-three');



openModalOne = () => {
    modalOne.classList.toggle("active");
}

openModalOneBtn.onclick = () => {
    openModalOne();
}

openModalTwo = () => {
    modalTwo.classList.toggle("active");
}

openModalTwoBtn.onclick = () => {
    openModalTwo();
}

openModalThree = () => {
    modalThree.classList.toggle("active");
}

openModalThreeBtn.onclick = () => {
    openModalThree();
}



closeModalOne = () => {
    modalOne.classList.toggle("active");
}

closeModalOneBtn.onclick = () => {
    closeModalOne();
}

closeModalTwo = () => {
    modalTwo.classList.toggle("active");
}

closeModalTwoBtn.onclick = () => {
    closeModalTwo();
}

closeModalThree = () => {
    modalThree.classList.toggle("active");
}

closeModalThreeBtn.onclick = () => {
    closeModalThree();
}