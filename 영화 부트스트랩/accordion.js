function toggleAnswer(element) {
    var answerRow = element.parentNode.nextElementSibling;

    // Toggle the 'answer-row' class to show/hide the answer row
    answerRow.classList.toggle("answer-visible");

    // Toggle the icon class to change the icon when the answer row is visible/hidden
    element.querySelector("i").classList.toggle("fa-caret-down");
    element.querySelector("i").classList.toggle("fa-caret-up");
}