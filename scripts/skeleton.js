
function loadSkeleton() {
  console.log($("#navbarPlaceholder").load("./template/navbar.html"));
  console.log($("#footerPlaceholder").load("./template/footer.html"));
}
loadSkeleton(); //invoke the function