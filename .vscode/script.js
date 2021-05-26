const dino = document.getElementById("dino");
const cactu = document.getElementById("cactu");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
  if (dino.classList != "jump") {
      dino.classList.add("jump")
  }
  setTimeout(function() {
      dino.classList.remove("jump")
 }, 300)
}

let isAlive = setInterval ( function()  {
let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")); 
let cactuLeft = parseInt(window.getComputedStyle(cactu).getPropertyValue("left"));

if (cactuLeft < 50 && cactuLeft > 0 && dinoTop >= 140) {
    alert("Game Over!")
}
})
