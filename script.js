document.getElementsByClassName("btn")[0].addEventListener("click", function () {
    let from = document.getElementsByClassName("from")[0].value;
    let to = document.getElementsByClassName("to")[0].value;
    let number = document.getElementsByClassName("form-control")[0].value;
    let x = number;
    number = parseInt(number);

    if(from == "Please Select" || to == "Please Select")
    {
        alert("Empty selection!")
    }
    else if(from == to)
        document.getElementsByClassName("card-text")[0].innerText = number;
    else if(from == 1 && to == 2){
        binaryToOctal(number);
    }
    else if(from == 1 && to == 3){
        binaryToHexa(number);
    }
    else if(from == 1 && to == 4){
        binaryToDecimal(number);
    }
    else if(from == 2 && to == 1){
        octalToBinary(number);
    }
    else if(from == 2 && to == 3){
        octalToHexa(number);
    }
    else if(from == 2 && to == 4){
        octalToDecimal(number);
    }
    else if(from == 3 && to == 1){
        hexaToBinary(x);
    }
    else if(from == 3 && to == 2){
        hexaToOctal(x);
    }
    else if(from == 3 && to == 4){
        hexaToDecimal(x);
    }
})


function binaryToOctal(number) {
    let ans = parseInt(number, 2).toString(8);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}

function binaryToHexa(number){
    let ans = parseInt(number, 2).toString(16);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}


function binaryToDecimal(number){
    let ans = parseInt(number, 2).toString(10);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}


function octalToBinary(number){
    let ans = parseInt(number, 8).toString(2);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}


function octalToHexa(number){
    let ans = parseInt(number, 8).toString(16);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}


function octalToDecimal(number){
    let ans = parseInt(number, 8).toString(10);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}


function hexaToBinary(number){
    let ans = parseInt(number, 16).toString(10);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}


function hexaToOctal(number){
    let ans = parseInt(number, 16).toString(8);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}


function hexaToDecimal(number){
    let ans = parseInt(number, 16).toString(10);
    document.getElementsByClassName("card-text")[0].innerText = ans;
}
