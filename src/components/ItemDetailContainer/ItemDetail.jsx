import Counter from "../Counter/Counter";

// to do, add stock validation

export default function ItemDetail({ item, onAdd }) {
  return (
    <div key={item.id} className="mx-auto flex flex-row items-top text-xl bg-slate-950">
      <img src={item.image} alt={item.name} className="p-8 w-[512px] h-[512px]" />
      <div>
        <div className="text-2xl">
          <h3 className="mt-8 mb-2"><span className="text-customOrange pr-2">Name:</span> <span>{item.name}</span></h3>
          <p className="mb-2"><span className="text-customOrange pr-2">Model:</span> <span>{item.model}</span></p>
          <p className="mb-2"><span className="text-customOrange pr-2">Category:</span> <span>{item.category}</span></p>
          <p className="mb-2"><span className="text-customOrange pr-2">Price:</span> <span>${item.price}</span></p>
          <p><span className="text-customOrange pr-2">Stock:</span> <span>{item.stock}</span></p>
        </div>
        

        <p className="my-8 text-pretty pr-4">{item.description}</p>

        <div className="flex flex-row">
          <Counter onAdd={ onAdd } itemStock={item.stock}/>
        </div>
        
      </div>
    </div>
  )
}