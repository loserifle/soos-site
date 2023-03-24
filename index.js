let soos = document.getElementById("soosText").innerHTML.length;
let soosNormal = new Audio('speech.mp3');
let soosSpecial = new Audio('speech2.mp3');
document.getElementById("soosButton").onclick = function() {
    $("#soosText").addClass("rotateme");
    soosClick++;
    document.getElementById("volte").innerHTML = soosClick;
    if(soosClick % 10 == 0) {
        soosSpecial.play();
        $("div").addClass("rotateme");
    } else {
        soosNormal.play();
    }
    setTimeout(() => {
        $("#soosText").removeClass("rotateme");
        $("div").removeClass("rotateme");
    }, 1000);
}
let soosClick = 0;
document.getElementById("darkMode").onclick = function() {
    $("body").css("background-color", "black");
    $("body").css("color", "white");
}

document.getElementById("lightMode").onclick = function() {
    $("body").css("background-color", "white");
    $("body").css("color", "black");
}

document.getElementById("rainbow").onclick = function() {
    const colors = "1234567890ABCDEF";
    let leColor = "#";
    for(let i = 0; i < 6; i++) {
        leColor += colors[Math.floor(Math.random() * 15)];
    } // non ad alta voce
    $("body").css("background-color", leColor);
    console.log(leColor);
}

document.getElementById("epilepsy").onclick = async function() {
    $("#soosText").addClass("rotateme");
    for(let i = 0; i < 60; i++) { // il mio nome è walter hartwell white
        await setInterval(() => { // e cucino il pollo insieme al mio amico
            const colors = "1234567890ABCDEF"; // gus fring
            let leColor = "#";
            for(let i = 0; i < 6; i++) {
                leColor += colors[Math.floor(Math.random() * 15)];
            } // non ad alta voce
            $("body").css("background-color", leColor);
            document.getElementById("volte").innerHTML = Math.floor(Math.random() * 6942069);
            soosSpecial.play();        
        }, 1);
    }
    $("#soosText").removeClass("rotateme");

}


document.getElementById("secretText").onchange = function() {
    switch(document.getElementById("secretText").value) {
        case "694205005":
            let countSoos = soos;
            let temp = 'S';
            for(let i = 0; i < countSoos; i++) {
                temp += 'O';
            }
            temp += 'S';
            soos = temp.length;
            document.getElementById("soosText").innerHTML = temp;
            break;
        case "16876":
            $("#tennas").css("visibility", "visible");
            break;
    }
}