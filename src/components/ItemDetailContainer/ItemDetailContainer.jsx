import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {

    const { id } = useParams();
    console.log(id);
    const data = {
        id: 1,
        name: 'Product Name',
        model: 'Product Model',
        price: 1000,
        category: 'Product Category',
    }

  return (
    <div className="flex flex-row m-4 h-auto shadow shadow-green-500">
        <ItemDetail item={data}/>
    </div>
  )
}

