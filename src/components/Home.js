

export default function Home() { 
  
  return(
    <section class="bg-gray-900 text-white bg-opacity-70">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class=" h-[4rem] bg-gradient-to-r from-orange-500 via-blue-600 to-green-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Totally Organic, since 1985.
      </h1>
        
      

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Building for a sustainbaile future
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
       

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
  
    ); 



}