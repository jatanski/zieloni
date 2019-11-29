class Welcome_View {
    static welcomeHTML() {
        document.body.innerHTML =
            `<div class="container">
                 <h2>Witaj!</h2>
                 <p>Aby zagrać wybierz avatar dla swojej postaci oraz nadaj jej imię.</p>
                <div class="mainAvatar">
                    <div class="avatarContainer"></div>
                </div>
                <h2 contenteditable=true class="name_main_avatar">NAME</h2>
                <button class="start">Zaczynamy!</button>
            </div>`
    }
    static welcomEnemyHTML() {
        document.body.innerHTML =
            `<div class="container">
                <h2>Tylko jeden krok dzieli Cię od trybu multiplayer</h2>
                <p>Aby zagrać poproś twojego rywala o stworzenie jego tymczasowej postaci</p>
                <div class="mainAvatar">
                    <div class="avatarContainer"></div>
                </div>
                <h2 contenteditable=true class="name_main_avatar">NAME</h2>
                <button class="start">Zaczynamy!</button>

            </div>`
    }
    static pushIMGs(imgs) {
        const divForMainAvatar = document.getElementsByClassName('avatarContainer')[0];
        imgs.map((avatar) => { return `<img alt='avatar' src=${avatar}></img>` })
            .forEach((img) => { divForMainAvatar.innerHTML += img })

    }

}
export default Welcome_View;
