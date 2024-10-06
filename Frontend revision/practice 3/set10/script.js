// Show a progress bar which shows how much page has been scrolled.


// JavaScript function to update the progress bar based on scroll
window.onscroll = function() {
    updateProgressBar();
  };
  
  function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  