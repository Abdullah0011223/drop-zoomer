import Image from "next/image"
import Link from "next/link"

export default function Contact() {
    return (
        <div>
            <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center text-center">
                {/* Background Image */}
                <div className="absolute inset-0 mt-5">
                    <Image
                        src="/images/banner.jpg" // Update with your banner image path
                        alt="About Us Banner"
                        layout="fill"
                        objectFit="cover"
                        className="opacity-90"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/70 to-blue-500/70"></div>
                <div className="relative z-10 text-white">
                <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
                <p className="mt-2 text-lg">
                    <Link href="/" className="text-blue-300 hover:underline">
                        Home
                    </Link>{" "}
                    &raquo; Contact Us
                </p>
            </div>
            </div>
           
        </div>
    )
}