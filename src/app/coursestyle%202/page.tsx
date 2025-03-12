import CourseStyle2 from "../components/coursestyle2";
import Image from "next/image";
import Link from "next/link";



export default function coursestyle2(){
    return(
        <div>
            <div className="relative w-full min-h-[50vh] flex items-center justify-center text-center px-4">
                    <Image
                        src="/images/banner.jpg"
                        alt="Standard Blog Banner"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-500/80 to-blue-500/80"></div>
                    <div className="relative z-10 text-white w-full max-w-2xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Course Style 2</h1>
                        <p className="mt-2 text-sm sm:text-base md:text-lg">
                            <Link href="/" className="text-blue-300 hover:underline">Home</Link> &raquo;Course Style 2
                        </p>
                    </div>
                </div>
            <CourseStyle2 />
           
        </div>
    )
}