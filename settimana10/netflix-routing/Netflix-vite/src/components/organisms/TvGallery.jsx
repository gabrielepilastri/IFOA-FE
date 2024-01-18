import LayoutButton from "../atoms/LayoutButton";
import TvGenres from "../atoms/TvGenres";
import MoviesGalleryComp from "../molecules/MoviesGalleryComp";

function TvGallery() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
       <TvGenres/>
        <LayoutButton/>
      </div>
      <p className="margin my-3 fs-4">Futurama</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=futurama" />
      </div>
      <p className="margin my-3 fs-4">Simpson</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=simpson" />
      </div>
      <p className="margin my-3 fs-4">Griffin</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=griffin" />
      </div>
    </>
  );
}

export default TvGallery;
