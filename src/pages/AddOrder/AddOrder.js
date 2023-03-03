import { useState, useRef, useEffect } from "react"

const AddOrder = (props) => {
  const [formData, setFormData] = useState({
    pet:'',
    client:'',
    images:'',
    notes:'',
  })

  const [validForm, setValidForm] = useState(false)
  
  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.pet]: evt.target.value })
	}

  const formElement = useRef()
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
    props.handleAddContact(formData)
	}


	return (
		<>
			<h1>Add Order</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="pet-input" className="form-label">
						Pet Name/s (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="pet-input"
						pet="pet"
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
						pet="client"
            value={formData.client}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="images-input" className="form-label">
						Image folder
					</label>
					<input 
						type="text"
						className="form-control"
						id="images-input"
						pet="images"
            value={formData.images}
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
						pet="notes"
            value={formData.notes}
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