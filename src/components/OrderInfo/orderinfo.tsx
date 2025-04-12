import { ConcertInfo } from "../../dummy_concerts"
import styles from './orderinfo.module.css'

interface OrderInfoProps {
    concert: ConcertInfo;
}

const OrderInfo = ({ concert }: OrderInfoProps) => {
    return (
        <div className={styles.orderInfo}>
        <img src={concert.Image} alt={concert.Artist} className={styles.concertImage} />
        <div className={styles.concertDetails}>
            <h3>{concert.Artist}</h3>
            <p>{concert.Name}</p>
        </div>
        </div>
    )

}

export default OrderInfo