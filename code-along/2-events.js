// To get started:
// 1. add an event listener to the window object, listening for the "DOMContentLoaded" event
// 2. use an anonymous function as the listener
window.addEventListener('DOMContentLoaded', function (event) { // waiting for page to load

    let clickMeButton = document.querySelector(".click-me-button")
    clickMeButton.addEventListener("click", function (event) { // waiting for button to be clicked
        alert("The button was clicked")
        console.log(event);
        event.preventDefault()

        let output = document.querySelector(".output") // printing
        output.insertAdjacentHTML("beforeend", "<p>The button was clicked</p>")
    })

    let googleButton = document.querySelector(".google-link")
    googleButton.addEventListener("click", function (event) { // waiting for button to be clicked
        alert("The button was clicked")
        event.preventDefault()

        let output = document.querySelector(".output") // printing 
        output.insertAdjacentHTML("beforeend", "<p>The Google button was clicked</p>")
    })

    let firstNameInput = document.querySelector("#firstName")


})