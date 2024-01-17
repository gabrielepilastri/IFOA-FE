import { useState, useEffect } from 'react';
import AllTheButtons from './AllTheButtons';
import SingleBook from './SingleBook';






const AllTheBooks = ({retrieveTitle}) => {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState([]);
    

    function searchBar(event) {
      let value = new RegExp(event.target.value, 'i')
      const actualState = list
      const result = actualState.filter((book) => {
        return value.test(book.title)
      })
      setSearch(result)
    }

    useEffect(() => {
      setSearch(list)
      retrieveTitle(list[0] ? "Categoria " + list[0].category : "Categorie Epiche")
  }, [list])


    return (
      <>
      <AllTheButtons setList={setList}/>
      <div className="text-left my-3">
            <span>Cerca: </span>
            <input type="text" onChange={searchBar}/>
        </div>
      <div className='d-flex justify-content-between flex-wrap'>
        {search.map((book) => 
        <SingleBook book={book} key={book.asin} />
        )}
      </div>
      </>
     )
}


export default AllTheBooks