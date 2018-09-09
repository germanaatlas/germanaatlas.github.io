i = 1
$("#losbtn").click(function() {
    var o = document.getElementById("ope").value;
    var x = parseFloat(document.getElementById("var1").value);
    var y = parseFloat(document.getElementById("var2").value);
    var z
    switch(o) {
        case "+":
            z = x + y
            $("#var3").html(z);
        break;
        case "-":
            z = x - y
            $("#var3").html(z);
        break;
        case "*":
            z = x * y
            $("#var3").html(z);
        break;
        case "^": 
            z = Math.pow(x,y)
            $("#var3").html(z);
        break;
        case "/":
            if(y != 0) {
                z = x / y
                $("#var3").html(z);
            }else if(y == 0) {
                $("#var3").html("Die zweite Zahl ist ungültig.");
            }
        break;
        case "√":
            if(y>=0) {
                o = "√";
                x2 = 1/x;
                z = Math.pow(y,x2);
                $("#var3").html(z);
            }else {
                $("#var3").html("Die zweite Zahl ist ungültig.");
            }
        break;
        case "rt":
            if(y>=0) {
                o = "√";
                x2 = 1/x;
                z = Math.pow(y,x2);
                $("#var3").html(z);
            }else {
                $("#var3").html("Die zweite Zahl ist ungültig.");
            }
        break;
    }
    document.getElementById("oldcalc").innerHTML += '<div class="row"><div class="col-12"><h3><span class="badge badge-secondary">'+x+o+y+'='+z+'</span></h3></div></div>'
});