function copyCaToClipboard() {
   var text = document.getElementById("ca-value").value;
   navigator.clipboard.writeText(text).then(function () {
      // alert("GcKt3k3Q8dJJD7snTDJ5NezesrA8TKd4uFz2CADBpump copied");
   }).catch(function (error) {
      alert("Échec de la copie : " + error);
   });
}