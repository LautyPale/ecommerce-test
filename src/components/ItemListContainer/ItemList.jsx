import Item from './Item'

export default function ItemList ({items}) {
  return (
    <div className='flex flex-col'>
        {items.map((element, index) => (
          <Item key={index} item={element} />
        ))}
    </div>
  )
}
