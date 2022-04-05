
db.collection('restaurants-dummy').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log(doc.data().review1);
        renderReviews(doc)
    })
}).catch((err) => {

});



function renderReviews(doc) {
    const review1 = document.querySelector(".user-review-1-1");
    const review2 = document.querySelector(".user-review-1-2");
    review1.textContent = doc.data().review1;
    review2.textContent = doc.data().review2;

}