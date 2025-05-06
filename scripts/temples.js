

    const hamButton = document.querySelector("#menu-hamburger");
    const ul = document.querySelector("ul");

    hamButton.addEventListener("click", () => {
        ul.classList.toggle("open-ul");
        hamButton.classList.toggle("open");
    });

