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

/** Adds a random fact to the DOM. */
function addfactToDom(fact) {
  console.log('Adding fact to dom: ' + fact);

  const factContainer = document.getElementById('fact-container');
  factContainer.innerText = fact;
}


//////////////////////////
function getRandomfact() {
  console.log('Fetching a random fact.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/random-fact');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addfactToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const textPromise = response.text();

  // When the response is converted to text, pass the result into the
  // addfactToDom() function.
  textPromise.then(addfactToDom);
}


/**
 * The above code is organized to show each individual step, but we can use an
 * ES6 feature called arrow functions to shorten the code. This function
 * combines all of the above code into a single Promise chain. You can use
 * whichever syntax makes the most sense to you.
 */
function getRandomfactUsingArrowFunctions() {
  fetch('/random-fact').then(response => response.text()).then((fact) => {
    document.getElementById('fact-container').innerText = fact;
  });
}

/**
 * Another way to use fetch is by using the async and await keywords. This
 * allows you to use the return values directly instead of going through
 * Promises.
 */
async function getRandomfactUsingAsyncAwait() {
  const response = await fetch('/random-fact');
  const fact = await response.text();
  document.getElementById('fact-container').innerText = fact;
}