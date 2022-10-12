import React from 'react'
import ProductList from './ProductList'


const Banner = () => {
  return (
	<>
	<div className = "w-[70%] mx-auto mt-4 h-[30rem] bg-ban bg-no-repeat flex flex-col justify-center items-end gap-y-4">

	 <div className=' w-[30%]'>
		<h5 className='font-bold font-mono text-2xl text-white mb-4'>NEW ARRIVAL</h5>
		<h2 className='font-bold font-mono text-3xl text-white'>Basic Colours</h2>
		<h2 className='font-bold font-mono text-3xl text-white'>Comeback</h2>
     </div>

	 <div className=' w-[30%]'>
	 <h6 className='text-[0.7rem] text-white'>
		
		Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
		Commodi tempora optio aliquam eius perspiciatis,<br/>
		ducimus ut nisi sequi, debitis vel at laudantium numquam rem <br/>
		officia non quod veritatis labore nostrum.
		
	</h6>
	</div>
     
	 <div className=' w-[30%]'>
	 <button className='bg-white py-2 px-3 text-black hover:bg-gray-100 font-mono font-bold text-[0.9rem] '>Shop Now</button>
     </div>
	 
	</div>
	<div className = "w-[70%] mx-auto bg-gray-200 h-[20rem] mt-[1rem]">
       <ProductList title = "Mens Fashion" />
	</div>
	</>
  )
}

export default Banner