import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getThreeProductsThunk } from "../store/products";
import { Link } from "react-router-dom";

function SuggestedProducts(props) {
  const dispatch = useDispatch();
  let threeProducts =
    useSelector((state) => state.products.threeProducts) || [];
  console.log("three prodcuts: ", threeProducts);

  useEffect(() => {
    dispatch(getThreeProductsThunk());
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Suggested Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {threeProducts[0] &&
            threeProducts.map((product) => (
              <div className="group relative" key={product.id}>
                <div className="w-full min-h-80 bg-white aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageUrl}
                    alt={product.description}
                    className="w-full h-full object-center lg:w-full lg:h-full object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to={`/products/${product.id}`}>
                        <div>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {product.name}
                        </div>
                      </Link>
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestedProducts;
