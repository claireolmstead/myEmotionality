function keyword_search() {
  //get search value
  var search_term = document.getElementById("query").value;

  //url for search
  var url = new URL('https://www.googleapis.com/youtube/v3/search');
  // var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB9sA6hpuTZ8rOOAh5z5A3tcnSMPP2JUJA&part=snippet&maxResults=10&q=" + search_term;

  //create search parameters
  var params = {
    q: search_term,
    part: 'snippet',
    maxResults: 10,
    key: "AIzaSyB9sA6hpuTZ8rOOAh5z5A3tcnSMPP2JUJA"
  };

  //set search parameters
  url.search = new URLSearchParams(params);

  //fetch data
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      showResults(data);
    })
    .catch(err => {
      console.log("There was an error");
    })
}

function showResults(response) {
  // Work with JSON data here
  // create array of items
  var result_items = response.items;

  //clear results section
  document.getElementById("results").innerHTML = "";

  //loop through the JavaScript array and get the title and thumbnail for each video

   for (i = 0; i, result_items.length; i++) {
     //get title
     var title = result_items[i].snippet.title;
     //get thumbnail image
     var thumb_img = '<img src="' + result_items[i].snippet.thumbnails.default.url + '">';
     //add image and title to results section
     document.getElementById("results").innerHTML += "<div class='video'>" + thumb_img + "<br>" + title;
   }

  //loop through the JavaScript array and create an iframe for each video

  for (i = 0; i, result_items.length; i++) {
    //gets the id of the video
    var id = result_items[i].id.videoId;
    //defines an iframe for the video
    var video = '<p><iframe class="video-result" src="https://www.youtube.com/embed/' + id + '" frameborder="0"></p>';
    /*var addButton = '<button class="addButton" id="addContent"> + </button>';
    var deleteButton = '<button class="addButton" id="deleteContent"> - </button>';*/

    //add the video iframe to results section
    document.getElementById("results").innerHTML += video;
    /*document.getElementById("addButton").innerHTML += addButton;
    document.getElementById("deleteButton").innerHTML += deleteButton;*/
  }
}

document.getElementById("search-button").addEventListener("click", keyword_search);