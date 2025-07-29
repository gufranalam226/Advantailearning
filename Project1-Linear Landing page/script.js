const firstSlide = document.querySelector(".first_slide")
const secondSlide = document.querySelector(".second_slide")

setInterval(()=>{
    firstSlide.classList.toggle("active")
    firstSlide.classList.toggle("hidden")
    secondSlide.classList.toggle("active")
    secondSlide.classList.toggle("hidden")
}, 2000)








const collDocs = document.querySelector(".coll_docs")
const inlineComment = document.querySelector(".inline_comm")
const textIssue = document.querySelector(".text_issue")
const image = document.querySelector(".image")

collDocs.addEventListener("click", ()=>{
    collDocs.style.color = "#ffffff"
    inlineComment.style.color = "#8a8f98"
    // textIssue.style.color = "#8a8f98"
    image.src = "./images/ideate_image1.png"


})

inlineComment.addEventListener("click", ()=>{
    collDocs.style.color = "#8a8f98"
    inlineComment.style.color = "#ffffff"
    textIssue.style.color = "#8a8f98"
    image.src = "./images/ideate_image2.png"


})


textIssue.addEventListener("click", ()=>{
    collDocs.style.color = "#8a8f98"
    inlineComment.style.color = "#8a8f98"
    textIssue.style.color = "#ffffff"
    image.src = "./images/ideate_image3.png"


})