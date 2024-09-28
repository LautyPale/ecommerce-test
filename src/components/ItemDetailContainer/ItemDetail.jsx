import Counter from "../Counter/Counter";

export default function ItemDetail({ item, onAdd }) {
  return (
    <div key={item.id} className="flex flex-col mx-auto items-center">
      <img src={item.image} alt={item.name} />
      <h3>Name: {item.name}</h3>
      <p>Description: {item.model}</p>
      <p>Price: {item.price}</p>
      <p>Stock: {item.stock}</p>
      <p>Category: {item.category}</p>
      <Counter onAdd={ onAdd }/>
    </div>
  )
}