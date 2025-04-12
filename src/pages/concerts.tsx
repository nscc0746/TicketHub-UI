import ConcertRow from '../components/ConcertRow/concertrow'
import { dummyConcerts, ConcertInfo } from '../dummy_concerts';

const ConcertsPage = () => {
    return(
        <>
            <h1> Upcoming Concerts </h1>
            <ul>
                {dummyConcerts.map((c: ConcertInfo) => (
                    <li key={c.Id}>
                        <ConcertRow concert={c} />
                    </li>
                ))}       
            </ul>
        </>
    )
}

export default ConcertsPage;