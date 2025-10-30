import React from 'react'
import { storeData } from "../utills/productsData"
import { useParams } from 'react-router-dom'

const StorePage = () => {
  const { slug } = useParams();
  console.log("heteee", slug)
  const selectedProduct = storeData?.find((product) => product.slug == slug);
  console.log("heere is selectedProduct", selectedProduct)
  return (
    <div>
      <div className='custom-container py-20'>
        <div>
          <button className=" my-20 font-medium text-lg tracking-wide text-[#807d7d] border-b-2 border-transparent hover:border-[#8a8888] transition-ease-in-out duration-300 -pb-4"
           onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>

        <div>
          {/* image */}

          <div>
            <img src={selectedProduct.image} alt="" className='w-[650px] rounded-lg'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default StorePage