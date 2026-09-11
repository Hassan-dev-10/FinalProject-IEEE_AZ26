let menuLineUp = document.querySelector(".menu_container > :first-child");
let menuLineDown = document.querySelector(".menu_container > :last-child");
let menuContainer = document.querySelector(".menu_container");
let nav = document.querySelector(".nav");

menuContainer.addEventListener("click", function (e) {
    menuLineUp.classList.toggle("rotated_menu_line_up");
    menuLineDown.classList.toggle("rotated_menu_line_down");
    nav.classList.toggle("hide_nav");
    e.stopPropagation();
});

document.addEventListener("click", function (e) {
    // if (e.target.closest(".nav")) return;
    menuLineUp.classList.remove("rotated_menu_line_up");
    menuLineDown.classList.remove("rotated_menu_line_down");
    nav.classList.add("hide_nav");
});

let header = document.querySelector(".main_header");

window.addEventListener("scroll", function (e) {
    if (window.scrollY > 15) {
        header.classList.add("main_header_light");
    } else {
        header.classList.remove("main_header_light");
    }
});

let faqContainer = document.querySelector(".faq_con");

faqContainer.addEventListener("click", function (e) {
    const currentBox = e.target.closest(".faq_box");
    if (!currentBox) {
        return;
    } else if (currentBox) {
        const arrow = currentBox.querySelector(".faq_arrow");
        const answer = currentBox.querySelector(".faq_box_a");
        arrow.classList.toggle("faq_rotated_arrow");
        answer.classList.toggle("faq_box_a_hide");
        answer.classList.toggle("active_faq_box_a");
    }
});

let expandMenuIcon = document.querySelector(".expand_menu_lines_con");
let verticalMenuLine = document.querySelector(".vertical_menu_line");
let menuLineExUp = document.querySelector(".menu_line_one");
let menuLineExDown = document.querySelector(".menu_line_two");
let allContentHeader = document.querySelector(".all_Content_header");
let allContent = document.querySelector(".all_main_Content");

expandMenuIcon.addEventListener("click", function (e) {
    nav.classList.toggle("nav_toggle");
    verticalMenuLine.classList.toggle("vertical_menu_line_hide");
    menuLineExUp.classList.toggle("menu_line_one_expanded");
    menuLineExDown.classList.toggle("menu_line_two_expanded");
    allContent.classList.toggle("move_all");
    // allContentHeader.classList.toggle("move_all");
});
