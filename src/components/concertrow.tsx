import {Link} from 'react-router-dom'

const ConcertRow = ({concertId, artist, name} : {concertId : number, artist: string, name: string}) => {
    return (
        <Link to={`/order/${concertId.toString()}`}>
            <div className='concert-row'>
                {artist} | {name} 
            </div>
        </Link>
    )

}

export default ConcertRow;