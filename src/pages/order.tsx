import { useParams, useNavigate } from "react-router-dom"
import OrderForm from '../components/OrderForm/orderform'
import OrderInfo from "../components/OrderInfo/orderinfo"

import { dummyConcerts, ConcertInfo } from '../dummy_concerts'

const OrderPage = () => {
    type OrderParams = {
        concertId: string;
    }

    const { concertId } = useParams<OrderParams>();

    const validConcerts : number[] = dummyConcerts.map((concert) => concert.Id)

    const selectedId = Number(concertId);
    const selectedConcert : ConcertInfo | undefined = dummyConcerts.find((concert) => concert.Id === selectedId)
    const nav = useNavigate();
    
    if(!concertId || !validConcerts.includes(selectedId)){
        nav("/")
    } else {
        return(
            <>
                <h1> Ordering Tickets </h1>
                <OrderInfo concert={selectedConcert!} />
                <OrderForm concertId={concertId!}/>
            </>
        )
    }
}

export default OrderPage;