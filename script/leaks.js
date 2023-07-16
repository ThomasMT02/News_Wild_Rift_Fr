console.log("MT_Script 🦊");

const alerteLeaks = document.getElementById("alerte_leaks")
const buttonLeaks = document.getElementById("button_leaks")


buttonLeaks.addEventListener("click", function() {
    alerteLeaks.classList.add("animate_disparition")
    setTimeout(() => {
        alerteLeaks.classList.add("display_none")
    }, 1000)
})