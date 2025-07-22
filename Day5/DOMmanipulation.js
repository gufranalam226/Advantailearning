const first = document.getElementById("first");
first.innerHTML = `${first.innerHTML} | Original content is modified by javascript DOM manipulation`;
// all style property can be apply after element.style.<styleName>
first.style.backgroundColor = "#6a7a8a"

// insert element by JS
const insertElement  = document.createElement("div")
insertElement.style.backgroundColor = "#e9e9e9"
insertElement.style.marginTop = "30px"
insertElement.style.fontSize = "24px"
insertElement.innerHTML = "This is a new element inserted by javascript DOM manipulation, using appendChild method"
first.insertAdjacentElement("afterend" ,insertElement)
insertElement.classList.add("inserted-element") //add, remove, toggle
insertElement.classList.add("inserted-element2") //add, remove, toggle
console.log(insertElement.hasAttribute("class")) // method to check the attrivute 
insertElement.setAttribute("id" , "inserted-element-id") 
// insertElement.removeAttribute("id") //for attribute remove
console.log(insertElement.attributes)
console.log(insertElement.hasAttributes('class'))
// insertElement.remove() // to remove the tag or html element
// insertElement.removeAttribute("id") //to remove attribute



// insert list of items inside a div along with list items and heading
const listContainer = document.createElement("div")
const listHeading = document.createElement("h2")
listHeading.innerHTML = "There is a heading of the list"
const list = document.createElement("ul")
const listItem1 = document.createElement("li")
listItem1.innerHTML = "This is the first item of the list"
const listItem2 = document.createElement("li")
listItem2.innerHTML = "This is the first item of the list"
const listItem3 = document.createElement("li")
listItem3.innerHTML = "This is the first item of the list"
const listItem4 = document.createElement("li")
listItem4.innerHTML = "This is the first item of the list"


listContainer.appendChild(listHeading)
listContainer.appendChild(list)
list.append(listItem1, listItem2, listItem3, listItem4)

insertElement.insertAdjacentElement("afterend" ,listContainer)

const selectElement = document.querySelector(".inserted-element")
selectElement.style.backgroundColor = "#6a7a8a"


// add event listener

selectElement.addEventListener("mouseover" , () => {
    selectElement.style.backgroundColor = "lightBlue"
})
selectElement.addEventListener("mouseout" , () => {
    selectElement.style.backgroundColor = "#6a7a8a"
})



const clickButton = document.createElement("button")
first.insertAdjacentElement("afterend" ,clickButton)
clickButton.innerHTML = "Click Here"
clickButton.style.height = "50px"
clickButton.style.width = "150px"
clickButton.style.backgroundColor = "lightBlue"
clickButton.style.borderRadius = "10px"
clickButton.style.border = "none"
clickButton.style.fontSize = "18px"
// clickButton.addEventListener("click" , () => {
//     alert("Button clicked")
// })
clickButton.addEventListener("dblclick" , () => {
    alert("Button clicked two times")
})


