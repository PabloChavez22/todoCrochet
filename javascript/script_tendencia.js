
var mql = window.matchMedia("(max-width: 850px)");


  mql.addListener(function(mql){
    if (mql.matches) {
      // media query test returning true
      var div = document.querySelector(".algosospechoso");
      div.classList.remove("slider-item-show4");
    }else{
        // media query test returning true
        var div = document.querySelector(".algosospechoso");
        div.classList.remove("slider-item-show2");
      }
  });