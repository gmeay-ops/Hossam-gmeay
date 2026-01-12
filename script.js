function openPopup(src) {
    document.getElementById("imagePopup").style.display = "flex";
    document.getElementById("expandedImg").src = src;
}

function closePopup() {
    document.getElementById("imagePopup").style.display = "none";
}
