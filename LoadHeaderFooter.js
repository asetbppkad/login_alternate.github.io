document.addEventListener("DOMContentLoaded", function () {
  loadContent("header.html", "header");
  loadContent("footer.html", "footer");
  var isi = document.getElementById("title").innerHTML;
  var dashboard = document.getElementById("dashboard").innerHTML;
  var stock = document.getElementById("stock").innerHTML;

  document.getElementById("result").innerHTML =
    isi + " dan " + dashboard + " dan " + stock;
});

function loadContent(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading content:", error));
}
