const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



/* Declaring the array of image filenames */
const pics = ["../img/classic-peter-wa.jpg", "../img/greenFN-wa.jpg", "../img/pete-halo2-wa.jpg", "../img/peter-alert-wa.jpg", "../img/peter-fortnite-wa.jpg"];
/* Declaring the alternative text for each image file */
const alts = ["Classic Peter Griffin", "greenFN", "energy sword sunday", "ok", "welcome to fortnite peter"];
/* Looping through images */
for (let i = 0; i < 5; i++) {
const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', pics[i]);
        displayedImage.setAttribute('alt', alts[i]);
    });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    const button = btn.getAttribute("class");
    if (button == "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
