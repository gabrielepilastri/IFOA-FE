import { Card, Col, Row, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import AllTheButtons from './AllTheButtons';






const AllTheBooks = () => {
    const [list, setList] = useState([])
    const [search, setSearch] = useState([]);
    const [clicked, setClicked] = useState(false);
     
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
  }, [list])


    return (
      <>
      <input type="text" onChange={searchBar} />
      <AllTheButtons setList={setList}/>
      <Row>
          <Col className='d-flex flex-wrap text-center justify-content-center'>
            
              {search.map((book, asin) => 
              <Card className='col-2 mx-2 my-2' onClick={() => setClicked(!clicked)} key={book.asin}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>
                  {book.title}
                </Card.Title>
                <Button variant='warning'>Acquista {book.price}$</Button>
                
              </Card.Body>
            </Card>
              )}
              {clicked ? Card.className = "border-danger" && console.log("cliccata") : Card.className = ""}
              
          </Col>
      </Row>
      </>
     )


   

  
}


export default AllTheBooks