function changeStyle() {
    let element01 = document.querySelector(".menu_Desc");
    let element02 = document.querySelector(".line");

    let computedStyle = getComputedStyle(element01);
    let color = computedStyle.getPropertyValue("color");

    if (color === "rgb(0, 0, 0)" || color === "black" || element02.style.width === "" || element02.style.width === "0px") {
        element01.style.color = "blue"
        element02.style.width = "120px"
    }
    else {
        element01.style.color = "black"
        element02.style.width = "0px"
    }
}