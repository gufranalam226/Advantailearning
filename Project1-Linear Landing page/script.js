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
    textIssue.style.color = "#8a8f98"
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


const back = document.querySelector(".back")
const next = document.querySelector(".next")
const toolcard = document.querySelector('.tool-cards')

let a= 0
back.addEventListener('click', ()=>{
    if(a >= 0){
        a =0
    }
    else
    a+=336
    toolcard.style.translate = `${a}px`
})
next.addEventListener('click', ()=>{
    if(a<=-1008){
        a =0;
    }
    else 
    a -= 336
    toolcard.style.translate = `${a}px`

})