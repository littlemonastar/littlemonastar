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
    
    <main className="p-12 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg">
     <div class="header-card flex justify-between font-semibold">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="">
          <p className="text-6xl text-black">
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
            className="bg-white relative p-6 mt-6 text-center w-96 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white"
          >
            <h3 className="text-2xl font-bold text-center">About 🦄</h3>
            <p className="mt-4 text-xl">
              Bio / CV
            </p>
          </a>

          <a
            href="/projects"
            className="bg-white relative p-6 mt-6 text-center w-96 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white"
          >
            <h3 className="text-2xl font-bold"B>Projects 🚀</h3>
            <p className="mt-4 text-xl text-center">
            👾👾👾👾
            </p>
          </a>


          <a
            href="https://chemical-office-f47.notion.site/4e8938ec9f27415cbb4bb51dbd286602?v=7ff755f0c9a44ce196f222ea02f66bef"
            className="bg-white relative p-6 mt-6 text-center w-96 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white"
          >
            <h3 className="text-2xl font-bold">Blog 📖</h3>
            <p className="mt-3 text-xl">
              Journal
            </p>
          </a>

          <a
            href="/mission"
            className="bg-white relative p-6 mt-6 text-center w-96 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg border-8 border-white"
          >
            <h3 className="text-2xl font-bold">mission 🔥</h3>
            <p className="mt-3 text-xl">
              The mission of my life
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
