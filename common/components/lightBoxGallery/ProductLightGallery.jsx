import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function ProductLightGallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href="/assets/images/image-product-1.jpg">
          <img alt="img1" src="/assets/images/image-product-1-thumbnail.jpg" />
        </a>
        <a href="/assets/images/image-product-1.jpg">
          <img alt="img2" src="/assets/images/image-product-2-thumbnail.jpg" />
        </a>
        ...
      </LightGallery>
    </div>
  );
}
