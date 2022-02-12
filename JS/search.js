function mySearch() {
    var input, filter, ul, li, a, i, p, txtValue;
    input = document.getElementById("search-page");
    filter = input.value.toUpperCase();
    ul = document.getElementById("searc-pa");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        document.getElementById("error-not-found").style.display = "none";
            li[i].style.display = "inline";
        } else {
            li[i].style.display = "none";
            document.getElementById("error-not-found").style.display = "inline";
        }
    }
}
if(document.getElementById("search-page").value === "") {
				document.getElementById("searc-pa").style.display = "none";
				document.getElementById("title-pages").innerText =  "Searching | Ernesto Yoofi " ;
}else {
				document.getElementById("searc-pa").style.display = "inline";
}
