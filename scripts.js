
function copyToClipboard() {
   var text = document.getElementById("text-to-copy").innerText;
   navigator.clipboard.writeText(text).then(function () {
      // alert("Texte copié dans le presse-papiers!");
   }).catch(function (error) {
      alert("Échec de la copie : " + error);
   });
}