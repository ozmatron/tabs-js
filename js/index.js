function switchTab(tabId, buttonId) {
  // Reset all tabs
  inActiveTabs = document.getElementsByClassName("tabContent");
  for (i = 0; i < inActiveTabs.length; i++) {
    inActiveTabs[i].style.display = "none";
  }
  inActiveBtns = document.getElementsByClassName("active");
  for (i = 0; i < inActiveBtns.length; i++) {
      console.log(inActiveBtns[i])
      inActiveBtns[i].className = "tabBtns";
  }
  // Set switched tab to active
  var tab = document.getElementById(tabId);
  if (tab.style.display === "none") {
    tab.style.display = "block";
  } else {
    tab.style.display = "none";
  }
  document.getElementById(buttonId).className = "active";
}