i = 1 //Ziffer No
c = 1 //Anzahl der Operatoren
k = 1 //Anzeige der alten Rechnung
z = 1 //Anzahl der Kommas
a = 1 //Anzahl der Operatoren (?...)
l = 0


if(screen.width <= 800) {
    $("#reset").html("C");
}else {
    $("#reset").html("Reset");
}

$(document).ready(function() {
    $.each([0,1,2,3,4,5,6,7,8,9], function(n) {
        $("#n"+n).click(function() {num(n)});
    });
});
$(document).ready(function() {
    $.each([0,1,2,3], function(p) {
        $("#ope"+p).click(function() {operat(p)});
    });
});

function num(n) {
    if(a == 1 && i <= 10) {
        switch(i) {
            case 1:
                if(l == 0) {
                    n1 = 0;
                    n2 = 0;
                    n3 = 0;
                    n4 = 0;
                    n5 = 0;
                    n6 = 0;
                    n7 = 0;
                    n8 = 0;
                    n9 = 0;
                    n10 = 0;
                    n1 = n.toString();
                    $("#labcalc").html(n1);
                } else {
                    n2 = 0;
                    n3 = 0;
                    n4 = 0;
                    n5 = 0;
                    n6 = 0;
                    n7 = 0;
                    n8 = 0;
                    n9 = 0;
                    n10 = 0;
                    $("#labcalc").html(n1);
                }
            break;
            case 2:
                n2 = n.toString();
                $("#labcalc").html(n1+n2);
            break;
            case 3:
                n3 = n.toString();
                $("#labcalc").html(n1+n2+n3);
            break;
            case 4:
                n4 = n.toString();
                $("#labcalc").html(n1+n2+n3+n4);
            break;
            case 5:
                n5 = n.toString();
                $("#labcalc").html(n1+n2+n3+n4+n5);
            break;
            case 6:
                n6 = n.toString();
                $("#labcalc").html(n1+n2+n3+n4+n5+n6);
            break;
            case 7:
                n7 = n.toString();
                $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7);
            break;
            case 8:
                n8 = n.toString();
                $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8);
            break;
            case 9:
                n9 = n.toString();
                $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8+n9);
            break;
            case 10:
                n10 = n.toString();
                $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
            break;
        } 
    }else if(a == 2 && i <= 10) {
        switch(i) {
            case 1:
            if(l == 0) {
                n1 = 0;
                n2 = 0;
                n3 = 0;
                n4 = 0;
                n5 = 0;
                n6 = 0;
                n7 = 0;
                n8 = 0;
                n9 = 0;
                n10 = 0;
                n1 = n.toString();
                $("#labcalc").html(var1 + o + n1);
            } else {
                n2 = 0;
                n3 = 0;
                n4 = 0;
                n5 = 0;
                n6 = 0;
                n7 = 0;
                n8 = 0;
                n9 = 0;
                n10 = 0;
                $("#labcalc").html(var1 + o + n1);
            }
            break;
            case 2:
                n2 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2);
            break;
            case 3:
                n3 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2+n3);
            break;
            case 4:
                n4 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2+n3+n4);
            break;
            case 5:
                n5 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2+n3+n4+n5);
            break;
            case 6:
                n6 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2+n3+n4+n5+n6);
            break;
            case 7:
                n7 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2+n3+n4+n5+n6+n7);
            break;
            case 8:
                n8 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2+n3+n4+n5+n6+n7+n8);
            break;
            case 9:
                n9 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2+n3+n4+n5+n6+n7+n8+n9);
            break;
            case 10:
                n10 = n.toString();
                $("#labcalc").html(var1 + o + n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
            break;
        }
    }

    $("#komma").click(function() {
        if(z == 1) {
            switch(i) {
                case 1:
                    $("#labcalc").html("Vorher eine Ziffer eingeben.");
                break;
                case 2:
                    n2 = "."
                    if(a == 1) {
                    $("#labcalc").html(n1+n2);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2);
                    }
                break;
                case 3:
                    n3 = "."
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3);
                    }
                break;
                case 4:
                    n4 = n.toString();
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4);
                    }
                break;
                case 5:
                    n5 = "."
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5);
                    }
                break;
                case 6:
                    n6 = "."
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6);
                    }
                break;
                case 7:
                    n7 = "."
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7);
                    }
                break;
                case 8:
                    n8 = "."
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8);
                    }
                break;
                case 9:
                    n9 = "."
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8+n9);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8+n9);
                    }
                break;
                case 10:
                    n10 = "."
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
                    }
                break;
            }
            z++;
            i++;
        }
    });
    i++
}
$("#neg").click(function() {
    if(i == 1 && l == 0) {
        n1 = "-";
        i++;
        l++;
        if(a == 1) {
        $("#labcalc").html(n1);
        }else if(a == 2) {
            $("#labcalc").html(var1 + o + n1);
        }
    }
});
function operat(p) {
    if(c == 1) {
        switch(i) {
            case 1:
                $("#labcalc").html("Vorher eine Zahl eingeben.");
            break;
            case 2:
                var1 = parseFloat(n1);
            break;
            case 3:
                var1 = parseFloat(n1+n2);
            break;
            case 4:
                var1 = parseFloat(n1+n2+n3);
            break;
            case 5:
                var1 = parseFloat(n1+n2+n3+n4);
            break;
            case 6:
                var1 = parseFloat(n1+n2+n3+n4+n5);
            break;
            case 7:
                var1 = parseFloat(n1+n2+n3+n4+n5+n6);
            break;
            case 8:
                var1 = parseFloat(n1+n2+n3+n4+n5+n6+n7);
            break;
            case 9:
                var1 = parseFloat(n1+n2+n3+n4+n5+n6+n7+n8);
            break;
            case 10:
                var1 = parseFloat(n1+n2+n3+n4+n5+n6+n7+n8+n9);
            break;
            case 11:
                var1 = parseFloat(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
            break;
        }
        switch(p) {
            case 0:
                o = "+";
            break;

            case 1:
                o = "-"
            break;

            case 2:
                o = "*"
            break;

            case 3:
                o = "/"
            break;
        }
        $("#labcalc").html(var1 + o);
    }
    console.log(var1);
    c++;
    i = 1;
    z = 1;
    a++
    l = 0
}

$("#rt").click(function() {
    if(c == 1) {
        switch(i) {
            case 1:
                $("#labcalc").html("Vorher eine Zahl eingeben.");
            break;
            case 2:
                var1 = n1;
            break;
            case 3:
                var1 = n1+n2;
            break;
            case 4:
                var1 = n1+n2+n3;
            break;
            case 5:
                var1 = n1+n2+n3+n4;
            break;
            case 6:
                var1 = n1+n2+n3+n4+n5;
            break;
            case 7:
                var1 = n1+n2+n3+n4+n5+n6;
            break;
            case 8:
                var1 = n1+n2+n3+n4+n5+n6+n7;
            break;
            case 9:
                var1 = n1+n2+n3+n4+n5+n6+n7+n8;
            break;
            case 10:
                var1 = n1+n2+n3+n4+n5+n6+n7+n8+n9;
            break;
            case 11:
                var1 = n1+n2+n3+n4+n5+n6+n7+n8+n9+n10;
            break;
        }
    }
    if(var1 >= 0) {
        vrt = Math.sqrt(var1);
        console.log(vrt);
        $("#labcalc").html("√"+var1+"="+vrt);
        document.getElementById("oldcalc").innerHTML += '<div class="row"><div class="col-12"><h3><span class="badge badge-secondary">'+'√'+var1+'='+vrt+'</span></h3></div></div>'
        i = 1
        c = 1
        l = 0
    }else {
        $("#labcalc").html("Die Zahl ist ungültig.");
    }

});

$("#pt").click(function() {
    if(c == 1) {
        switch(i) {
            case 1:
                $("#labcalc").html("Vorher eine Zahl eingeben.");
            break;
            case 2:
                var1 = n1;
            break;
            case 3:
                var1 = n1+n2;
            break;
            case 4:
                var1 = n1+n2+n3;
            break;
            case 5:
                var1 = n1+n2+n3+n4;
            break;
            case 6:
                var1 = n1+n2+n3+n4+n5;
            break;
            case 7:
                var1 = n1+n2+n3+n4+n5+n6;
            break;
            case 8:
                var1 = n1+n2+n3+n4+n5+n6+n7;
            break;
            case 9:
                var1 = n1+n2+n3+n4+n5+n6+n7+n8;
            break;
            case 10:
                var1 = n1+n2+n3+n4+n5+n6+n7+n8+n9;
            break;
            case 11:
                var1 = n1+n2+n3+n4+n5+n6+n7+n8+n9+n10;
            break;
        }
    }
    vpt = Math.pow(var1,2);
    console.log(vpt);
    $("#labcalc").html(var1+"²"+"="+vpt);

    document.getElementById("oldcalc").innerHTML += '<div class="row"><div class="col-12"><h3><span class="badge badge-secondary">'+var1+'²'+'='+vpt+'</span></h3></div></div>'
    i = 1
    c = 1

})

$("#pi").click(function() {
    if(a==1) {
        var1 = 3.14159265;
        $("#labcalc").html(var1);
    }else if(a==2) {
        var2 = 3.14159265;
        $("#labcalc").html(var1 + o + var2);
    }

})

$("#reset").click(function() {
    los = 0;
    var1 = 0;
    var2 = 0;
    i = 1;
    c = 1;
    o = 0;
    z = 1;
    k = 1;
    $("#labcalc").html("");
    $("#newequ").html("");
    console.log("Alles zurückgesetzt.");
});

$("#equ").click(function() {
    if(c == 2) {
        switch(i) {
            case 1:
                $("#labcalc").html("Vorher eine Zahl eingeben.");
            break;
            case 2:
                var2 = parseFloat(n1);
            break;
            case 3:
                var2 = parseFloat(n1+n2);
            break;
            case 4:
                var2 = parseFloat(n1+n2+n3);
            break;
            case 5:
                var2 = parseFloat(n1+n2+n3+n4);
            break;
            case 6:
                var2 = parseFloat(n1+n2+n3+n4+n5);
            break;
            case 7:
                var2 = parseFloat(n1+n2+n3+n4+n5+n6);
            break;
            case 8:
                var2 = parseFloat(n1+n2+n3+n4+n5+n6+n7);
            break;
            case 9:
                var2 = parseFloat(n1+n2+n3+n4+n5+n6+n7+n8);
            break;
            case 10:
                var2 = parseFloat(n1+n2+n3+n4+n5+m6+n7+n8+n9);
            break;
            case 11:
                var2 = parseFloat(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
            break;
        }
    }
    console.log(var2);

    switch(o) {
        case "+":
            los = var1 + var2;
        break;
        case "-":
            los = var1 - var2;
        break;
        case "*":
            los = var1 * var2;
        break;
        case "/":
            if(var2 != 0) {
                los = var1 / var2;
            }else if(var2 == 0) {
                $("#labcalc").html("Die zweite Zahl ist ungültig.")
            }
        break;
    }
    document.getElementById("oldcalc").innerHTML += '<div class="row"><div class="col-12"><h3><span class="badge badge-secondary">'+var1+o+var2+'='+los+'</span></h3></div></div>'
    i = 1
    c = 1
    l = 0
    $("#labcalc").html(var1 + o + var2 + "=" + los);
    console.log(var1 + o + var2 + "=" + los);
    a = 1;
});