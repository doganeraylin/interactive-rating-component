const numbers = Array.from(document.querySelector('.numbers').children);
const numberContainer = document.querySelector('.numbers');
const submitButton = document.querySelector('#submit-button');
const container = document.querySelector('.container')



const selectNumber = (e) => {
    const id = e.target.dataset.id;
    if (id){
       numbers.forEach(num => num.classList.remove('active'))
    }
    e.target.classList.add('active');
    console.log(e.target.innerHTML);
}


// const showSelectedNumber = () => {
//     numbers.forEach(num => num.addEventListener('click', (e) => {
//         const selectedNumber = e.target.innerHTML;
//         console.log(selectedNumber)
//     }))
// }
// showSelectedNumber();



const thankYou = () => {
    container.innerHTML = `<div class="thank-you-container">
    <div class="thank-you-img">
        <img src="/images/illustration-thank-you.svg">
    </div>
    <div class="thank-you-rating">
        <p id="ty-rating">You selected 4 out of 5</p>
    </div>
    <div class="thank-you-header">
        <p>Thank you!</p>
    </div>
    <div class="thank-you-text">
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
</div> `
}


submitButton.addEventListener('click',thankYou);
numberContainer.addEventListener('click',selectNumber);

