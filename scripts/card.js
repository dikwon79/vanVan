function getdata() {

  
    db.collection("mapmenu")
      .get()
      .then((snap) => {
        var i = 1;
        let html="";
        snap.forEach((doc) => {
          var foodName = doc.data().Fname;
          var image = doc.data().image_map;
          var ratings = doc.data().Ratings;
           
          if (i % 2 != 0) {
              html +="<div class='row py-1'><div class='col-6'><div class='card'>";
              html +="<div class='embed-responsive'><img class='card-img-top' src=" + image +" alt=''>";
              html +="</div><div class='card-body py-0'><h5 class=card-title>" + foodName + "</h5>";
              html +="<p class='card-text'>" + ratings + "</p></div></div></div>"  
          } else {
              
              html +="<div class='col-6'><div class='card'><div class='embed-responsive'>";
              html +="<img class='card-img-top' src=" + image + " alt=''></div>";
              html +="<div class='card-body py-0'><h5 class=card-title>" + foodName + "</h5>";
              html +="<p class='card-text'>" + ratings + "</p></div></div></div></div>"  
       
          }
          i++;
        });
        console.log(html);
        document.getElementById("carddata").innerHTML = html;
      });
  }
  getdata();

  function search(){
    let searchBar = document.getElementById('searchbar').value;
    db.collection("mapmenu")
    .orderBy('Fname')
    .startAt(searchBar)
    .endAt(searchBar + '\uf8ff')
    .get()
    .then((snap) => {
      var i = 1;
      let html="";
      snap.forEach((doc) => {
        var foodName = doc.data().Fname;
        var image = doc.data().image_map;
        var ratings = doc.data().Ratings;
         
        if (i % 2 != 0) {
            html +="<div class='row py-1'><div class='col-6'><div class='card'>";
            html +="<div class='embed-responsive'><img class='card-img-top' src=" + image +" alt=''>";
            html +="</div><div class='card-body py-0'><h5 class=card-title>" + foodName + "</h5>";
            html +="<p class='card-text'>" + ratings + "</p></div></div></div>"  
        } else {
            
            html +="<div class='col-6'><div class='card'><div class='embed-responsive'>";
            html +="<img class='card-img-top' src=" + image + " alt=''></div>";
            html +="<div class='card-body py-0'><h5 class=card-title>" + foodName + "</h5>";
            html +="<p class='card-text'>" + ratings + "</p></div></div></div></div>"  
     
        }
        i++;
      });
     
      console.log(html);
      document.getElementById("carddata").innerHTML = html;
    });
  }