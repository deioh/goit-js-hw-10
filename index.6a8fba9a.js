!function(){console.log("start");var e="https://api.thecatapi.com/v1/images/search";function o(o){return console.log("Entering fetchCatByBreed"),console.log("Fetching cat by breed..."),console.log("Fetching url: ".concat(e,"?breed_ids=").concat(o)),fetch("".concat(e,"?breed_ids=").concat(o)).then((function(e){if(console.log("Got response:",e),!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return console.log("Successfully fetched cat:",e),e})).catch((function(e){throw console.error("Error fetching cat:",e),e})).finally((function(){console.log("Exiting fetchCatByBreed")}))}var t=document.querySelector(".breed-select");t.addEventListener("change",(function(e){console.log("Change event occurred");var t=e.target.value;console.log("Selected breed ID: ".concat(t)),o(t)})),console.log("Starting fetchBreeds..."),(console.log("Fetching breeds..."),fetch("https://api.thecatapi.com/v1/breeds").then((function(e){if(console.log("Got response:",e),!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return console.log("Successfully fetched breeds:",e),e})).catch((function(e){throw console.error("Error fetching breeds:",e),e}))).then((function(e){console.log("fetchBreeds successful. Received ".concat(e.length," breeds"));e.map((function(e){var o=document.createElement("option");return o.value=e.id,o.textContent=e.name,o})).forEach((function(e){console.log("Appending option ".concat(e.textContent," (").concat(e.value,")")),t.appendChild(e)}))})).catch((function(e){console.error("Error fetchingBreeds:",e)}))}();
//# sourceMappingURL=index.6a8fba9a.js.map