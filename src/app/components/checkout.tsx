"use client"

import { useState } from "react";

// Full country-state mapping
const countryStateMap: Record<string, string[]> = {
  "United States": ["New York", "California", "Texas", "Florida", "Illinois"],
  Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
  "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
  India: ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat"],
  Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia"],
  Germany: ["Bavaria", "Berlin", "Hamburg", "Saxony", "Hesse"],
  France: ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Normandy", "Brittany"],
  Italy: ["Lombardy", "Tuscany", "Sicily", "Veneto", "Lazio"],
  Spain: ["Catalonia", "Andalusia", "Madrid", "Valencia", "Galicia"],
  China: ["Beijing", "Shanghai", "Guangdong", "Zhejiang", "Sichuan"],
  Japan: ["Tokyo", "Osaka", "Hokkaido", "Kyoto", "Fukuoka"],
  Brazil: ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia", "Paraná"],
  Mexico: ["Mexico City", "Jalisco", "Nuevo León", "Yucatán", "Puebla"],
  Russia: ["Moscow", "Saint Petersburg", "Siberia", "Vladivostok", "Kazan"],
  Pakistan:["Sindh","Punjab","KPK","Balochistan"],
  Argentina: ["Buenos Aires", "Córdoba", "Santa Fe", "Mendoza", "Salta"],

};

export default function Checkout() {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    state: string;
    address1: string;
    address2: string;
    postalCode: string;
    note: string;
    paymentMethod: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "United States", // Default country
    state: countryStateMap["United States"][0], // Default state
    address1: "",
    address2: "",
    postalCode: "",
    note: "",
    paymentMethod: "paypal",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "country") {
        return {
          ...prev,
          country: value,
          state: countryStateMap[value]?.[0] || "", // Default first state when country changes
        };
      }
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <form className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              className="border p-2 rounded w-full"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              className="border p-2 rounded w-full"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              className="border p-2 rounded w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              className="border p-2 rounded w-full"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {/* Country Dropdown */}
            <select
              name="country"
              className="border p-2 rounded w-full"
              value={formData.country}
              onChange={handleChange}
            >
              {Object.keys(countryStateMap).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>

            {/* State Dropdown */}
            <select
              name="state"
              className="border p-2 rounded w-full"
              value={formData.state}
              onChange={handleChange}
            >
              {countryStateMap[formData.country]?.map((state: string) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="address1"
              placeholder="Address Line 1 *"
              className="border p-2 rounded w-full"
              value={formData.address1}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              className="border p-2 rounded w-full"
              value={formData.address2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code *"
              className="border p-2 rounded w-full"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="note"
              placeholder="Note"
              className="border p-2 rounded w-full"
              value={formData.note}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between">
            <span>Sub Total</span>
            <span>$250.00</span>
          </div>
          <div className="flex justify-between">
            <span>(+) Shipping</span>
            <span>$20.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>$270.00</span>
          </div>

          <h2 className="text-2xl font-bold mt-4">Payments</h2>
          <div className="mt-2">
            <label className="flex items-center space-x-2">
              <input type="radio" name="paymentMethod" value="check" checked={formData.paymentMethod === "check"} onChange={handleChange} />
              <span>Check Payments</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === "cod"} onChange={handleChange} />
              <span>Cash On Delivery</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="paymentMethod" value="paypal" checked={formData.paymentMethod === "paypal"} onChange={handleChange} />
              <span>PayPal</span>
            </label>
          </div>

          <button className="w-full mt-4 bg-teal-500 text-white py-2 rounded">Proceed to Checkout</button>
        </div>
      </form>
    </div>
  );
}
