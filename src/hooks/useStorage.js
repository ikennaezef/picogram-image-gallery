import { useState, useEffect } from 'react';
import { appStorage, appFirestore, timestamp } from '../firebase';


const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {

		const storageRef = appStorage.ref(file.name);
		const collectionRef = appFirestore.collection('images');

		storageRef.put(file).on('state_changed', (snap)=> {
			let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
			setProgress(percentage);
		}, (err) => {
			setError(err);
		}, async () => {
			const uploadedUrl = await storageRef.getDownloadURL();
			setUrl(uploadedUrl);

			collectionRef.add({
				url: uploadedUrl,
				timestamp: timestamp(),
			})
		})

	}, [ file ]);

	return { progress, url, error }

}

export default useStorage;