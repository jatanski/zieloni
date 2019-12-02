import AvatarsAPI from "../models/avatarsAPI";
import { MainPlayer, Player } from "../models/player";
import BaseView from "../views/view";


class CreateMainPlayer {


    createPlayer(that, mainPlayer, enemyPlayer, isEnemy = false) {
        const startBTN = document.getElementsByClassName('start')[0];
        // console.log(that.init);

        startBTN.addEventListener('click', () => {
            const name = document.getElementsByClassName('name_main_avatar')[0].innerText;
            let imgContainer = document.getElementsByClassName("avatarContainer")[0];
            let imgs = [...imgContainer.children];
            let avatar = imgs.filter((img) => {
                return img.dataset && img.dataset.choice === 'true'
            })

            if (avatar.length === 1 && name !== 'NAME') {
                if (!isEnemy) {
                    mainPlayer = new MainPlayer(name, 0, avatar[0].src, 0, [], [], []);
                    let savePlayer = JSON.stringify(mainPlayer);
                    localStorage.mainPlayer = savePlayer;
                } else if (isEnemy) {
                    enemyPlayer = new Player(name, 0, avatar[0].src);
                    let savePlayer = JSON.stringify(enemyPlayer);
                    localStorage.enemyPlayer = savePlayer;
                    //that.init();
                }
                that.init();
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

    createAvatarChoices(callback_img_pusher) {
        AvatarsAPI.imagesArrayRequest()().then((imgs) => { callback_img_pusher(imgs) })
    }

}

export default CreateMainPlayer;
