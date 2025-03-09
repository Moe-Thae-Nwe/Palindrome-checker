const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")

textInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkBtn.click()
    }
})
checkBtn.addEventListener("click", function() {
    let textInputValue = textInput.value
    if (textInputValue === "") {
      window.alert("Please input a value")
    } else {
        let lowerCase = textInputValue.toLowerCase()
        let currentLetter = ""
        let sentence = ""
        let palindrome = ""
        for (let i = 0; i < lowerCase.length; i++) {
            currentLetter = lowerCase[i]
            if ((currentLetter.charCodeAt() > 47 && currentLetter.charCodeAt() < 58) || (currentLetter.charCodeAt() > 96 && currentLetter.charCodeAt() < 123)){
                sentence += currentLetter
            }
        }
        let checkerSentence = sentence
        for (let i = 0; sentence.length > 0; i++) {
        palindrome += sentence[sentence.length - 1]
        sentence = sentence.slice(0, -1)
        }
        if (palindrome == checkerSentence) {
        result.innerHTML = `${textInputValue} is a palindrome`
        } else {
        result.innerHTML = `${textInputValue} is not a palindrome`
        }
    }
})
