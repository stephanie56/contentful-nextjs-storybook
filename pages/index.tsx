import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card/card";
import { getEntriesByContentType } from "@/lib/contentful";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const getStaticProps = async (context: any) => {
  const product = await getEntriesByContentType("product");

  return {
    props: { product },
  };
}

export default function Home({ product }: any) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-12 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold">Contentful Swagger Shop</h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            product.items.map((item: any) => {
              return (
                <Card key={item.sys.id}>
                  <CardHeader>
                    <CardTitle>{item.fields.productName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      <h3>Cost: {item.fields.price}</h3>
                      <p>Instructor: {item.fields.authorName.fields.authorName}</p>
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })
          }
        </div>
      </div>
    </main>
  );
}
