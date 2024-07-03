document.addEventListener("DOMContentLoaded", function() {
    // Check if the current page is 'redocly.md'
    var pagePath = window.location.pathname;
    if (pagePath.endsWith("redocly/")) {
      // Add the 'hide-sidebar' class to the body
      document.body.classList.add("hide-sidebar");
    }
  });
  