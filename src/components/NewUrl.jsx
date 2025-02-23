import React from 'react'

function NewUrl() {
  const [url, setUrl] = React.useState('');

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('New URL:', url);
  // };

  return (
    <div className='min-h-full p-10'>
      <h1 className='text-2xl font-bold'>Create a new short URL</h1>
      <form className='flex flex-col gap-5 mt-5'>
        <input
          type='url'
          placeholder='Enter your URL'
          value={url}
          onChange={handleChange}
          className='px-3 py-2 border border-primary rounded-lg'
        />
        <button onClick={(e)=>e.preventDefault()}  className='px-3 duration-200 py-2 my-button-primary disabled rounded-lg'>
          Shorten URL
        </button>
      </form>

    </div>
  );
}

export default NewUrl