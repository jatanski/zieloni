class speechRecognition {

    captureSpeech() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition); 
        recognition.interimResults = true;
        recognition.lang = 'pl'

        recognition.addEventListener('result', e => {
            console.log(e.results);
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
            console.log(transcript);
        });
        recognition.addEventListener('end', recognition.start)
        recognition.start()
    }

}

export default speechRecognition;