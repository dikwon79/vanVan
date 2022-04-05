function ranking(a) {
    document.getElementById("satisfaction").value = a;
    console.log(a);
}

function writeSubmit() {
  
    let rname = document.getElementById("rname").value;
    let fname = document.getElementById("fname").value;
    let locations = document.getElementById("locations").value;
    let satisfaction = document.getElementById("satisfaction").value;
    let type_general = document.querySelector('#general').checked;
    let type_vegan = document.querySelector('#vegan').checked;
    let type_kosher = document.querySelector('#kosher').checked;
    let type_halal = document.querySelector('#halal').checked;
    let description = document.getElementById('description').value;


    firebase.auth().onAuthStateChanged(user => {
        console.log(user);
        if (user) {
            var currentUser = db.collection("Users").doc(user.uid)
            var userID = user.uid;

            //get the document for current user.
            currentUser.get()
                .then(userDoc => {

                    // var userEmail = userDoc.data().email;
                    db.collection("mapmenu").add({
                        Rname: rname,
                        Fname: fname,
                        Location: locations,
                        Ratings: satisfaction,
                        description: description,
                        General: type_general,
                        vegan: type_vegan,
                        halal: type_halal,
                        kosher: type_kosher,
                        image_map: "",

                    }).then((doc) => {
                        console.log(doc.id);
                        let picture = document.getElementById("fileUpload");
                        uploadimage(doc.id, picture.files[0]);
                        window.location.href = "card.html";
                        

                    })
                })
        } else {
            console.log("fail to login");
        }
    });

}

function uploadimage(id, filename) {
    let storageRef = firebase.storage().ref();
    let photoRef = storageRef.child("food/" + id + ".jpg");
    var metadata = {
      contentType: filename.type,
    };
  
    photoRef.put(filename, metadata).then(function () {
        photoRef
        .getDownloadURL() //get URL of the uploade file
        .then(function (url) {
          console.log(url); 
          db.collection("mapmenu").doc(id).update({
            image_map: url,
          });
         
        });
    });
  }