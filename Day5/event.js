// Event Bubbling & event capturing & stop propagation

const grandParent = document.querySelector(".grandParent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
grandParent.addEventListener("click", (e) => {
    console.log(e.target);
    console.log("Grand Parent Clicked");
}, false)
parent.addEventListener("click", (e) => {
    console.log(e.target);
    // e.stopPropagation(); // to stop the event bubbling and capturing
    console.log("Parent Clicked");
}, true)
child.addEventListener("click", (e) => {
    console.log(e.target);
    console.log("Child Clicked");
}, false)


// event delegation - it is a technique of handling events on a parent element instead of individual child elements. Instead of adding event listeners to each child element, we add it to the parent element and use the event object to target the specific child element that was clicked.