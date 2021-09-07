function dropdown() {
    height = window.innerWidth;
    if (height < 1000) {
      var x = document.getElementById("mobile-nav-bar");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }
  }