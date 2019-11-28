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
}
export default Welcome_View;
