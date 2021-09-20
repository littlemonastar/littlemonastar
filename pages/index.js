import { FacebookIcon, FacebookShareButton } from 'next-share'
import { TwitterIcon, TwitterShareButton } from 'next-share'
import { TelegramIcon, TelegramShareButton } from 'next-share'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-black py-2">
      <Head>
        <title>Monatopia</title>
        <link rel="icon" href="/favicon.ico"/>
        <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/6c11584d2f.js" crossorigin="anonymous"></script>
      </Head>
    
    <main className="bg-white p-12 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white">
     <div class="header-card flex justify-between font-semibold">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="">
          <p className="text-5xl text-black">
           Hello, my name is Mona🦁
          </p>
          <p className="text-black text-lg mt-2">
          aka @littlemonastar 🦄❤️‍🔥
          </p>
        </h1>
        <div class="flex-row mt-3">
          <a class="fab fa-github-square fa-3x fa-fw" href="https://github.com/littlemonastar"></a>
          <a class="fab fa-twitter fa-3x fa-fw" href="https://twitter.com/littlemonastar"></a>
          <a class="fab fa-instagram fa-3x fa-fw" href="https://www.instagram.com/littlemonastar/"></a>
        </div>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      


          <a
            href="/experience"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold">Experience / CV 🦄</h3>
            <p className="mt-4 text-xl">
              school {'&'} work {'&'} exhibition
            </p>
          </a>

          <a
            href="/projects"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold"B>Projects 🚀</h3>
            <p className="mt-4 text-xl">
            👾👾👾👾
            </p>
          </a>

          <a
            href="/portfolio"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold">Portfolio 🎨</h3>
            <p className="mt-3 text-xl">
              My artworks
            </p>
          </a>

          <a
            href="/blog"
            className="relative p-6 mt-6 text-left w-96 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-20"
          >
            <h3 className="text-2xl font-bold">Blog 📖</h3>
            <p className="mt-3 text-xl">
              Journal
            </p>
          </a>

          
        </div>
        
       </div>
      </div>
  
    </main>

    

      <footer className="flex items-center justify-center w-full h-24">
      </footer>
    </div>
  )
}
