import { useParams, useNavigate } from "react-router-dom"
import OrderForm from '../components/orderform'

const OrderPage = () => {
    type OrderParams = {
        concertId: string;
    }

    const validConcerts : number[] = [123, 321, 111];

    const { concertId } = useParams<OrderParams>();
    const nav = useNavigate();
    if(!concertId || !validConcerts.includes(Number(concertId))){
        nav("/")
    }
  
    if (!validConcerts.includes(Number(concertId))) {
        return(
            <div className="error">
                <p>Invalid Concert ID.</p>
            </div>
        )
    } else {
        return(
            <>
                <h1> Buying tickets for Concert #{concertId} </h1>
                <OrderForm concertId={concertId!}/>
            </>
        )
    }
}

export default OrderPage;