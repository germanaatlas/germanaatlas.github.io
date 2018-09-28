tc = localStorage.getItem("stototalCookies") //Gesamtzahl der Cookies wird geladen
tc = parseInt(tc); //Gesamtzahl der Cookies wird in Zahl umgewandelt
m1 = localStorage.getItem("m1am") //Mine 1 Anzahl wird geladen
m1 = parseInt(m1) // Mine 1 wird in Zahl umgewandelt
m1pr= 10+2*m1
if(m1>=1) {
    document.getElementById("mine1").innerHTML = 'Kupfer Mine<br>'+m1pr+' Cookies<br>Insgesamt '+m1+' Minen'
}else{} //Preis von Mine 1 wird berechnet und in Button eingefügt
m2 = localStorage.getItem("m2am")
m2 = parseInt(m2)
m2pr= 100+50*m2
if(m2>=1) {
    document.getElementById("mine2").innerHTML = 'Silber Mine<br>'+m2pr+' Cookies<br>Insgesamt '+m2+' Minen'
}else{}
m3 = localStorage.getItem("m3am")
m3 = parseInt(m3)
m3pr= 1000+100*m3
if(m3>=1) {
    document.getElementById("mine3").innerHTML = 'Gold Mine<br>'+m3pr+' Cookies<br>Insgesamt '+m3+' Minen'
}else{}
m4 = localStorage.getItem("m4am")
m4 = parseInt(m4)
m4pr= 1000000+50000*m4
if(m4>=1) {
    document.getElementById("mine4").innerHTML = 'Platin Mine<br>'+m4pr+' Cookies<br>Insgesamt '+m4+' Minen'
}else{}
if(tc==1) {
    $("#totalcookies").html(tc+" Cookie")
}else {
    $("#totalcookies").html(tc+" Cookies")
} //Gesamtzahl der Cookies wird in html angezeigt
cpc = localStorage.getItem("cpc") //Cookies per Click wird geladen
cpc = parseInt(cpc)

$("#entcookie").click(function() {
    tc=tc+cpc
    console.log(tc)
    localStorage.setItem("stototalCookies",tc)
    if(tc==1) {
        $("#totalcookies").html(tc+" Cookie")
    }else {
    $("#totalcookies").html(tc+" Cookies")
    }
});
$("#mine1").click(function() {
    if(tc>=m1pr) {
        tc=tc-m1pr
        localStorage.setItem("stototalCookies",tc)
        m1++
        console.log(m1)
        localStorage.setItem("m1am",m1)
        cpc=cpc+1
        localStorage.setItem("cpc",cpc)
        m1pr= 10+2*m1
        console.log(m1pr)
        document.getElementById("mine1").innerHTML = 'Kupfer Mine<br>'+m1pr+' Cookies<br>Insgesamt '+m1+' Minen'
    } else{}

});
$("#mine2").click(function() {
    if(tc>=m2pr) {
        tc=tc-m2pr
        localStorage.setItem("stototalCookies",tc)
        m2++
        console.log(m2)
        localStorage.setItem("m2am",m2)
        console.log(m2pr)
        document.getElementById("mine2").innerHTML = 'Silber Mine<br>'+m2pr+' Cookies<br>Insgesamt '+m2+' Minen'
        cpc=cpc+10
        localStorage.setItem("cpc",cpc)
        m2pr= 100+50*m2
    } else{}

});
$("#mine3").click(function() {
    if(tc>=m3pr) {
        tc=tc-m3pr
        localStorage.setItem("stototalCookies",tc)
        m3++
        console.log(m3)
        localStorage.setItem("m3am",m3)
        console.log(m3pr)
        document.getElementById("mine3").innerHTML = 'Gold Mine<br>'+m3pr+' Cookies<br>Insgesamt '+m3+' Minen'
        cpc=cpc+100
        localStorage.setItem("cpc",cpc)
        m3pr= 1000+1250*m3
    } else{}

});
$("#mine4").click(function() {
    if(tc>=m4pr) {
        tc=tc-m4pr
        localStorage.setItem("stototalCookies",tc)
        m4++
        console.log(m4)
        localStorage.setItem("m4am",m4)
        console.log(m4pr)
        document.getElementById("mine4").innerHTML = 'Platin Mine<br>'+m4pr+' Cookies<br>Insgesamt '+m4+' Minen'
        cpc=cpc+1000
        localStorage.setItem("cpc",cpc)
        m4pr= 1000000+31250*m4
    } else{}

});
$("#reset").click(function() {
    tc=0
    m1=0
    m2=0
    m3=0
    m4=0
    m1pr=10
    m2pr=100
    m3pr=1000
    m4pr=1000000
    cpc=1
    $("#totalcookies").html(tc+" Cookies")
    document.getElementById("mine1").innerHTML = 'Kupfer Mine<br>'+m1pr+' Cookies'
    document.getElementById("mine2").innerHTML = 'Silber Mine<br>'+m2pr+' Cookies'
    document.getElementById("mine3").innerHTML = 'Gold Mine<br>'+m3pr+' Cookies'
    document.getElementById("mine4").innerHTML = 'Platin Mine<br>'+m4pr+' Cookies'
    localStorage.setItem("stototalCookies",tc)
    localStorage.setItem("m1am",m1)
    localStorage.setItem("m2am",m2)
    localStorage.setItem("m3am",m3)
    localStorage.setItem("m4am",m4)
    localStorage.setItem("cpc",cpc)

})