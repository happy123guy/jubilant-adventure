function send(){
    number1 = document.getElementById("Number1").value;
    number2 = document.getElementById("Number2").value;
    corret_awnser = parseInt(number1) * parseInt(number2);

    question = "<h4>"+number1+"X"+number2+"=</h4>";
    input = "<br>Answer : <input type='text' id='check_box'></input>";
    btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input + btn;
    
    console.log(row);
    document.getElementById("output").innerHTML = row;
}

function quit(){
}