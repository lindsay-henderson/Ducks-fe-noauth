import { useState } from "react"

function AddContact(props) {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    social:'',
    notes: '',
  })
  
	return (
		<>
			<h1>Add Contact</h1>
			<form autoComplete="off">
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
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
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Contact
					</button>
				</div>
			</form>
		</>
	)
}

export default AddContact