let searchQuery = null;

document.querySelector("#pac-input").addEventListener("keyup", function (e) {
    if (e.keycode === 13 || e.key === "Enter") {
        e.preventDefault();
        searchQuery = e.target.value;
        if (!searchQuery) {
            const myModal = new bootstrap.Modal(document.getElementById('myModal'))
            myModal.toggle();
        } else {
            document.querySelector('.landing-page').style.display = "none"
            document.querySelector('.card-details').style.display = "grid"


        }
    }

})

