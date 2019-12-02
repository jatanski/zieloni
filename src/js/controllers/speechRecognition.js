class speechRecognition {

    static captureSpeech(validator, game, mic_icon, setNewRoundSchema) {
        // dodać dodawanie flagi

        return new Promise((resolve, reject) => {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
            recognition.lang = 'pl'
            recognition.addEventListener('result', e => {
                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('')
                console.log(transcript);
                game.tabWords.length = 0;
                game.tabWords.push(transcript);
                mic_icon.parentNode.children[2].innerHTML = transcript;
                // informuje w którym miejscu się wyświetla to co się powiedziało
                // console.log(mic_icon);

                //i funkcja odpowiedzialna za wrzucanie tego do htmla;
            });
            recognition.addEventListener('end', () => {
                let validationResult = validator(game.tabWords, game.currentTranslationWords);
                mic_icon.classList.remove('active')
                //przydzielenie wyników w zależności od wyniku można to w sumie spiąć z setNewRoundSchema !!!
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