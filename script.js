const images = [
  "pexels-alena-koval-982865.jpg",
  "pexels-alex-andrews-821736.jpg",
  "pexels-cadora-991831.jpg",
  "pexels-just-a-couple-photos-3777622.jpg",
  "pexels-pixabay-45201.jpg",
  "pexels-pixabay-69932.jpg"
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function render() {
  fotocontainer = document.getElementById("fotocontainer");

  while (true) {
    for (let i = 0; i < images.length; i++) {
      let currentImg = images[i];
      fotocontainer.innerHTML = '';
      fotocontainer.innerHTML += /*html*/`
        <img src="img/${currentImg}" alt="">
      `;

      await sleep(2000);
    }
  }

}