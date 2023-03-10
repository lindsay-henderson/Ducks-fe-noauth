import { useState, useRef, useEffect}from "react"

const AddOrder = (props) => {
  const today = new Date()
  const [formData, setFormData] = useState({
    orderDate:today.toISOString().slice(0, 16),
    dueDate:'',
    pet:'',
    client:'',
    photos:'',
    notes:'',
    depositPaid:false,
    paidInFull:false,
    shipped:'',
  })

  const [validForm, setValidForm] = useState(false)

  const[depositChecked, setDepositChecked] = useState(false)
  const[fullChecked, setFullChecked] = useState(false)
  
  const handlesetFullChecked = () =>{
    setFullChecked(!fullChecked)
  }

  const handlesetDepositChecked = () =>{
    setDepositChecked(!depositChecked)
  }
  
	const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const formElement = useRef()
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
    props.handleAddOrder(formData)
    console.log(formData)
	}

	return (
		<>
			<h1>Add Order</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        
      <div className="form-group mb-3">
					<label htmlFor="orderDate-input" className="form-label">
						Order Date (required)
					</label>
					<input 
						type="date"
						className="form-control"
						id="orderDate-input"
						name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
						required
					/>
        </div>
        <div className="form-group mb-3">
					<label htmlFor="dueDate-input" className="form-label">
						Due Date (normally 6-8 weeks)
					</label>
					<input 
						type="date"
						className="form-control"
						id="dueDate-input"
						name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
					/>
        </div>

				<div className="form-group mb-3">
					<label htmlFor="pet-input" className="form-label">
						Pet Name/s (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="pet-input"
						name="pet"
            value={formData.pet}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="client-input" className="form-label">
						Client (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="client-input"
						name="client"
            value={formData.client}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="photos-input" className="form-label">
						Image folder
					</label>
					<input 
						type="text"
						className="form-control"
						id="photos-input"
						name="photos"
            value={formData.photos}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="notes-input" className="form-label">
						Notes
					</label>
					<textarea 
						type="text"
						className="form-control"
						id="notes-input"
						name="notes"
            value={formData.notes}
            onChange={handleChange}
					/>
				</div>

        <div className="form-group mb-3">
					<label htmlFor="deposit-input" className="form-label">
						Deposit Paid
					</label>
					<input 
						type="checkbox"
						//className="form-control"
						id="deposit"
						name="deposit"
            value={formData.deposit}
            checked={depositChecked}
            onChange={handleChange && handlesetDepositChecked}
					/>
          <p>Is "My Value" checked? {depositChecked.toString()}</p>
        </div>

        <div className="form-group mb-3">
					<label htmlFor="paidInFull-input" className="form-label">
						Paid in Full
					</label>
					<input 
						type="checkbox"
						//className="form-control"
						id="paidInFull"
						name="paidInFull"
            value={formData.paidInFull}
            checked={fullChecked}
            onChange={handleChange && handlesetFullChecked}
					/>
          <p>Is "My Value" checked? {fullChecked.toString()}</p>
        </div>

        <div className="form-group mb-3">
					<label htmlFor="shipped-input" className="form-label">
						Shipped Date 
					</label>
					<input 
						type="date"
						className="form-control"
						id="shipped-input"
						name="shipped"
            value={formData.shipped}
            onChange={handleChange}
					/>
        </div>

				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Order
					</button>
				</div>
			</form>
		</>
	)
}

export default AddOrder