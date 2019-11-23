class AvatarsAPI {
  static imagesArrayRequest(URL = 'http://api.nuestro.eu/') {
    const imgs_tab = [];

    function requestAllImgsObject() {
      return new Promise((resolve, reject) => {
        var data = new FormData();
        data.append('img', true);
        var req = new XMLHttpRequest();
        req.open('POST', URL, true);
        req.addEventListener('load', () => { resolve(JSON.parse(req.response)) })
        req.send(data);
      })
    }
    function createImageArr(obj_images) {
      return new Promise((resolve, reject) => {
        for (let imgKey in obj_images) { imgs_tab.push(obj_images[imgKey]) }
        // imgs_arr
        resolve(imgs_tab);
      })
    }
    function returnImagesArray() {
      return (requestAllImgsObject()
        .then((obj_images) => {
          return createImageArr(obj_images);
        })
        .then((imgs_tab) => {
          return imgs_tab
        }))
    }
    //zwracam funckje, którą mogę wywołać jako callback w innym miejscu
    return returnImagesArray
  }
}

export default AvatarsAPI