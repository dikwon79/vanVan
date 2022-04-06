function getdata() {
    db.collection("foodtrucks")
        .get()
        .then((snap) => {
            snap.forEach((doc) => {
                var restaurant = doc.data().name;
                var image = doc.data().image;
                var ratings = doc.data().rating;
                var city = doc.data().city;
                var viewed = doc.data().viewed;
                var reviews = doc.data().reviews;

                const card = document.createElement('div')
                card.classList.add("foodtruck-card");
                const img = document.createElement("img")
                img.src = image;
                img.classList.add('card__main-food-image')
                const card__info = document.createElement("div")
                card__info.classList.add('card__information')
                const card__info__text = document.createElement('div')
                card__info__text.classList.add('card__information__text')
                const card__information__text__title = document.createElement('div')
                card__information__text__title.classList.add('card__information__text__title')
                card__information__text__title.textContent = restaurant;
                const card__information__text__city = document.createElement('div')
                card__information__text__city.classList.add('card__information__text__city');
                card__information__text__city.textContent = city;
                const card__information__text__user = document.createElement('div')
                card__information__text__user.classList.add('card__information__text__user-interested')
                const pencilIcon = document.createElement('div')
                pencilIcon.classList.add('pencil-icon icons')
                const pencil = document.createElement('span')
                pencil.classList.add('material-icons-outlined')
                pencil.textContent = 'visibility'
                const views = document.createElement('span')
                views.textContent = viewed;
                const starIcon = document.createElement('div')
                starIcon.classList.add('star-icon icons')
                const star = document.createElement('span')
                star.classList.add('material-icons-outlined')
                star.textContent = 'star'

            });

        });
}
getdata();

function search() {
    let searchBar = document.getElementById('searchbar').value;
    db.collection("mapmenu")
        .orderBy('Fname')
        .startAt(searchBar)
        .endAt(searchBar + '\uf8ff')
        .get()
        .then((snap) => {
            var i = 1;
            let html = "";
            snap.forEach((doc) => {
                var foodName = doc.data().Fname;
                var image = doc.data().image_map;
                var ratings = doc.data().Ratings;

                if (i % 2 != 0) {
                    html += "<div class='row py-1'><div class='col-6'><div class='card'>";
                    html += "<div class='embed-responsive'><img class='card-img-top' src=" + image + " alt=''>";
                    html += "</div><div class='card-body py-0'><h5 class=card-title>" + foodName + "</h5>";
                    html += "<p class='card-text'>" + ratings + "</p></div></div></div>"
                } else {

                    html += "<div class='col-6'><div class='card'><div class='embed-responsive'>";
                    html += "<img class='card-img-top' src=" + image + " alt=''></div>";
                    html += "<div class='card-body py-0'><h5 class=card-title>" + foodName + "</h5>";
                    html += "<p class='card-text'>" + ratings + "</p></div></div></div></div>"

                }
                i++;
            });
            console.log(html);
            document.getElementById("carddata").innerHTML = html;
        });
}