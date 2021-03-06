// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I play for my Universites Volleyball Team', ' I play bass and guitar ', 'I´m in rock band called Los Insurgentes. Find us on Spotify ! '];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

//// Facts

/**
 * Fetches facts from the servers and adds them to the DOM.
 */
function getFacts() {
  fetch('/data').then(response => response.json()).then((fact) => {
    // fact is an object, not a string, so we have to
    // reference its fields to create HTML content

    const factsListElement = document.getElementById('server-facts-container');
    factsListElement.innerHTML = '';
    factsListElement.appendChild(
        createListElement('Fact 1 : ' + fact.fact1));
    factsListElement.appendChild(
        createListElement('Fact 2 : ' + fact.fact2));
    factsListElement.appendChild(
        createListElement('Fact 3 : ' + fact.fact3));
    factsListElement.appendChild(
        createListElement('Fact 4 : ' + fact.fact4));
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

///// Hi Alvaro
function goToData() {
    const responsePromise = fetch('/data');
    responsePromise.then(handleResponse);
}

function handleResponse(response) {
    const textPromise = response.text();
    textPromise.then(addDataDOM);
}

function addDataDOM(text) {
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerText = text;
}