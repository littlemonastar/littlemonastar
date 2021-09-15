import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-2">
      <Head>
        <title>Monatopia</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-mono">
          <a className="text-red-700 text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500" href="https://nextjs.org">
           Mona Kaji 
          </a>
        </h1>

        <p className="mt-3 text-2xl">
         {' '}
          <code className="p-3 font-mono text-lg bg-white hover:text-gray-50 focus:text-white rounded-md"> I'm a creator/entrepreneur. 
          </code>
        </p>

        

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl bg-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">About</h3>
            <p className="mt-4 text-xl">
              About Me
            </p>
          </a>

          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl bg-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Experience / CV</h3>
            <p className="mt-4 text-xl">
              Life Goal
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl bg-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold"B>Projects</h3>
            <p className="mt-4 text-xl">
              project
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl bg-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Portfolio</h3>
            <p className="mt-3 text-xl">
              Add later
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl bg-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Blog</h3>
            <p className="mt-3 text-xl">
              Add later
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl bg-white hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Goal</h3>
            <p className="mt-4 text-xl">
            test
            </p>
          </a>

          
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
