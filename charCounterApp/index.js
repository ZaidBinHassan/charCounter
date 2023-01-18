const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let char = 0;


const udpateCounter = () => {
   userChar = charVal.value.length;

   totalCount.innerText = userChar;

   remainingCount.innerText = 150 - userChar;
};

charVal.addEventListener("keyup", () => udpateCounter());


// copy text code

const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 99999); //mobile
    navigator.clipboard.writeText(charVal.value); //imp

}