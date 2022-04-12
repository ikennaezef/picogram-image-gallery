import useFirestore from '../hooks/useFirestore';

import Post from './Post';

const ImagesContainer = ({ setSelectedImage }) => {

	const { docs } = useFirestore('images');

	return (
		<div className="images-container container">
			{docs.map(doc => <Post key={doc.id} image={doc.url} setSelectedImage={setSelectedImage} /> )}
		</div>
	)
}

export default ImagesContainer