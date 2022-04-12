import { useState } from 'react'

import ProgressBar from './ProgressBar';

const UploadForm = () => {

	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);

	const changeHandler = (e) => {
		let selected = e.target.files[0];
		if (selected) {
			setFile(selected);
			setError(null);
		} else {
			setFile(null);
			setError("Please select an image file");
		}
	}


	return (
		<form className="upload-form">
			<input type="file" accept="image/*" onChange={changeHandler} id="file__input" />
			<label htmlFor="file__input">+</label>
			<div className="messsage">
				{error && <p className="error">{ error }</p>}
				{file && <p className="file-name">{file.name}</p>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	)
}

export default UploadForm