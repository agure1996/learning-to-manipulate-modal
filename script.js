'use strict';

/**Firstly we store the elements
 * and Methods we will use repeatedly into variables
 *  this is good code practise */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsShowModal = document.querySelectorAll('.show-modal');

//for cleaner code we put the repetitive methods into functions and put the functions into variables we can call

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hidemodal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//loop through the button modals
for (let i = 0; i < btnsShowModal.length && i < 4; i++) {
  //upon clicking button modals open modal with text
  btnsShowModal[i].addEventListener('click', openModal);

  //upon clicking 'x' at edge of modal close modal
  btnCloseModal.addEventListener('click', hidemodal);
  // or upon touching the overlay outside the modal exit it
  overlay.addEventListener('click', hidemodal);
}


document.addEventListener('keydown', (e) =>{
    //get the key for the escape button
    const keyboardBtn = e.key
//if we press escape and modal is showing, then we want to close the modal
if(keyboardBtn === 'Escape' && !modal.classList.contains('hidden')) hidemodal();
})
