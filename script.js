function imgSlider(anything, color) {
    document.querySelector('.pepsi').src = anything;
    changeBgColor(color)
}
function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}