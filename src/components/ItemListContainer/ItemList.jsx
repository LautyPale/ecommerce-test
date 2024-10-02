import Item from './Item'

export default function ItemList ({items}) {
  return (
    <div className='flex flex-row flex-wrap m-4'>
        {items.map((element, index) => (
          <Item key={index} item={element} />
        ))}
    </div>
  )
}
