const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    document.body.style.transition = "opacity 1s ease";

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "https://withjoy.com/aoi-and-nao";

    },1000);

});
