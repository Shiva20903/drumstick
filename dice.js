

 // DICE PROJECT CODE START
 let random1, random2;

 let btn = document.getElementById("dicebutton");

 btn.addEventListener("click", () => {
   let player1 = document.getElementById("player1");
   let player2 = document.getElementById("player2");
   let audio = document.getElementsByClassName("audio");

   let rotationtime = setInterval(() => {
     audio[0].play();
     random1 = Math.floor(Math.random() * 6) + 1;
     random2 = Math.floor(Math.random() * 6) + 1;
     player1.src = `./assets/dice${random1}.jpg`;
     player2.src = `./assets/dice${random2}.jpg`;
   }, 1);

   let winner = document.getElementById("result");

   setTimeout(() => {
     clearInterval(rotationtime);
     if (random1 > random2) {
       let data = (winner.innerText =
         " 🎉🎉  Player 1 won the game 🎉 🎉 ");

       console.log(data);
     } else if (random1 < random2) {
       let data = (winner.innerText =
         " 🎉 🎉  Player 2 won the game 🎉 🎉  ");
       console.log(data);
     } else {
       winner.innerText = "Draw the game🎉 🎉 🎉  ";
     }
   }, 100);
 });
// DICE PROJECT CODE end
