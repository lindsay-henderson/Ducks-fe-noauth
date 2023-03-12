import styles from './OrderList.module.css'

function OrderList(props) {


  return (
    <>
      <h1>Order List</h1>
      <div className={styles.container}>
          {props.orders.map(order  => (
            <div key={order._id}>
            <p>Order Name: {order.name}</p>
            <p>client: {order.client}</p>
            <p>Image Folder: {order.photos}</p>
            <p>Notes <br/> {order.notes}</p>
            <p>{order.orderDate}</p>
          </div>
          ))}
      </div>
    </>
  )

}

export default OrderList