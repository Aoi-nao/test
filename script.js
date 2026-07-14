const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    music.play().catch(err => {
        console.log(err);
    });

    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "https://withjoy.com/aoi-and-nao";
    }, 1500);

});
