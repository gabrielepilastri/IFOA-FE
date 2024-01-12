import MoviesGalleryComp from "../molecules/MoviesGalleryComp";

function MainComp() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h1 className="ms-5 my-4">Movies</h1>
          <button
            className="bottoneSmall btn btn-dark border bg-black rounded-0 border-light dropdown-toggle ms-4 py-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Genres
          </button>
        </div>
        <div className="me-5">
          <div
            className="btn-group mt-2"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn bottoneSmall btn-dark border-secondary"
            >
              <img src="src/assets/bars-solid.svg" alt="bars icon" />
            </button>
            <button
              type="button"
              className="btn bottoneSmall btn-dark border-secondary"
            >
              <img src="src/assets/grip-solid.svg" alt="grid icon" />
            </button>
          </div>
        </div>
      </div>
      <p className="margin my-3 fs-4">Harry Potter</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=harry%20potter" />
      </div>
      <p className="margin my-3 fs-4">Avengers</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=avengers" />
      </div>
      <p className="margin my-3 fs-4">Men in Black</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=men%20in%20black" />
      </div>
    </>
  );
}

export default MainComp;
