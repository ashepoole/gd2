$(document).ready(function () {
    var listOfClasses = ["color-scheme-1", "color-scheme-2", "color-scheme-3", "color-scheme-4", "color-scheme-5", "color-scheme-6"];
    var randomNum = Math.floor(Math.random() * listOfClasses.length);
    $("html").addClass(listOfClasses[randomNum]);
    $("div").addClass(listOfClasses[randomNum]);
    $("a").addClass(listOfClasses[randomNum]);
});
