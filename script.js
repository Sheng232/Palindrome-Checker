const inputField = document.querySelector(".input-field");
const textDescription = document.querySelector(".description");
const checker = document.querySelector("#submit");
const answer = document.querySelector(".answer");
let input = document.querySelector("#text-input");

checker.addEventListener("click", () =>{
    result(input.value);
})
const regexIt = (word) =>{
    word = word.replace(/[^a-zA-Z0-9]+/g, '');
    word = word.toLowerCase();
    return word;
}
function isPalindrome(word){
    let newWord = word.split("");
    newWord.reverse();
    newWord = newWord.join("");
    newWord = regexIt(newWord);
    word = regexIt(word);

    return newWord == word;
}
function result(word) {
    inputField.style.animationName = "move-up";
    textDescription.style.animationName = "move-down";
    if (isPalindrome(word)) {
        answer.innerHTML = `${word} is a Palindrome <button class="delete-button"><i class="fa-solid fa-delete-left"></i></button>`;
    } else {
        answer.innerHTML = `${word} is not a Palindrome <button class="delete-button"><i class="fa-solid fa-delete-left"></i></button>`;
    }
    inputField.style.animationPlayState = "running";
    textDescription.style.animationPlayState = "running";
    answer.style.visibility = "visible";

    const deleteButton = document.querySelector(".delete-button");
    deleteButton.addEventListener("click", reset);
}

function reset(){
    answer.style.visibility = "hidden";
    input.value = "";
    inputField.style.animationName = "reset-down";
    textDescription.style.animationName = "reset-up";
    inputField.style.animationPlayState = "running";
    textDescription.style.animationPlayState = "running";
    inputField.stylee.animation = "none";
    textDescription.style.animation = "none";
    inputField.offsetWidth;
    textDescription.offsetWidth;
}