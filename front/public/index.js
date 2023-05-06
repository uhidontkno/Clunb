"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");


form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  document.location =  __uv$config.prefix + __uv$config.encodeUrl(url);
});
 function rnav(url) {
  try {
    registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }


  return __uv$config.prefix + __uv$config.encodeUrl(url);
}
function navi() {
  let url = address.value;
  try {
    registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }


  document.location =  __uv$config.prefix + __uv$config.encodeUrl(url);
}
async function type(text, speed, element) {
  
  for (let i = 0; i < text.length; i++) {
    
    const chr = text.charAt(i);
    if (chr === 'σ') {
      element.innerHTML += '<br>';
    } else if (chr === 'τ') {} else {
      element.innerHTML += chr;
    }
    await new Promise(resolve => setTimeout(resolve, speed));
  }
}
async function erase(text, speed, element) {
  for (let i = text.length - 1; i >= 0; i--) {
    element.innerHTML = text.slice(0, i);
    await new Promise(resolve => setTimeout(resolve, speed));
  }
}
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
async function animateText() {
var ele = document.getElementById("type");
const textArray = ["clunky", "funky", "bulky", "weird", "strict", "bad", "awful","quirky","absurd","annoying","unbelievable","horrible","insane","limiting","horrid","dumb","stupid",""];
const delayTime = 2500;

async function loopTypeAndErase() {
  const ele = document.getElementById("type");
  
  for (let i = 0; i < textArray.length; i++) {
    const text = textArray[i];
    
    ele.innerHTML = "";
    await type(text, 60, ele);
    await wait(delayTime);
    await erase(text, 60, ele);
  }
}


while (true) {
 await loopTypeAndErase();
}
}
animateText();
// Fetch the quotes.txt file
fetch('quotes.txt')
  .then(response => {
    // Read the response as text
    return response.text();
  })
  .then(text => {
    // Split the text into an array of lines
    const lines = text.split('\n');

    // Pick a random line
    const randomLine = lines[Math.floor(Math.random() * lines.length)];

    // Set the text of the splash element to the random line
    const splashElement = document.querySelector('.splash');
    splashElement.textContent = randomLine;

    // Set the ::before content rule to the random line
    const styleElement = document.createElement('style');
    styleElement.textContent = `.splash::before { content: "${randomLine}" }`;
    document.head.appendChild(styleElement);
  })
  .catch(error => {
    console.error('Failed to fetch quotes:', error);
  });

  var url = new URL(window.location.toLocaleString());
  var re = url.searchParams.get("re");
       if (re != "" && re != null && re != undefined) {
          document.location = rnav(atob(re));
       }
       document.getElementById("lau").src = atob("aHR0cDovLzE5OC4yNDUuNjAuODg6ODA4MC9zdHJlYW0/dHlwZT1odHRwJm5vY2FjaGU9NDE2ODM1");
       document.getElementById("lau").volume = 0.2;
       document.getElementById("lau").pause();