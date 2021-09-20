import Link from 'next/link'
import React from 'react'

const Button = React.forwardRef(({ onClick, href }, ref) =>{
    return(
        <a href={href} onClick={onClick} ref={ref}>
        ⬅　Back
        </a>
    )
})


function Experience(){
    return <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-black py-2">

    <main className="bg-white p-12 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white">
        <div class="text-4xl font-semibold">Experience</div>
        <p class="text-xl mt-4 max-w-lg">
            <h3 className="mt-6 text-xl font-semibold underline">EDUCATION</h3>
                <h4 className="mt-3">
                    Associate in Arts, Foothill College, Los Altos, CA
                    <h4 className="text-sm text-gray-600">
                        September 2013 - 2015</h4>
                    Bachelor of fine ARTs, Digital Media ART, San Jose State University, San Jose, CA
                    <h4 className="text-sm text-gray-600">
                        August 2018 - August 2021</h4>
                </h4><br/ >
            <h3 className="mt-3 text-xl font-semibold underline">WORK EXPERIENCE</h3>
                <h4 className="mt-3">
                    Web designer/interior designer, Kitami, San carlos, CA
                    <h4 className="text-sm text-gray-600">
                    September 2017 - February 2018</h4>
                    Field test supporter, Kaga electronics Inc, San jose, CA
                    <h4 className="text-sm text-gray-600">
                    June 2020 - August 2020</h4>
                </h4><br/ >
            <h3 className="mt-3 text-xl font-semibold underline">EXHIBITION</h3>   
                <h4 className="mt-3">
                    Group Exhibition, Digital Autonomy, New Art City,
                    <h4 className="text-gray-600 text-sm">
                    May 2021</h4>
                    Group Exhibition, RE:SET, New Art City,
                    <h4 className="text-gray-600 text-sm">
                    May 2021 </h4>
                </h4>   
                <br /> 
        </p>

        
        <Link href="/" class="mt-4 p-12" passHref>
             <Button />
        </Link> 
    </main>

    

    </div>
}

export default Experience