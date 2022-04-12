import { motion } from 'framer-motion';

const Post = ({image, setSelectedImage}) => {
	return (
		<motion.div className="post" onClick={()=> setSelectedImage(image)}
			layout
			whileHover={{ opacity: 1 }}
		 >
			<motion.img src={image} alt={image} className="post__image"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1 }}
			 />
		</motion.div>
	)
}

export default Post