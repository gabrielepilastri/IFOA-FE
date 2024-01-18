import LayoutButton from "../atoms/LayoutButton";
import MoviesGenres from "../atoms/MoviesGenres";
import MoviesGalleryComp from "../molecules/MoviesGalleryComp";

function MoviesGallery() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
       <MoviesGenres/>
        <LayoutButton/>
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

export default MoviesGallery;
