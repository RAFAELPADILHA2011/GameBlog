//achando botão no documento HTML por id
const BUTTON = document.getElementById("clareDark-btn");

//verefica se o usuário ja tinha salvado o tema anteriormente

const SAVE_THEME = localStorage.getItem("theme");

if (SAVE_THEME === "clare") {
    document.body.classList.add("clare-mode");
}

//adiciona o evento de clique para alterar o modo
BUTTON.addEventListener("click", function () {
    document.body.classList.toggle("clare-mode");

    //salvando a preferencia no armazenamento local
    let theme = "dark";
    if (document.body.classList.contains("clare-mode")) {
        theme = "clare";
    }
    localStorage.setItem("theme", theme);
});

//---//