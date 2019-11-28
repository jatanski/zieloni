import AvatarsAPI from "../models/avatarsAPI";
import { MainPlayer } from "../models/player"


class CreateMainPlayer {

    createPlayer() {
        const startBTN = document.getElementsByClassName('start')[0];

        startBTN.addEventListener('click', () => {
            const name = document.getElementsByClassName('name_main_avatar')[0].innerText;
            let imgContainer = document.getElementsByClassName("avatarContainer")[0];
            let imgs = [...imgContainer.children];
            let avatar = imgs.filter((img) => {
                return img.dataset && img.dataset.choice === 'true'
            })

            if (avatar.length === 1 && name !== 'NAME') {
                let mainPlayer = new MainPlayer(name, 0, avatar[0].src, 0, [], [], []);
                var savePlayer = JSON.stringify(mainPlayer);
                localStorage.mainPlayer = savePlayer;
                alert('Wszystko poszło okay');
            } else {
                alert('nie powiodło się uzupełnij dane');
            }

        })

    }
    chooseAvatarlistener() {
        var parenContainer = document.getElementsByClassName("avatarContainer")[0];
        function choose(e) {
            if (e.tatget !== e.currentTarget) {
                var clickedIMG = e.target;
                clickedIMG.dataset.choice = 'true';
                var imgs = [...clickedIMG.parentElement.children];
                imgs.forEach((el) => {
                    if (!el.dataset.choice || el.dataset.choice !== 'true') {
                        el.style.display = 'none';
                    }
                })
            }
            e.stopPropagation();
        }
        parenContainer.addEventListener('click', choose, false);

    }
    createAvatarChoices() {
        // AvatarsAPI.imagesArrayRequest()().then((resp) => { console.log(resp) });
        var divForMainAvatar = document.getElementsByClassName('avatarContainer')[0];
        AvatarsAPI.imagesArrayRequest()().then((resp) => {
            resp.map((avatar) => { return `<img alt='avatar' src=${avatar}></img>` })
                .forEach((img) => { divForMainAvatar.innerHTML += img })
        });
    }

}

export default CreateMainPlayer;
