
const TvGenres = () => {
    return(
        <div className="d-flex align-items-center">
          <h1 className="ms-5 my-4">TV Shows</h1>
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
    )
}

export default TvGenres