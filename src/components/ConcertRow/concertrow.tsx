import {Link} from 'react-router-dom'
import { ConcertInfo } from '../../dummy_concerts'
import styles from './concertrow.module.css'

interface ConcertRowProps {
    concert: ConcertInfo;
}

const ConcertRow = ({ concert }: ConcertRowProps) => {
    return (
        <div className={styles.concertRow}>
            <img src={concert.Image} alt={concert.Artist} className={styles.concertImage} />
            <div className={styles.concertDetails}>
                <h3>{concert.Artist}</h3>
                <p>{concert.Name}</p>
            </div>
            <Link to={`/concerts/${concert.Id.toString()}/order`}>Order Tickets</Link>
        </div>
    )
}

export default ConcertRow;