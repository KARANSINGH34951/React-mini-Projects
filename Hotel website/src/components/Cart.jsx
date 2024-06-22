import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemList from '../components/Itemlist';
import { clearCart } from '../utili/Cartslice';

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);

  // Calculate total bill
  const totalBill = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold text-center mb-8'>Cart</h1>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-xl font-semibold'>Your Items</h2>
          <button
            className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50'
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        {cartItems.length === 0 ? (
          <div className='text-center text-gray-500'>
            <h2 className='text-2xl'>Cart is Empty</h2>
            <p>Add some items to your cart!</p>
          </div>
        ) : (
          <>
            <ItemList items={cartItems} />
            <div className='flex justify-end mt-6'>
              <div className='text-right'>
                <h2 className='text-xl font-semibold'>Total Bill: ${totalBill.toFixed(2)}</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
