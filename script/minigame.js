console.log("MT_Script 🦊");

let button = document.querySelectorAll(".button");


for (i=0; i<button.length; i++) {
    let buttons = button[i]
    // console.log(button[i].innerHTML);

    button[i].addEventListener("click", function() {
        console.log(buttons.innerHTML);
        if (buttons.id === "ok") {
            buttons.classList.add("button_ok")
        }
        else {
            buttons.classList.add("button_non_ok")
        }
    })
}