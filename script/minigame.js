console.log("MT_Script 🦊");

let button = document.querySelectorAll(".button");


for (i=0; i<button.length; i++) {
    let buttons = button[i]

    button[i].addEventListener("click", function() {
        if (buttons.id === "ok") {
            buttons.classList.add("button_ok")
        }
        else {
            buttons.classList.add("button_non_ok")
        }
    })
}