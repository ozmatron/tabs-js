function switchTab(name) {
inActiveTabs = document.getElementsByClassName("tabContent");
  for (i = 0; i < inActiveTabs.length; i++) {
    inActiveTabs[i].style.display = "none";
  }
  var tab = document.getElementById(name);
  if (tab.style.display === "none") {
    tab.style.display = "block";
  } else {
    tab.style.display = "none";
  }
}