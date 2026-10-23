import { productImage } from "@/lib/site";
import catalogue from "@/lib/catalogue.json";

export function ProductCard({ product }: { product: (typeof catalogue)[number] }) {
  return (
    <article className="min-w-0 overflow-hidden rounded border bg-card">
      <div className="border-b p-5"><img src={productImage(product.id)} alt={`${product.name} pack`} loading="lazy" className="aspect-[4/3] w-full object-contain" /></div>
      <div className="p-5"><p className="text-xs text-muted-foreground">{product.form}</p><h3 className="mt-2 text-xl">{product.name}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.composition}</p></div>
    </article>
  );
}