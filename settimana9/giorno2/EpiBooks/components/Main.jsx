import { Container, Row } from 'react-bootstrap'
import Welcome from './Welcome';
import AllTheBooks from './AllTheBooks'

const Main = ({setPageTitle}) => {

    const retrieveTitle = (newTitle) => {
        setPageTitle(newTitle)
    }

    return (
        <Container style={{ minHeight: '85vh' }}>
            <Row>
                <Welcome />
            </Row>
            <Row>
                <AllTheBooks retrieveTitle={retrieveTitle}/>
            </Row>
      </Container>
    )
}

export default Main