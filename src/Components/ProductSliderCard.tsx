

type ProductTypeProps ={
  
   new : {
    id : string,
    image : string
  }
}



const ProductSliderCard  = (props : ProductTypeProps) => {
	
  return (
	<div className = "  w-[rem] h-[5rem] flex hover:cursor-pointer" key = {props.new.id}>
      
      <div className = "">
        <img src ={props.new.image} alt = ""  className='w-[10rem] h-[4.6rem]'/>
      </div>
   
  </div>
  )
}

export default ProductSliderCard