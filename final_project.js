window.onload = function() {
    var open = document.getElementById("btnpopup");
    open.addEventListener("click", openForm, false);
    
    var close = document.getElementById("btnclose");
    close.addEventListener("click", closeForm, false);
}

function openForm() {
    document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

