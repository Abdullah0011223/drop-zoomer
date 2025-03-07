import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 flex items-center justify-center text-center px-4">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/banner.jpg" 
                        alt="Standard Blog Banner"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="opacity-90"
                        priority
                    />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/80 to-blue-500/80"></div>

                {/* Content */}
                <div className="relative z-10 text-white w-full max-w-2xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Standard Blog</h1>
                    <p className="mt-2 text-sm sm:text-base md:text-lg">
                        <Link href="/" className="text-blue-300 hover:underline">
                            Home
                        </Link>{" "}
                        &raquo; Standard Blog
                    </p>
                </div>
            </div>
        </div>
    );
}
