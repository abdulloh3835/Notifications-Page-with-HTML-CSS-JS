var clickCount = 0;
document.querySelector(".noti_flex_container > p").addEventListener("click", myFunction);

function myFunction() {
    for (var i = 0; i < document.querySelectorAll(".unread_flex_container").length; i++) {
        document.querySelectorAll(".unread_flex_container")[i].classList.toggle("js_remove_class_background");
        document.querySelectorAll(".span_for_red_circle")[i].classList.toggle("red_circle");
    }

    clickCount++;
    if (clickCount % 2 === 0) {
        this.innerHTML = "Mark all as read";    // even clickcount case
    } else {
        this.innerHTML = "All messages read";    // odd clickcount case
    }
}
