import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/title";

const Orders = () => {
  const { products, currency, cartItems } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {Object.keys(cartItems).map((productId, index) => {
          const product = products.find((p) => p._id === productId);

          return Object.keys(cartItems[productId]).map((size, sizeIndex) => {
            const quantity = cartItems[productId][size];

            if (quantity <= 0) return null;

            return (
              <div
                key={`${index}-${sizeIndex}`}
                className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-start gap-6 text-sm">
                  <img
                    className="w-16  sm:w-20"
                    src={product.image[0]}
                    alt={product.name}
                  />
                  <div className="">
                    <p className="sm:text-base font-medium">{product.name}</p>
                    <div className="flex items-center gap-3 mt-3 text-base text-gray-700">
                      <p className="text-lg">
                        {currency}
                        {product.price}
                      </p>
                      <p>Quantity: {quantity}</p>
                      <p>Size: {size}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base ">Ready to ship</p>
                  </div>
                  <button className="border px-4 py-2 text-sm font-medium rounded-sm">
                    Track Orders
                  </button>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Orders;
