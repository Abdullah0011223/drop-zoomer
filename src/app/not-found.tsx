import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
      <Image 
        src="/images/404.svg" 
        alt="404 Error" 
        width={500} 
        height={500} 
      />
      <h1 className="text-2xl font-bold mt-4">Page not found: /error</h1>
      <p className="text-gray-600 mt-2">Please try searching for some other page.</p>
      <Link href="/">
        <button className="mt-6 bg-teal-500 text-white py-2 px-6 rounded-lg">Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
