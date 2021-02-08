import { BiLinkAlt } from "react-icons/bi";
import heroImage from '../src/images/hero.png';

function App() {
  return (
    <>
      <div className="container mx-auto max-w-7xl ">
        <div className="flex nav p-5 pt-12">
          <span className="text-colors-light">
            <BiLinkAlt size={35} />
          </span>
          <h1 className="text-2xl font-semibold pt-2 pl-0">
            URL<span className="font-extralight">shorter</span>{" "}
          </h1>

          <button className="bg-colors-green-100 ml-auto text-colors-light pl-4 pr-4">
            {" "}
            Buy me a cup of coffee
          </button>
        </div>
      </div>
      <div className="flex flex-col pl-5 pr-5">
        <figure className='mt-0'>
          <img  className='m-auto' src={heroImage} alt="hero"/>
        </figure>
        <h1 className="font-semibold m-auto text-6xl md:text-7xl">
          Shorten Any Links
          <span className=" font-semibold text-colors-light">.</span>
        </h1>
        <p className="m-auto">
          Build and protect your brand using powerful and recognizable short
          links. <span className="text-colors-light"> It's free forever.</span>{" "}
        </p>
        <div className="flex col-span-1 mx-auto">
          <input
            className="mt-7 mb-5 pl-3 md:pl-16 focus:ring-4 rounded-md focus:ring-offset-colors-light bg-colors-gray-100 max-w-lg text-colors-gray-600 p-3 pr-10"
            placeholder="Type or paste your link"
          />
          <button className="bg-colors-light font-medium ml-3 mt-7 mb-5 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-colors-white pl-4 pr-4">
            {" "}
            Shorten
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
