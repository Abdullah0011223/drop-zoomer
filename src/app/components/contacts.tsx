import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full">
        <Image 
          src="/mnt/data/image.png" 
          alt="Contact Support" 
          width={500} 
          height={500} 
          className="rounded-lg"
        />
      </div>
      
      {/* Right Side - Form and Contact Info */}
      <div className="md:w-1/2 w-full md:pl-8">
        <h3 className="text-teal-500 text-sm font-semibold">Send us email</h3>
        <h2 className="text-2xl font-bold mb-4">Feel Free to Write</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="Enter Name" className="p-3 border rounded-lg w-full" />
          <input type="email" placeholder="Enter Email" className="p-3 border rounded-lg w-full" />
          <input type="text" placeholder="Enter Subject" className="p-3 border rounded-lg w-full" />
          <input type="text" placeholder="Enter Phone" className="p-3 border rounded-lg w-full" />
        </div>
        <textarea placeholder="Enter Message" className="p-3 border rounded-lg w-full h-32 mb-4"></textarea>
        <button className="bg-teal-500 text-white py-2 px-6 rounded-lg">Send Message</button>
        
        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-teal-500 text-white p-4 rounded-lg text-center">
            <p className="font-semibold">For any Query?</p>
            <p>Free +68 (025)-9875</p>
            <p>Free +68 (026)-9879</p>
          </div>
          <div className="bg-teal-500 text-white p-4 rounded-lg text-center">
            <p className="font-semibold">Write Email Us</p>
            <p>[email protected]</p>
            <p>[email protected]</p>
          </div>
          <div className="bg-teal-500 text-white p-4 rounded-lg text-center">
            <p className="font-semibold">Visit Anytime</p>
            <p>427 Hall Place</p>
            <p>Longview, Texas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
