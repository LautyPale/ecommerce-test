

export default function Form ({ handleInputChange, submit, formData, error}){
  
  return (
    <form onSubmit={submit} className='max-w-md h-fit mx-auto flex flex-col m-4 rounded-xl shadow shadow-green-500'>

      {
        Object.keys(formData).map((key, index) => (
          <div key={index} className='m-4 shadow shadow-black'>
            <label htmlFor={key}>Insert {key}</label>
            <input 
              className="m-2 border-2 rounded-md" 
              type={key === 'email' ? 'email' : 'text'} 
              name={key} id={key} 
              onChange={handleInputChange} 
              value={formData[key] || ''}
            />
            {error[key] && <span className="text-red-600">{error[key]}</span>}
          </div>
        ))
      }

      {error.cart && <div className="mx-4 text-red-600">{error.cart}</div>}

      <button className="button">Create order</button>

    </form>
  )
  
}
