

export default function ItemDetail({ name, model, price, category }) {
  return (
    <div className="flex flex-col mx-auto items-center">
        <h3>DETAIL</h3>
        <p>Name: {name}</p>
        <p>Model: {model}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
    </div>
  )
}