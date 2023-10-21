//Buttons
function undo(){
    document.execCommand('undo', false, null);
}

function redo(){
    document.execCommand('redo', false, null);
}

function orderedList(){
    document.execCommand('insertOrderedList', false, null);
}

function unorderedList(){
    document.execCommand('insertUnorderedList', false, null);
}

function bold() {
    document.execCommand('bold', false, null);
}

function italic(){
    document.execCommand('italic', false, null);
}

function underline(){
    document.execCommand('underline', false, null);
}

function strike(){
    document.execCommand('strikeThrough', false, null);
}

function justifyLeft(){
    document.execCommand('justifyLeft', false, null);
}

function justifyCenter(){
    document.execCommand('justifyCenter', false, null);
}

function justifyRight(){
    document.execCommand('justifyRight', false, null);
}

function chooseColor() {
    var mycolor = document.getElementById("myColor").value;
    document.execCommand('foreColor', false, mycolor);
}

function changeFont() {
    var myFont = document.getElementById("input-font").value;
    document.execCommand('fontName', false, myFont);
}

function changeSize() {
    var mysize = document.getElementById("fontSize").value;
    document.execCommand('fontSize', false, mysize);
}

