import "../scss/main.scss";


import MainCtrl from "./controllers/main";
import speechRecognition from "./controllers/speechRecognition"

new MainCtrl().init();
new speechRecognition().captureSpeech()

// Testy

// const newTest = document.createElement("div");
// newTest.innerText = "Test2";

// const testText = document.querySelector(".test");
// testText.appendChild(newTest);
