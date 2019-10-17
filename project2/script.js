let triggers = document.querySelectorAll(".js-trigger");

for (i = 0; i < triggers.length; i++) {
    // Add click event to each tab to run the showContent function
    triggers[i].addEventListener("click", toggleContent);
}

function toggleContent() {
    // Runs when trigger is clicked

    let expanded = this.getAttribute("aria-expanded") === "true" || false;
    if (this.getAttribute("aria-expanded") === "true") {
        this.innerHTML = "Read Recipe";
    } else {
        this.innerHTML = "Close"
    }
    this.setAttribute("aria-expanded", !expanded); // Whatever the attribute was, toggle/switch it

    let target = this.getAttribute("aria-controls"); // Get the aria-controls value of the trigger that was clicked
    target = document.getElementById(target); // Reset this variable to actually use the ID
    let visible = target.getAttribute("data-visible") === "true" || false;
    target.setAttribute("data-visible", !visible); // Whatever the attribute was, toggle/switch it
}
