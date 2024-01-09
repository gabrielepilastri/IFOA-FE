import { Card, Col, Row, Button } from 'react-bootstrap'
import { useState } from 'react';
import AllTheButtons from './AllTheButtons';



const AllTheBooks = () => {
    const [list, setList] = useState([])
   return (
    <>
    <AllTheButtons setList={setList}/>
    <Row>
        <Col className='d-flex flex-wrap text-center justify-content-center'>
            {list.map((book) => 
            <Card className='col-2 mx-2 my-2'>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>
                {book.title}
              </Card.Title>
              <Button variant='warning'>Acquista {book.price}$</Button>
              
            </Card.Body>
          </Card>
            )}
            
        </Col>
    </Row>
    </>
   )
}


export default AllTheBooks