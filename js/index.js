function switchTab(tabId, buttonId) {
  // Reset all tabs
  tabs = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  buttons = document.getElementsByClassName("active");
  for (i = 0; i < buttons.length; i++) {
      buttons[i].className = "tabBtns";
  }
  // Set switched tab to active
  document.getElementById(tabId).style.display = "block";
  document.getElementById(buttonId).className = "active";
}