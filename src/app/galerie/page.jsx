import { useEffect, useState } from 'react';
import Image from 'next/image';
import client, { urlFor } from '../sanityClient'; // Adjust the import path as needed

export default function Galerie() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const query = `*[_type == "galleryImage"] | order(order asc) {
      _id,
      alt,
      image
    }`;

    client.fetch(query).then((data) => {
      setImages(data);
    }).catch(console.error);
  }, []);

  if (!images.length) {
    return <div>Loading gallery...</div>;
  }

  return (
    <div className="grid w-4/5 grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((img) => (
        <div key={img._id} className="flex">
          <Image
            className="object-cover w-full h-auto rounded-lg"
            src={urlFor(img.image).width(500).height(500).url()}
            alt={img.alt || 'Gallery Image'}
            width={500}
            height={500}
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
}
