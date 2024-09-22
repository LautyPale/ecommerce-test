

export default function Item ({item}) {
  return (
    <div className="w-40 h-auto m-4 shadow shadow-indigo-900">
        <p>Name: </p>
        <p>Model: </p>
        <p>Price: </p>
        <p>Category: </p>
        {item}
    </div>
  )
}
