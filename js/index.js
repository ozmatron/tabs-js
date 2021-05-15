function switchTab(name) {
  var tab = document.getElementById(name);
  if (tab.style.display === "none") {
    tab.style.display = "block";
  } else {
    tab.style.display = "none";
  }
}