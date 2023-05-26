
const CheckOut = () => {
  return (
    <div className='bg-lightgray'>
      <main className="lg:flex mx-w-screen-2xl mx-auto">
        {/*left */}
        <div className="flex-grow m-5 shaddow-sm">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/pricepointstore/clothing/199/under-199-desktop-header.jpg" alt=""
          width={1020}
          height={250}
          objectFit='contain'
          />
        </div>
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
        </div> 
        {/*right */}
      </main>
    </div>
  )
}

export default CheckOut