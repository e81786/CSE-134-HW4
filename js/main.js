export function main() {
  jumps();
  accordian();
}

function jumps() {
  console.log("jumpers be jumpin");

  const abt = document.getElementById("abt");
  const wrk = document.getElementById("wrk");

  abt.addEventListener("click", () => {
    scrollTo("About");
  });

  wrk.addEventListener("click", () => {
    window.scrollTo({
      top: 1900,
      behvaior: "smooth",
    });
  });
}

function scrollTo(hash) {
  location.hash = "#" + hash;
}

function accordian() {
  console.log("according?");
  const accordian = document.getElementsByClassName("accordion");
  let i;
  for (i = 0; i < accordian.length; i++) {
    accordian[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
