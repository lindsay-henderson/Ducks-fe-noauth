import styles from './OrderList.module.css'

function OrderList(props) {
  return (
    <>
      <h1>Order List</h1>
      <div className={styles.container}>
        {props.contacts.map(order => (
          <div key={order._id}>
            <p>Order Name: {order.name}</p>
            <p>client: {order.client}</p>
            <p>Image Folder: {order.images}</p>
            <p>Notes <br/> {order.notes}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default OrderList