import { useEffect, useState } from 'react'
import Router from 'next/router'
import StripeCheckout from 'react-stripe-checkout'
import useRequest from '../../hooks/useRequest'

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0)
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id
    },
    onSuccess: payment => Router.push('/orders')
  })

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date()
      setTimeLeft(Math.round(msLeft / 1000))
    }

    // display the time initially
    findTimeLeft()
    // show the time each second
    const timerId = setInterval(findTimeLeft, 1000)

    // stop timer when the component is removed
    return () => clearInterval(timerId)
  }, [order])

  if (timeLeft < 0) {
    return <div>Order Expired</div>
  }
  
  return (
    <div>
      <p>Time left to pay: {timeLeft} seconds</p>
      <StripeCheckout 
        token={({ id })=> doRequest({ token: id })}
        stripeKey="pk_test_ZYzrqsAneU2TnafntdXdX8RP" 
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      { errors }
    </div>
  )
}

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query
  const { data } = await client.get(`/api/orders/${orderId}`)
  return { order: data }
}
export default OrderShow