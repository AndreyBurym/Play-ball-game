document.getElementById("agree-checkbox").addEventListener("change", function () {
    document.getElementById("return-home").disabled = !this.checked;
});

document.getElementById("return-home").addEventListener("click", function () {
    window.location.href = "index.html";
});
