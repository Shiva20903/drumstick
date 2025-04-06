//drumstick pro start here

let img1 = document.getElementsByClassName("img");
let sound_1 = document.getElementsByClassName("sound");

let imag2 = [
  "./assets/imageC.png",
  "./assets/imageD.jpg",
  "./assets/imageE.jpg",
  "./assets/imageG.png",
  "./assets/imageF.jpg",
];
let originalImages = [
  "./assets/img1.jpg",
  "./assets/img2.jpg",
  "./assets/img3.jpg",
  "./assets/img4.jpg",
  "./assets/img5.jpg",
];

let alpha = ["C", "D", "E", "G", "F"];

for (let i = 0; i < imag2.length; i++) {
  img1[i].addEventListener("mouseover", sound1);
  function sound1() {
    sound_1[i].play();
    img1[i].querySelector("img").setAttribute("src", imag2[i]);

    img1[i].addEventListener("mouseout", function () {
      img1[i].querySelector("img").setAttribute("src", originalImages[i]);
    });
  }
}

for (let i = 0; i < alpha.length; i++) {
  document.addEventListener("keydown", sound_2);
  function sound_2(Event) {
    if (Event.key == alpha[i]) {
      sound_1[i].play();
      console.log(`YOU HAVE ENTER ${Event.key}`);
      img1[i].querySelector("img").setAttribute("src", imag2[i]);
    }
  }
}
//drumstick pro end here
