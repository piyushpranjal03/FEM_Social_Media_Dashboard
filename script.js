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
currentTheme = currentTheme ? body.setAttribute("data-mode", currentTheme) : body.setAttribute("data-mode", "light");

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

//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Subs & Followers Card Template Part
{
  /* <div class="card-wrapper facebook">
<div class="card-item">
 <div class="title">
  <img src="images/icon-facebook.svg" alt="Facebook Icon"><span>@nathanf</span>
 </div>
 <p>1987</p>
 <p>FOLLOWERS</p>
 <div>
  <img src="images/icon-up.svg" alt="Up Icon"><span class="count-up">12 Today</span>
 </div>
</div>
</div> */
}

// Overview Cards Template Part
{
  /* <div class="card-item">
<div class="overview">
 <span>Page Views</span>
 <img src="images/icon-facebook.svg" alt="Facebook Icon">
</div>
<div class="overview other-count">
 <span>87</span>
 <div>
  <img src="images/icon-up.svg" alt="">
  <span class="count-up">3%</span>
 </div>
</div>
</div> */
}
