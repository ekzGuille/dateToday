const date = new DateCounter();
const size = 200;
const recOffset = 50;
let barWidth;
let buttonTweet;
let buttonRepoLink;

function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonTweet = createButton('Tweet it! 🕊🌍');
  buttonTweet.addClass('btnTweet');
  buttonTweet.mousePressed(tweet);
  
  buttonRepoLink = createButton('Full repo');
  buttonRepoLink.addClass('btnRepo');
  buttonRepoLink.mousePressed(repoLink);
  
  textAlign(CENTER);
}

function draw() {
  buttonTweet.position((windowWidth / 2) - recOffset - 40, (windowHeight - 80));
  buttonRepoLink.position((windowWidth - 120) , (windowHeight - 45));
  background(0);
  fill(255);
  textSize(size);
  text(`${date.getPercent()}%`, windowWidth / 2, windowHeight / 2);
  barWidth = map(date.getPercent(), 0, 100, 0, windowWidth - (2 * recOffset));
  fill(0, 255, 0);
  stroke(255);
  strokeWeight(3);
  rect(recOffset, (windowHeight / 2) + recOffset, barWidth, 50);
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(recOffset + barWidth, (windowHeight / 2) + recOffset, windowWidth - (2 * recOffset) - barWidth, 50);
}

function tweet() {
  const url = `https://twitter.com/intent/tweet?text=Today%20it%27s%20the%20${date.getPercent()}%25%20of%20the%20year! Checkout this feature on ${window.location.href} 😊`;
  window.open(url);
}

function repoLink() {
  const url = 'https://github.com/ekzGuille/dateToday';
  window.open(url);
}
