document.addEventListener("DOMContentLoaded", function () {
  var isi = document.getElementById("title").innerHTML;
  var dashboard = document.getElementById("dashboard").innerHTML;
  var stock = document.getElementById("stock").innerHTML;

  if (isi === dashboard) {
    document.getElementById("dashboard").classList.add("active");
  } else if (isi === stock) {
    document.getElementById("stock").classList.add("active");
  }
});
