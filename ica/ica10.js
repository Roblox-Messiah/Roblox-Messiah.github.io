const button = document.querySelector("button");
button.addEventListener('click', changeText);

const heading = document.querySelector("h1")

const image = document.querySelector("img")

function changeText() {
    //alert('test successful');
    heading.textContent = `i just stole your credit card info lol`;
    image.src = '../img/scamer.jpg';
}
