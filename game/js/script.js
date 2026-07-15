
let boxes = document.querySelectorAll(".box");
let drag = null;
let items = document.querySelectorAll(".sBox");

items.forEach(item => {

    item.addEventListener("dragstart", function () {
        drag = item;
        item.style.opacity = "0.5";
    });

    item.addEventListener("dragend", function () {
        drag = null;
        item.style.opacity = "1";
    });

});

boxes.forEach(box => {

    box.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    box.addEventListener("drop", function () {
        box.append(drag);
    });

});