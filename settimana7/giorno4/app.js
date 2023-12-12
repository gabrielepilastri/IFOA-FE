const key = "ybW4s1OC0SozdCX6Ko1eDkOE669CrHFkrXuzAHsLdOaOr2XmgrPoobMR";

const myUrl = "https://api.pexels.com/v1/search?query=cats";

const headers = {"Authorization": key, 
    "Content-Type": "application/json",
    "Accept": "application/json"};

const myRow = document.getElementById("row");



function generate() {
    fetch(myUrl, {
        headers: headers,
    })
    .then(response => response.json())
    .then(data => {
            create(data.photos)
        }
        )
}



function create(photos) {
    photos.forEach(photo => {
        console.log(photo)
        let myCol = ` <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" width="100%" height="225" 
            preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </img>
          <div class="card-body">
            <h5 class="card-title">${photo.alt}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Hide
                </button>
              </div>
              <small class="text-muted">${photo.id}</small>
            </div>
          </div>
        </div>
      </div>`;
      myRow.innerHTML = myCol


        
})}