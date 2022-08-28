let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let progress = document.querySelector(".progress");

// let full = 100;
let percent = 100 / inputs.length;
console.log(percent);

if (document.querySelector('input[type="text"]')) {
  document.querySelectorAll('input[type="text"]').forEach((elem) => {
    elem.addEventListener("click", function (e) {
      if (e.target.value) {
        progress.style.width = `${percent}%`;
      }
    });
  });
}

if (document.querySelector('input[type="radio"]')) {
  let btns = document.querySelectorAll('input[type="radio"]');
  let set = [...new Set(btns)];
  document.querySelectorAll('input[type="radio"]').forEach((elem) => {
    elem.addEventListener("click", function (e) {
      if (e.target.value) {
        progress.style.width += `${percent}%`;
      }
    });
  });
}
