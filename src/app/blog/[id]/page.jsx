import Image from 'next/image';

// دالة لجلب بيانات المنتج
async function getdata(id) {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error(`خطأ في الطلب! الحالة: ${res.status}`);
        return await res.json();
    } catch (error) {
        console.error("فشل في جلب بيانات المنتج:", error);
        return null;
    }
}

// دالة metadata
export async function generateMetadata({ params }) {
    const product = await getdata(params.id);
    return {
        title: `${product?.title || 'Product'} - HEXASHOP`,
        description: `${product?.description || 'No description available.'}`,
    };
}

// الصفحة الرئيسية
export default async function Post({ params }) {
    const product = await getdata(params.id);

    // معالجة حالة فشل جلب المنتج
    if (!product) {
        return <p>فشل في تحميل المنتج.</p>;
    }

    return (
        <div>
            {/* الرأس */}
            <header>
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
                <div
                    style={{
                        objectFit: "cover",
                        position: "relative",
                        height: "300px",
                    }}
                >
                    <Image
                        src={product.image || '/default-image.png'}
                        fill={true}
                        style={{ borderRadius: "15px" }}
                        alt={product.title}
                    />
                    <span
                        style={{
                            position: "absolute",
                            color: "white",
                            backgroundColor: "blue",
                            padding: "5px",
                            right: "0",
                            bottom: "0",
                        }}
                    >
                        {product.category}
                    </span>
                </div>
            </header>

           
            <div>
                <Image
                    src={product.image || '/default-image.png'}
                    alt={product.title}
                    height={200}
                    width={200}
                />
            </div>
        </div>
    );
}
