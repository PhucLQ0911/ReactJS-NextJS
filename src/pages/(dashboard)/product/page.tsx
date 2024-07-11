import { IProduct } from "@/common/types/product";
import { getAllProducts } from "@/services/product";
import { useEffect, useState } from "react";

const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const data = await getAllProducts();
                setProducts(data)
            } catch (error) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }

        })();
    }, []);

    if (isLoading) return (<h2>Loading...</h2>);

    if (isError) return (<h2>Error</h2>);

    return (
        <>
            <h1>Product List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product, index) => (
                            <tr key={index} className="bg-white hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img className="h-10 w-10 rounded-full" src={product.image} alt={product.name} />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex space-x-2">
                                        <button className="px-4 py-2 text-xs font-semibold text-white bg-blue-500 rounded hover:bg-blue-700">Update</button>
                                        <button className="px-4 py-2 text-xs font-semibold text-white bg-red-500 rounded hover:bg-red-700">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProductPage;
