import { useParams } from "react-router-dom"
import OrderForm from '../components/orderform'

const OrderPage = () => {
    type OrderParams = {
        concertId: string;
    }

    const { concertId } = useParams<OrderParams>();
    return(
        <>
            <h1> Buying tickets for Concert #{concertId} </h1>
            <OrderForm concertId={concertId}/>
        </>
    )
}

export default OrderPage;