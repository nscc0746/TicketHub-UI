import { useParams, useNavigate } from "react-router-dom"
import {useEffect } from 'react'
import OrderForm from '../components/orderform'

const OrderPage = () => {
    type OrderParams = {
        concertId: string;
    }

    const { concertId } = useParams<OrderParams>();
    const nav = useNavigate();

    useEffect(() => {
        if (!concertId){
            nav("/");
        }
    }, [concertId, nav]);

    if(!concertId){
        return null;
    }

    return(
        <>
            <h1> Buying tickets for Concert #{concertId} </h1>
            <OrderForm concertId={concertId}/>
        </>
    )
}

export default OrderPage;