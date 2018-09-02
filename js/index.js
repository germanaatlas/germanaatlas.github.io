//Text to Binary
$("#ttb").click(function(){
    var tbinput = document.getElementById("textbin").value;
    var tboutput = document.getElementById("textsol");
    
    tboutput.value = "";
    for (var i = 0; i < tbinput.length; i++) {
        tboutput.value += tbinput[i].charCodeAt(0).toString(2) + " ";
    }
    tboutput = tboutput.value
    console.log(tbinput);
    console.log(tboutput);
    $("#textsol").html(tboutput)
});
//Binary to Text
/*$("#btt").click(function() {
    var btinput = document.getElementById("bintext").value;
    var btnb = parseInt(btinput,2).toString(10);
    var btoutput = String.fromCharCode(btnb);
    console.log(btinput);
    console.log(btnb);
    console.log(btoutput);
    document.getElementById("binsol").value = btoutput;
});*/