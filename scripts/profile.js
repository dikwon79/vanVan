function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("Users").doc(user.uid);
            
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var email = userDoc.data().email;
                    var joindate = userDoc.data().join_date;
                    console.log(joindate);
                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        $("#username").text("username : " + userName); //jquery
                    }
                
                    
                    if (joindate != null) {
                        $("#userdate").text("joined date : " + joindate.toDate().toString().substring(0,24)); //jquery
                    }
                })
        } else {
            // No user is signed in.
            console.log ("No user is signed in");
        }
    });
}

//call the function to run it 
populateInfo();

const imgDiv = document.querySelector('.profile-pic-div');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#uploadBtn');

//if user hover on img div 
imgDiv.addEventListener('mouseenter', function () {
    uploadBtn.style.display = "block";
});

//if we hover out from img div
imgDiv.addEventListener('mouseleave', function () {
    uploadBtn.style.display = "none";
});

//when we choose a photo to upload
file.addEventListener('change', function () {
    const chosen = this.files[0];
    if (chosen) {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            img.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(chosen);
    }
});