/*Функция, которая показывает и скрывает элемент по клику на кнопку*/
function showHide(element_id) {
    if (document.getElementById(element_id)) {
        var obj = document.getElementById(element_id);
        var burger = document.getElementById("icon-burger");
        var cross = document.getElementById("icon-cross");

        if (obj.style.display != "block") {
            obj.style.display = "block";
            burger.style.display = "none";
            cross.style.display = "block";
        } else {
            obj.style.display = "none";
            burger.style.display = "block";
            cross.style.display = "none";
        }
    }
}
