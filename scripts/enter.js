let searchQuery = null;

document.querySelector("#main-search").addEventListener("keyup", function (e) {
    if (e.keycode === 13 || e.key === "Enter") {
        e.preventDefault();
        searchQuery = e.target.value;
        if (!searchQuery) {
            console.log("nothing");
        }
    }
})