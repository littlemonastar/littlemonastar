import Link from 'next/link'
import React from 'react'

const Button = React.forwardRef(({ onClick, href }, ref) =>{
    return(
        <a href={href} onClick={onClick} ref={ref}>
        ⬅　Back
        </a>
    )
})

function Mission(){
    return <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-black py-2">
        
        <main className="bg-white p-12 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white">
        <div class="text-4xl font-semibold">Mission 🔥
            <p class="text-xl mt-4 max-w-lg">
                <h3 className="mt-3 font-semibold">
                    To offer a space for your peace of mind, I will spread love and kindness.

                </h3>

                <br/>
                <Link href="/" class="mt-4 p-12" passHref>
                    <Button />
                </Link>    
                
            </p>
                

            
        </div>
    </main>







          
    </div>
}

export default Mission