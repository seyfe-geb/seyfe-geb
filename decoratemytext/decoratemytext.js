function alertMsg(){
    /*alert("Hello, world!");
    document.getElementById("txt").style.fontSize = "24pt";*/
    var element = document.getElementById("txt");
    var style = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var fontSize = parseInt(style);
    element.style.fontSize = (fontSize + 2) + "pt";
}

function chkChanged(){
    if(document.getElementById("chk").checked){
        document.getElementById("txt").style.fontWeight = "bold";
        document.getElementById("txt").style.color = "green";
        document.getElementById("txt").style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('happy.jpg')";
    }else{
        document.getElementById("txt").style.fontWeight = "normal";
        document.getElementById("txt").style.color = "black";
        document.getElementById("txt").style.textDecoration = "none";
        document.body.style.backgroundImage = "";
    }
}

function interval() {
    var id = setInterval(alertMsg, 500);
  }

function pigL(){
    let text = document.getElementById("txt").value;
    text = text.trim();
    const txtArr = text.split(" ");
    var result = "";
    for(var i = 0; i < txtArr.length; i++){
        result += changeToPigLatin(txtArr[i]) + " ";
    }
    result = result.trim();
    document.getElementById("txt").value = result;
}

function changeToPigLatin(input){
    let ch = input.charAt(0);
    let result = "";
    if(checkIfVowel(ch)){
        result = input + "ay";
    }else{
        var consonant = 0;
        for(var i = 0; i < input.length; i++){
            ch = input.charAt(i);
            if(checkIfVowel(ch)){
                break;
            }else{
                consonant++;
            }
        }
        result = input.substring(consonant) + input.substring(0, consonant) + "ay";
    }
    return result;
}

function checkIfVowel(ch){
    if( (ch == 'a') || (ch == 'e') || (ch == 'i') || (ch == 'o') || (ch == 'u')){
        return true;
    }else{
        return false;
    }
}

function malk(){
    let text = document.getElementById("txt").value;
    text = text.trim();
    const txtArr = text.split(" ");
    var result = "";
    for(var i = 0; i < txtArr.length; i++){
        if(txtArr[i].length >= 5){
            result += "Malkovitch ";
        }else{
            result += txtArr[i] + " ";
        }
    }
    result = result.trim();
    document.getElementById("txt").value = result;
}
