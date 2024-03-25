const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they decided to publicaly publish known forms of curruption in the government, until they :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was an uncomfortably hot day."
const insertX = ["Sewerin Gilbo", "StoveGobCooks", "Peter Fortnite Griffin"];
const insertY = ["Installation 04", "Arakis", "Risky Reels"];
const insertZ = ["were thrown into a blacked out van by men in suits, never to be seen or heard from again", "succumbed to an 'unknown illness' and perished", "were immediately dragged to the 9th circle of hell by demons personally apointed by Satan himself"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14);
    weight = weight + " stone";
    let temperature =  Math.round((94-32)*(5/9));
    temperature = temperature + " centigrade";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
 

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}