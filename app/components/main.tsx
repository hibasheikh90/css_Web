
import Image from "next/image";

export default function Main() {
  return (
    <div>
      <div className="main-container">
        <div className="image-container">
           <Image
            className="image"
            src="/banner.webp"
            alt="Celebration Cakes Banner"
            layout="responsive"
            width={50}
            height={50}
          /> 
        </div>

        <div className="flex">
          <h2 className="catalogue-title">Our Product</h2>
          <div className="product">
            <Image
              src="/1.jpg"
              alt="Chocolate Swiss Roll"
              width={200}
              height={200}
            />
            <p className="product-name">Chocolate Swiss Roll</p>
            <p className="text-black text-center">$ 1.50</p>
          </div>
          <div className="product">
            <Image
              src="/2.jpg"
              alt="Creame Donut"
              width={200}
              height={200}
            />
            <p className="product-name">Creamy Donut</p>
            <p className="text-black text-center">PKR 804</p>
          </div>
          <div className="product">
            <Image
              src="/3.jpg"
              alt="Strawberry Cheesecake"
              width={200}
              height={200}
            />
            <p className="product-name">Strawberry Cheesecake</p>
            <p className="text-black text-center">$ 2.99</p>
          </div>
          <div className="product">
            <Image
              src="/4.jpg"
              alt="Blueberry Macarons"
              width={200}
              height={200}
            />
            <p className="product-name">Blueberry Macarons</p>
            <p className="text-black text-center">$ 2.50</p>
          </div>
          <div className="product">
            <Image
              src="/5.jpg"
              alt="Red Velvet Pastry"
              width={200}
              height={200}
            />
            <p className="product-name">Red Velvet Pastry</p>
            <p className="text-black text-center">$ 3.99</p>
          </div>
          <div className="product">
            <Image
              src="/6.jpg"
              alt="Vanilla Cake Pops"
              width={200}
              height={200}
            />
            <p className="product-name">Vanilla Cake Pops</p>
            <p className="text-black text-center">$1.99</p>
          </div>
          <div className="product">
            <Image
              src="/7.jpg"
              alt="Chocolate Chips Cupcake"
              width={200}
              height={200}
            />
            <p className="product-name">Chocolate Chips Cupcake</p>
            <p className="text-black text-center">$ 2.80</p>
          </div>
          <div className="product">
            <Image
              src="/8.jpg"
              alt="Buttermilk Pancakes"
              width={200}
              height={200}
            />
            <p className="product-name">Buttermilk Pancakes</p>
            <p className="text-black text-center">$ 4.50</p>
          </div>
        </div>
      </div>
    </div>
  );
}
