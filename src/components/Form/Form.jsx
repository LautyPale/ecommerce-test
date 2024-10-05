

export default function Form ({ handleInputChange, submit, formData, error}){
  
  return (
    <form onSubmit={submit} className='max-w-lg h-fit mx-auto flex flex-col m-4 rounded-xl shadow shadow-customOrange text-lg'>

      {
        Object.keys(formData).map((key, index) => (
          <div key={index} className='m-4'>
            <label htmlFor={key}>Insert {key}:</label>
            <input 
              className="m-2 pl-2 py-0.5 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-customOrange focus:border-transparent" 
              type={key === 'email' ? 'email' : 'text'} 
              name={key} id={key} 
              onChange={handleInputChange} 
              value={formData[key] || ''}
              autoComplete="off"
            />
            {error[key] && <span className="text-red-600">{error[key]}</span>}
          </div>
        ))
      }

      {error.cart && <div className="mx-auto text-red-600 mb-2">{error.cart}</div>}

      <button className="mt-auto w-full px-4 py-2 bg-customBlue font-bold rounded-b-lg shadow-md hover:bg-customOrange focus:outline-none">Create order</button>

    </form>
  )
  
}
