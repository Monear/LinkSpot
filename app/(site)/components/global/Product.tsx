// components/global/Product.tsx

type ProductType = {
    _id: string;
    title: string;
    description: string;
    image: {
        image: string;
        alt: string;
    };
};

type ProductProps = {
  products: ProductType[];
  className?: string;
};

export default function Product({ products, className }: ProductProps) {
    return (
        <section className={`grid gap-4 md:grid-cols-3 md:gap-6 ${className}`}>
            {products.map((product: ProductType) => (
                <div key={product._id} className="flex items-center p-4 border rounded shadow">
                    <img className="w-1/4 h-24 object-cover mr-4" src={product.image.image} alt={product.image.alt} />
                    <div className="">
                        <h2 className="mb-2 text-lg font-bold text-center">{product.title}</h2>
                        <p className="text-sm">{product.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}