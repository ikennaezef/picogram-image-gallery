import {motion}  from 'framer-motion';

const Modal = ({ selectedImage, setSelectedImage }) => {

	const handleClose =(e) => {
		if (e.target.classList.contains('modal')) {
			setSelectedImage(null);
		}
	}

	return (
		<motion.div className="modal" onClick={handleClose} 
			initial={{opacity: 0}}
			animate={{opacity: 1}}
		 >
			<motion.img src={selectedImage} alt={selectedImage} 
				initial={{ y: '-100vh' }}
				animate={{ y: 0 }}
			 />
		</motion.div>
	)
}

export default Modal