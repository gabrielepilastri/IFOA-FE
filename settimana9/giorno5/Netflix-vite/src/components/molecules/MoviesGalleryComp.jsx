import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Spinner from 'react-bootstrap/Spinner';

function MoviesGalleryComp({ url }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState([false])

//   useEffect(() => {
//     fetch(url)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setMovies(data.Search);
//       });
//   }, []);

const fetchData = async () => {
    try {
        setLoading(true);
        const res = await fetch(url);
        if (res.ok) {
            let data = await res.json();
            setMovies(data.Search);
            setLoading(false);
        } else {
            console.log("Error");
            setLoading(false);
            setError(true)
        }
    } catch (error) {
        console.log("catch error");
        setLoading(false);
        setError(true);
    }
}
useEffect(() => {fetchData()}, [])

  return (
    <>
      <Carousel>
        <Carousel.Item>
            {loading && <Spinner animation="border" />}
            {error && console.log("Error")}

          {!loading &&
          movies.map((movie) => (
            <img
              className="mx-3 my-4 rounded border border-light"
              key={movie.imdbID}
              src={movie.Poster}
              alt={movie.Title}
              width={140}
              height={230}
            />
          ))}
        </Carousel.Item>
        <Carousel.Item>
          {movies.map((movie) => (
            <img
              className="mx-3 my-4 rounded border border-light"
              key={movie.imdbID}
              src={movie.Poster}
              alt={movie.Title}
              width={140}
              height={230}
            />
          ))}
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default MoviesGalleryComp;
