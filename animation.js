document.addEventListener("DOMContentLoaded", function() {
  const textEl = document.getElementById("huge-text");
  const text = textEl.textContent || textEl.innerText;
  const span = document.createElement("span");

  textEl.innerHTML = ""
  span.style.display = "inline-block";
  span.textContent = text;
  textEl.appendChild(span);
});
