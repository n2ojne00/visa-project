//sivu kun ladataan hakee siihen teeman, mikä valittuna ja tallennettuna selaimen muistiin.
window.onload = function () {
  const theme = localStorage.getItem("data-theme");
  if (theme === "dark") return document.body.setAttribute("data-theme", "dark");

  if (theme === "light")
    return document.body.setAttribute("data-theme", "light");
};

//tarkastelee mikä teema valittuna sivulle ja tallentaa sen selaimen muistiin.
const input = document.querySelector(".theme-switcher input");

input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  }
});

const ageSelect = document.getElementById("age-select");
const visaOptions = document.querySelectorAll(".col");

ageSelect.addEventListener("change", function (event) {
  const selectedValue = event.target.value;

  // Poistaa jos ei ole sopiva ikään
  visaOptions.forEach(function (option) {
    option.classList.remove("appropriate");
  });

  // Lisää css jos ikä vastaa
  visaOptions.forEach(function (option) {
    const allowedAges = option.getAttribute("data-ages").split(" ");
    if (allowedAges.includes(selectedValue)) {
      option.classList.add("appropriate");
    }
  });
});
