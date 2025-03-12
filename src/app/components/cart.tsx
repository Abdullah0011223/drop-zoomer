"use client"

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: "Financial Security Thinking", price: 80, quantity: 1, image: "/images/course1.jpg" },
    { id: 2, name: "Financial Security Thinking", price: 80, quantity: 2, image: "/images/course2.jpg" },
    { id: 3, name: "Financial Security Thinking", price: 80, quantity: 4, image: "/images/course3.jpg" },
  ]);
  
  const [coupon, setCoupon] = useState("");

  const updateQuantity = (id: number, amount: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2">
          <div className="border rounded-lg p-4">
            <div className="grid grid-cols-5 gap-4 font-semibold border-b pb-2">
              <span>Product</span>
              <span>Unit Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Remove</span>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-5 items-center gap-4 py-4 border-b">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <div className="flex items-center">
                  <button className="px-2 border rounded-l bg-gray-200" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button className="px-2 border rounded-r bg-gray-200" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
                <p>${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeItem(item.id)} className="text-red-500">
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="border rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-2">Cart Totals</h3>
          <p className="flex justify-between mb-2"><span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span></p>
          <p className="flex justify-between mb-2"><span>Shipping:</span> <span>$50.00</span></p>
          <p className="flex justify-between font-bold text-lg mb-4"><span>Total:</span> <span>${total.toFixed(2)}</span></p>
          
          <input 
            type="text" 
            placeholder="Coupon code" 
            value={coupon} 
            onChange={(e) => setCoupon(e.target.value)} 
            className="w-full border p-2 rounded-md mb-2"
          />
          <button className="w-full bg-teal-500 text-white py-2 rounded-md mb-2 cursor-pointer">Apply Coupon</button>
          <Link href ="/checkout">
          <button className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
