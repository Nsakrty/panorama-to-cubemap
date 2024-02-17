downloadButton = document.getElementById("download");
downloadButton.onclick = function () {
  document.querySelectorAll("#faces>a").forEach((item) => {
    item.click();
  });
};
