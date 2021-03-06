const body = document.body;
const toggleBtn = document.querySelector("input[type='checkbox']");

// Checking if any key "theme" is present in localStorage
// "theme" key will be there if user ever toggle b/w modes
// If "theme" key is present, currentTheme will be init with "dark" or "light"
// If "theme" key isn't present, currentTheme will be init with null
let currentTheme = localStorage.getItem("theme");

// If currentTheme is dark we will turn the checkbox checked
// If currentTheme is light or null we will keep the checkbox unchecked
currentTheme == "dark" ? (toggleBtn.checked = true) : (toggleBtn.checked = false);

// If currentTheme is "dark" or "light", same will be set to body
// If currentTheme is  null, "light" will be set to body
currentTheme ? body.setAttribute("data-mode", currentTheme) : body.setAttribute("data-mode", "light");

function darkMode() {
  if (toggleBtn.checked) {
    // Setting the user chosen theme in browsers local storage
    localStorage.setItem("theme", "dark");
    body.setAttribute("data-mode", localStorage.getItem("theme"));
  } else {
    localStorage.setItem("theme", "light");
    body.setAttribute("data-mode", localStorage.getItem("theme"));
  }
}

// Keeping an eye on the toggleBtn state, whenever changed function will be triggered
toggleBtn.addEventListener("change", darkMode);

// Cards will be generated by JS in next update
