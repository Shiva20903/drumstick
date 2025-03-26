let img1 = document.getElementsByClassName("img");
      let sound_1 = document.getElementsByClassName("sound");

      let imag2 = [
        "./subject/assets/imageC.png",
        "./subject/assets/imageD.jpg",
        "./subject/assets/imageE.jpg",
        "./subject/assets/imageG.png",
        "./subject/assets/imageF.jpg",
      ];
      let originalImages = [
        "./subject/assets/img1.jpg",
        "./subject/assets/img2.jpg",
        "./subject/assets/img3.jpg",
        "./subject/assets/img4.jpg",
        "./subject/assets/img5.jpg",
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