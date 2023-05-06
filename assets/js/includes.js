function getFile(file, elmnt){
  xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "";}
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
}


let reunitedFundProgress = document.getElementById("reunitedFundProgress")
getFile("https://asso1.reunited.fund/meveo/rest/listPayments/gypaete",reunitedFundProgress);