// used the nav bar code from W3 Schools. Modified it to suit my needs
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav


function navExpand() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}