/*$(document).ready(function() {
    $.each([0,1], function(m) {
        $("#kl"+m).click(function() {klammer(m)});
    });
});*/

/*function klammer(m) {

    console.log("Noch nicht verfügbar.")

    switch(m) {
        case 0:
            switch(i) {
                case 1:
                n1 = "("
                if(a == 1) {
                    $("#labcalc").html(n1);
                }else if(a == 2) {
                    $("#labcalc").html(var1+o+n1);
                }
                break;
                case 2:
                    n2 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2);
                    }
                break;
                case 3:
                    n3 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3);
                    }
                break;
                case 4:
                    n4 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4);
                    }
                break;
                case 5:
                    n5 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5);
                    }
                break;
                case 6:
                    n6 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6);
                    }else if(a == 2) {
                    $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6);
                    }
                break;
                case 7:
                    n7 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7);
                    }
                break;
                case 8:
                    n8 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8);
                    }
                break;
                case 9:
                    n9 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8+n9);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8+n9);
                    }
                break;
                case 10:
                    n10 = "("
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
                    }
                break;
            }
        z++;
        i++;
        break;
        case 1:
            switch(i) {
                case 1:
                n1 = ")"
                if(a == 1) {
                    $("#labcalc").html(n1);
                }else if(a == 2) {
                    $("#labcalc").html(var1+o+n1);
                }
                break;
                case 2:
                    n2 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2);
                    }
                break;
                case 3:
                    n3 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3);
                    }
                break;
                case 4:
                    n4 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4);
                    }
                break;
                case 5:
                    n5 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5);
                    }
                break;
                case 6:
                    n6 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6);
                    }else if(a == 2) {
                    $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6);
                    }
                break;
                case 7:
                    n7 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7);
                    }
                break;
                case 8:
                    n8 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8);
                    }
                break;
                case 9:
                    n9 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8+n9);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8+n9);
                    }
                break;
                case 10:
                    n10 = ")"
                    if(a == 1) {
                        $("#labcalc").html(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
                    }else if(a == 2) {
                        $("#labcalc").html(var1+o+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10);
                    }
                break;
                
            }
        z++;
        i++;
        break;
    }
}*/