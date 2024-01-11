import { Card, Button } from 'react-bootstrap'

<Row>
          <Col className='d-flex flex-wrap text-center justify-content-center'>
            
              {search.map((book) => 
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

export default SingleBook