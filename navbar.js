Function OpenNav() {
    document.getElementById("mainSideNav").style.Width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
Function CloseNav() {
    document.getElementById("mainSideNav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
}