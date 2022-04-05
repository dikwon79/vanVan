let searchQuery = null;

document.querySelector("#main-search").addEventListener("keyup", function (e) {
    if (e.keycode === 13 || e.key === "Enter") {
        e.preventDefault();
        searchQuery = e.target.value;
        if (!searchQuery) {
            const myModal = new bootstrap.Modal(document.getElementById('myModal'))
            myModal.toggle();
        } else {
            window.location = "http://127.0.0.1:5502/map.html"

        }
    }
})

