let headerSpan = document.querySelector("#jop") ; 
let typingIcon = document.querySelector(".type")
let headerSpan_content = "Front-End Developer." ; 
let arrOfTxt = [...headerSpan_content]
console.log(arrOfTxt)
let num = 0 ; 
let fun = setInterval(() => {
    if (num < arrOfTxt.length) {
        headerSpan.innerHTML += arrOfTxt[num]
        num++ ; 
    }
} , 200)
