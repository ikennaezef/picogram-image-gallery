import { useState } from 'react';

import './App.css';

import Header from './components/Header'
import ImagesContainer from './components/ImagesContainer'
import UploadForm from './components/UploadForm'
import Modal from './components/Modal'

function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImagesContainer setSelectedImage={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
    </div>
  );
}

export default App;
