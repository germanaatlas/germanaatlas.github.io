i = localStorage.getItem("i");
x = 1
while(x <= i) {
    document.getElementById("table1").innerHTML += "<tr> <td>"+localStorage.getItem("vsname"+x)+"</td> <td>"+localStorage.getItem("vsentw"+x)+"</td> <td>"+localStorage.getItem("vsjahr"+x)+"</td> <td>"+localStorage.getItem("vsgenr"+x)+"</td> </tr>"
    x++
}
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
    document.getElementById("table1").innerHTML += "<tr>" + "<td>"+ vsname +"</td>" + "<td>"+ vsentw +"</td>" + "<td>"+ vsjahr +"</td>" + "<td>"+ vsgenr +"</td>" + "</tr>";
});
$("#deletebtn").click(function() {
    document.getElementById("table1").innerHTML = "<tr> <th style="+"width:30%;"+">Name</th> <th style="+"width:30%;"+">Entwickler</th> <th style="+"width:10%;"+">Jahr</th> <th style="+"width:30%;"+">Genre</th></tr>";
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