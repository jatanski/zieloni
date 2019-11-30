class Words {
    // translate('ciastka','pl-en').then((r)=>{console.log(r)})
    static translate(callback, direction = "pl-en") {
        var word = callback;
        const key = "trnsl.1.1.20191127T203954Z.49358b05ae58de81.aeaddd88313970f3f86ee45c3bb2bc1f41400a12"
        // return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${word}&lang=${direction}&format=plain&options=0`, {
        return fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${word}&lang=${direction}&format=plain`, {
            "method": "GET"
        }).then((resp) => {
            return resp.json()
        })
            .then((resp) => {
                return [resp.text[0], word];
            })
            .catch((err) => {
                console.log(err);
            })
    }

    static randomWord() {
        //z tego co zauważyłem to trzeba odświeżać klucze, więc jak coś nie działa to najlepiej wygenerować nowy.
        //https://random-word-api.herokuapp.com/
        //inne API ale z limitem zapytan 
        //http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5


        // const key = 'XZNW1U9F';
        // return fetch(`https://random-word-api.herokuapp.com//word?key=${key}&number=1`, {
        //     "method": "GET"
        // }).then((resp) => {
        //     return resp.json()
        // }).then((resp) => {
        //     if (resp === 'wrong API key') { this.randomWord; return; }
        //     return resp[0]
        // })
        var rand = Math.floor(Math.random() * 1000);
        let data = new FormData();
        data.append('word', true);
        return fetch(`http://api.nuestro.eu/`, {
            "method": "POST",
            body: data,
        }).then((resp) => {
            return resp.json()
        }).then((r) => { return (r[rand].word.value) })
    }

    static return_translation(direction) {
        return this.randomWord()
            .then((resp) => { return this.translate(resp, direction) })
            .then((word) => { return word });
    }

}

export default Words
