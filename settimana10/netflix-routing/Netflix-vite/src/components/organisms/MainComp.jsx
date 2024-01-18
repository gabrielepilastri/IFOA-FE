import LayoutButton from "../atoms/LayoutButton";
import MainGenres from "../atoms/MainGenres";
import MoviesGalleryComp from "../molecules/MoviesGalleryComp";

function MainComp() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <MainGenres/>
        <LayoutButton/>
      </div>
      <p className="margin my-3 fs-4">In Evidenza</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=matrix" />
      </div>
      <p className="margin my-3 fs-4">Disney Production</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=disney" />
      </div>
      <p className="margin my-3 fs-4">Rick and Morty</p>
      <div className="text-center">
        <MoviesGalleryComp url="http://www.omdbapi.com/?apikey=13bbf94c&s=rick%20and%20morty" />
      </div>
    </>
  );
}

export default MainComp;
