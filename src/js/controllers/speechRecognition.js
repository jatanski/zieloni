class speechRecognition {

    static captureSpeech(breaker = false) {

        return new Promise((resolve, reject) => {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
            recognition.interimResults = true;
            recognition.lang = 'pl'
            let wordsTab = [];

            recognition.addEventListener('result', e => {
                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('')
                wordsTab.push(transcript);
            });
            function begin() {
                if (!breaker) {
                    recognition.start();
                } else {
                    recognition.stop();
                    resolve(wordsTab);
                }
            }
            if (breaker) { recognition.stop(); resolve(wordsTab) };
            // wywołanie funkcji z braker === true oznacza że chcemy zakończyć nasłuchiwanie bo skończył się czas !!!!
            //przyadło by się zrobić animacje mikrofonu gdy nasłuch jest aktywny.
            recognition.addEventListener('end', begin)
            recognition.start()
        })

    }

}

export default speechRecognition;