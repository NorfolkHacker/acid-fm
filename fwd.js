(function () {
  var p = location.pathname.replace(/^\/acid-fm\/?/, "");
  location.replace("https://norfolkhacker.github.io/braindancer/" + p + location.search + location.hash);
})();
