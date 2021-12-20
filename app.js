var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//console.log(txtInput)

var serverURL = "	https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL (text){

    return serverURL + "?" + "text=" + txtinput
}

function errorHandler(error){

    console.log("Error Occured" , error);
    alert("Try After sometime")
}

function clickHandler() {
    // console.log("clicked!");
    // console.log("input", txtInput.value);
  // outputDiv.innerText = "ajsjsjsjsjsjsj  " + txtInput.value;
  var inputText = txtInput.value;
  fetch(getTranslationURL(inputText))
  .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated;
    outputDiv.innerText = translatedText;
  })
  .catch(errorHandler)
};

//btnTranslate.addEventListener("click", clickHandler)

btnTranslate.addEventListener("click", clickHandler)

    