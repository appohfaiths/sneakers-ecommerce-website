export default function ProductDescription() {
  return (
    <div>
      <h5 className="text-orange uppercase">sneaker company</h5>
      <h2 className="capitalize text-3xl font-bold">
        fall limited edition sneakers
      </h2>
      <p>
        these low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer
      </p>
      <div className="flex gap-4 items-start">
        <div>
          <h2 className="font-bold">
            $<span>125.00</span>
          </h2>
          <h4 className="text-sm line-through text-dark-grayish-blue">
            $<span>250</span>
          </h4>
        </div>
        <h4 className="bg-pale-orange text-orange">50%</h4>
      </div>
      <div className="flex gap-4">
        <div className="bg-slate-100 flex items-center">
          <button className="px-4 py-2">-</button>
          <p className="px-4 py-2">0</p>
          <button className="px-4 py-2">+</button>
        </div>
        <button className="bg-orange text-white rounded-md px-16 py-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
