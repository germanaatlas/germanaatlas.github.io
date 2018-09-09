i = localStorage.getItem("i");
x = 1
while(x <= i) {
        document.getElementById("contab").innerHTML += '<div class="row" id="vsrow"+i><div class="col-4 border border-dark" id='+"vsname"+x+'>'+localStorage.getItem("vsname"+x)+'</div><div class="col-3 border border-dark" id='+"vsentw"+x+'>'+localStorage.getItem("vsentw"+x)+'</div><div class="col-2 border border-dark" id='+"vsjahr"+x+'>'+localStorage.getItem("vsjahr"+x)+'</div><div class="col-3 border border-dark" id='+"vsgenr"+x+'>'+localStorage.getItem("vsgenr"+x)+'</div></div>';
    x++
}

if(screen.width <= 800) {
    document.getElementById("surebtn").innerHTML == '<img src="../img/trash.png">'
}else {
    $("#surebtn").html("Alles Löschen")
}

/*$(document).ready(function() {
    $.each([1,2,3,4,5,6,7,8,9,10], function(p) {
        $("#del"+p).click(function() {delrow(p)});
    });
});*/


$("#vsadd").click(function() {
    var vsname = document.getElementById("vsname").value;
    var vsentw = document.getElementById("vsentw").value;
    var vsjahr = document.getElementById("vsjahr").value;
    var vsgenr = document.getElementById("vsgenr").value;
    i++
    localStorage.setItem("i", i);
    localStorage.setItem("vsname"+i, vsname);
    localStorage.setItem("vsentw"+i, vsentw);
    localStorage.setItem("vsjahr"+i, vsjahr);
    localStorage.setItem("vsgenr"+i, vsgenr);
    document.getElementById("contab").innerHTML += '<div class="row" id="vsrow"+i><div class="col-4 border border-dark" id='+"vsname"+i+'>'+vsname+'</div><div class="col-3 border border-dark" id='+"vsentw"+i+'>'+vsentw+'</div><div class="col-2 border border-dark" id='+"vsjahr"+i+'>'+vsjahr+'</div><div class="col-3 border border-dark" id='+"vsgenr"+i+'>'+vsgenr+'</div></div>'
});

$("#deletebtn").click(function() {
    document.getElementById("contab").innerHTML = '<br><div class="row"><div class="col-4 border border-dark"><b>Name</b></div><div class="col-3 border border-dark"><b>Entwickler</b></div><div class="col-2 border border-dark"><b>Jahr</b></div><div class="col-3 border border-dark"><b>Genre</b></div></div>';
    n = 1
    while(n <= i) {
        localStorage.setItem("i", 0);
        localStorage.removeItem("vsname"+n);
        localStorage.removeItem("vsentw"+n);
        localStorage.removeItem("vsjahr"+n);
        localStorage.removeItem("vsgenr"+n);

        n++
        if( n == i+1) {
            i = 0
        }
    }
});
/*$("#del"+p).click(function() {
    localStorage.removeItem("vsname"+p);
    localStorage.removeItem("vsentw"+p);
    localStorage.removeItem("vsjahr"+p);
    localStorage.removeItem("vsgenr"+p);
    document.getElementById("contab").innerHTML -= '<div class="row" id="vsrow"+i><div class="col-3 border border-dark" id='+"vsname"+p+'>'+localStorage.getItem("vsname"+p)+'</div><div class="col-3 border border-dark" id='+"vsentw"+p+'>'+localStorage.getItem("vsentw"+p)+'</div><div class="col-1 border border-dark" id='+"vsjahr"+p+'>'+localStorage.getItem("vsjahr"+p)+'</div><div class="col-2 border border-dark" id='+"vsgenr"+p+'>'+localStorage.getItem("vsgenr"+p)+'</div><div class="col-3"><button type="button" class="btn btn-info" id='+"edit"+p+'>E</button><button type="button" class="btn btn-danger" id='+"del"+p+'>D</button></div></div>';
})

function delrow(p) {
    localStorage.removeItem("vsname"+p);
    localStorage.removeItem("vsentw"+p);
    localStorage.removeItem("vsjahr"+p);
    localStorage.removeItem("vsgenr"+p);
    document.getElementById("contab").innerHTML -= '<div class="row" id="vsrow"+i><div class="col-3 border border-dark" id='+"vsname"+p+'>'+localStorage.getItem("vsname"+p)+'</div><div class="col-3 border border-dark" id='+"vsentw"+p+'>'+localStorage.getItem("vsentw"+p)+'</div><div class="col-1 border border-dark" id='+"vsjahr"+p+'>'+localStorage.getItem("vsjahr"+p)+'</div><div class="col-2 border border-dark" id='+"vsgenr"+p+'>'+localStorage.getItem("vsgenr"+p)+'</div><div class="col-3"><button type="button" class="btn btn-info" id='+"edit"+p+'>E</button><button type="button" class="btn btn-danger" id='+"del"+p+'>D</button></div></div>';
}*/


//While-Schleife= <div class="col-3"><button type="button" class="btn btn-info" id='+"edit"+x+'>E</button><button type="button" class="btn btn-danger" id='+"del"+x+'>D</button></div>
//vsadd-Button=  <div class="col-3"><button type="button" class="btn btn-info" id='+"edit"+i+'>E</button><button type="button" class="btn btn-danger" id='+"del"+i+'>D</button></div>