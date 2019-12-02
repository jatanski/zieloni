class speechRecognition {

    static captureSpeech(validator, game, mic_icon, setNewRoundSchema) {


        return new Promise((resolve, reject) => {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
            recognition.lang = 'en'
            recognition.addEventListener('result', e => {
                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('')
                console.log(transcript);
                game.tabWords.length = 0;
                game.tabWords.push(transcript);
                mic_icon.parentNode.children[2].innerHTML = transcript;//informuje w którym miejscu masz wrzucić to, co się powiedziało 
                // console.log(mic_icon);

                //i funkcja odpowiedzialna za wrzucanie tego do htmla;
            });
            recognition.addEventListener('end', () => {
                let validationResult = validator(game.tabWords, game.currentTranslationWords);
                mic_icon.classList.remove('active');
                // tu jest przypisany wynik czy dobrze czy źle player odpowiedział; ta zmienna jest mi potrzebna do prawidłowego przyznawania/odejmowania punktów
                //na podstawie tego, kto odpowiadał, jaki jet wynik, przypisać punkty dodatnie lub ujemne
/*TO ZROBIĆ MAM-WYŚWIETLA CZY DOBRZE CZY ŹLE, ALE NIE DODAJE PUNKTÓW I NIE ODEJMUJE - ZROBIĆ TO DODAWANIE I ODEJMOWANIE PUNKTÓW PRZECIWNIKOM*/  //przydzielenie wyników w zależności
//od wyniku można to w sumie spiąć z setNewRoundSchema !!!
let activePlayer = mic_icon.dataset.player === 'enemyPlayer'? game.enemyPlayer : game.mainPlayer;
console.log(activePlayer)
if(validationResult){
    activePlayer == game.mainPlayer ? game.setPoints(game.mainPlayer, game.enemyPlayer, 10, -10) : game.setPoints(game.mainPlayer, game.enemyPlayer, -10, 10);
}
else {
    activePlayer == game.mainPlayer ? game.setPoints(game.mainPlayer, game.enemyPlayer, -10, 10) : game.setPoints(game.mainPlayer, game.enemyPlayer, 10, -10);
} 


//console.log(player);
//console.log(game);
                setNewRoundSchema(true);
            })
            recognition.start();
            setTimeout(() => { mic_icon.parentNode.children[2].innerHTML = 'zacznij mówić' }, 750)

        })




        // console.log(wordsTab);
        // console.log('run');
        // return new Promise((resolve, reject) => {

        //     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
        //     // recognition.interimResults = true;
        //     recognition.lang = 'pl'
        //     if (!breaker) { let wordsTab = []; }
        //     recognition.addEventListener('result', e => {
        //         const transcript = Array.from(e.results)
        //             .map(result => result[0])
        //             .map(result => result.transcript)
        //             .join('')
        //         console.log(transcript);
        //         wordsTab.push(transcript);
        //     });
        //     function begin() {
        //         if (!breaker) {
        //             recognition.start();
        //         } else {
        //             recognition.stop();
        //             resolve(wordsTab);
        //         }
        //     }
        //     if (breaker) { recognition.stop(); resolve(wordsTab) };
        //     // wywołanie funkcji z braker === true oznacza że chcemy zakończyć nasłuchiwanie bo skończył się czas !!!!
        //     //przyadło by się zrobić animacje mikrofonu gdy nasłuch jest aktywny.
        //     recognition.addEventListener('end', begin)
        //     recognition.start()
        // })

    }

}

export default speechRecognition;