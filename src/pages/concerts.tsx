import { Link } from 'react-router-dom'
import ConcertRow from '../components/concertrow'

type ConcertInfo = {
    Id: number,
    Artist: string,
    Name: string
}

const dummyConcerts: ConcertInfo[] = [
    {Id: 123, Artist: "John Smith", Name: "Bleeding Hearts Tour"},
    {Id: 321, Artist: "The Beep Boops", Name: "Concert in Canada"},
    {Id: 111, Artist: "Dusty PC Fan", Name: "Running Crysis"}
]


const ConcertsPage = () => {

    return(
        <>
            <h1> Hi! </h1>
            <ul>
                {dummyConcerts.map((c: ConcertInfo) => (
                    <ConcertRow concertId={c.Id} artist={c.Artist} name={c.Name} />
                ))}       
            </ul>
        </>
    )
}

export default ConcertsPage;