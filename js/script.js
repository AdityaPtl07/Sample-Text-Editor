const textbox = document.getElementById('txtbox');
let oldvals = [];
let c = 0;

function getInput(){
    const txt = textbox.value;
    return txt;
}

function setOutput(output){
    if (c==0)
        oldvals.push(textbox.value);
    oldvals.push(output)
    textbox.innerText = output;
    textbox.value = output;
    c+=1;
}

//Buttons
function undo(){
    if (c!=0){
        if (textbox.value === oldvals[c]){
            textbox.innerText = oldvals[c-1];
            textbox.value = oldvals[c-1];
            c-=1;
        }
        else{
            textbox.innerText = oldvals[c];
            textbox.value = oldvals[c];
        }
    }
}

function redo(){
    if (c<oldvals.length-1){
        textbox.innerText = oldvals[c+1];
        textbox.value = oldvals[c+1];
        c+=1;
    }
}

function justifyCenter() {
    var editor = document.getElementById("mainEditor");
    editor.style.textAlign = "center";
}

function toUpper(){
    setOutput(getInput().toUpperCase());
}

function toLower(){
    setOutput(getInput().toLowerCase());
}

