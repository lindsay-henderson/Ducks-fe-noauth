import { useState, useRef, useEffect } from "react"

const AddContact = (props) => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    social:'',
    notes: '',
  })

  const [validForm, setValidForm] = useState(false)
  
  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
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
			<h1>Add Contact</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="email-input" className="form-label">
						Email (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="email-input"
						name="email"
            value={formData.email}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="social-input" className="form-label">
						Social Media
					</label>
					<input 
						type="text"
						className="form-control"
						id="social-input"
						name="social"
            value={formData.social}
            onChange={handleChange}
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="notes-input" className="form-label">
						Notes
					</label>
					<input 
						type="text"
						className="form-control"
						id="notes-input"
						name="notes"
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
						Add Contact
					</button>
				</div>
			</form>
		</>
	)
}

export default AddContact