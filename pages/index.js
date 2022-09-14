import ProductImageSlider from '../common/components/lightBoxGallery/ProductImageSlider';
import ProductDescription from '../common/components/productDescription/ProductDescription';

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row md:gap-10 items-start">
      <div className="md:w-1/2">
        <ProductImageSlider />
      </div>
      <div className="md:w-1/2">
        <ProductDescription />
      </div>
    </div>
  );
}
