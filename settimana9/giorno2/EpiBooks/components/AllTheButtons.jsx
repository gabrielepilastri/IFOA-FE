import Button from 'react-bootstrap/Button'
import FantasyBooks from '../books/fantasy.json'
import HistoryBooks from '../books/history.json'
import HorrorBooks from '../books/horror.json'
import RomanceBooks from '../books/romance.json'
import SciFiBooks from '../books/scifi.json'

const AllTheButtons = ({setList}) => {
    
    const genres = [
        {
            type:"Fantasy",
            data: FantasyBooks
        },
        {
            type:"History",
            data: HistoryBooks
        },
        {
            type:"Horror",
            data: HorrorBooks
        },    
        {
            type:"Romance",
            data: RomanceBooks
        },
        {
            type:"Scifi",
            data: SciFiBooks
        }
    ]

   return (
        <div>
            {genres.map((genre, index) => {
                    return (
                        
                            <Button className='mx-2' variant='warning' onClick={() => setList(genre.data)} key={index}>
                            {genre.type}
                        </Button>
                        
                    )
                }
            )}
        </div>
    )
}

export default AllTheButtons