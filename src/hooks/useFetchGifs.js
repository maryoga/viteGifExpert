// Custom hooks - Obtiene las imagenes pero antes envia un mensaje de carga
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async () => {
    // Get the images
    const newImages = await getGifs( category );
    // Update the images
    setImages(newImages);
    // dejó de cargar las imagenes, pongo el setIsLoading a false
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  };
};
