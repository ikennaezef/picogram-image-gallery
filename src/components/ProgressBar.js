import { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {

	const { url, progress } = useStorage(file);

	useEffect(() => {
		if (url) {
			setFile(null);
		}
	}, [url, setFile]);

	return (
		<div className="progress-bar" >
			<span className="progress" style={{ width: progress + '%' }} ></span>
		</div>
	)
}

export default ProgressBar