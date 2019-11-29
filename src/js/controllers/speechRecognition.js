class speechRecognition {

    static captureSpeech(breaker = false, wordsTab, mic_icon) {


        return new Promise((resolve, reject) => {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
            recognition.lang = 'pl'
            if (!breaker) { let wordsTab = []; }
            recognition.addEventListener('result', e => {
                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('')
                console.log(transcript);
                wordsTab.push(transcript);
                mic_icon.parentNode.children[1].innerHTML = transcript;
                // console.log(mic_icon);

                //i funkcja odpowiedzialna za wrzucanie tego do htmla;
            });
            recognition.addEventListener('end', () => {
                //walidacja odopowidzi
                console.log(wordsTab)
            })
            recognition.start();
            setTimeout(() => { mic_icon.parentNode.children[1].innerHTML = 'zacznij mówić' }, 750)

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