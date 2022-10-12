
import Button from './Button'

type ProductTypeProps ={
  
   new : {
    id : string,
    name : string,
    price : number,
    image : string
  }
}



const ProductCard  = (props : ProductTypeProps) => {
  return (
	<div className = "bg-white w-[8rem] h-[11rem]  p-[1.5rem]  flex flex-col gap-y-[.6rem] hover:cursor-pointer  " key = {props.new.id}>
      
      <div className = "">
       <img src ={props.new.image} alt = ""  className='w-[6rem] h-[4.6rem]'/>
      </div>
    <div className = " flex flex-col justify-center items-center">
      <div className = "font-bold text-[.7rem] font-mono text-black">
         {props.new.name}
      </div>
      <div className = "font-bold text-[.7rem] font-mono text-black">
         {props.new.price}
      </div>
      <Button>Add to Cart</Button>
    </div>
  </div>
  )
}

export default ProductCard