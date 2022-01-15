const body = document.body;
const toggleBtn = document.querySelector("input[type='checkbox']");

if (toggleBtn.checked) {
  body.classList.add("dark-theme");
} else {
  body.classList.add("light-theme");
}

function darkModeToggle() {
  if (toggleBtn.checked) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
  }
}

toggleBtn.addEventListener("change", darkModeToggle);

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
