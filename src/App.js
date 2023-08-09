import React from "react";
import SliderOfImage1 from "./components/sliders/SliderOfImage1";
import ArrayImageSliderFooter from "./ArrayImageSliderFooter.js";
import LogosOtherCompanys from "./components/LogosOtherCompanys";

export default function App() {
  return (
    <div className="font-roboto">

      <header>
        {/* дать ему граунд и нормально настроить хедер  */}
        <nav>
          <img src="images/icons/Logo-app.png" alt="Walden-icon" />

          <div>
            <a href="#not-link-yet">Meditation Cushions</a>
            <a href="#not-link-yet">The Gong</a>
            <a href="#not-link-yet">Apparel</a>
            <a href="#not-link-yet">ABOUT</a>
            {/* потом каждому линку дать ссылку на айди для прокрутки!!!  */}
            {/* в том смысле когда артикли буду, сейчас пока не надо */}

            <img src="images/icons/circle-nav-icon" alt="circle" />
          </div>
        </nav>
      </header>

      <main>
        <article className="h-[500px] grid grid-cols-3 grid-rows-2">
          <LogosOtherCompanys img={`images/logos/AD.svg`} alt={`AD-icon`}
            text={`Bolster a newfound interest in meditation or improve a seasoned pro’s setup.`}
          />
          
          <LogosOtherCompanys img={`images/logos/AD.svg`} alt={`AD-icon`}
            text={`Bolster a newfound interest in meditation or improve a seasoned pro’s setup.`}
          />

          <LogosOtherCompanys img={`images/logos/AD.svg`} alt={`AD-icon`}
            text={`Bolster a newfound interest in meditation or improve a seasoned pro’s setup.`}
          />

          <LogosOtherCompanys img={`images/logos/AD.svg`} alt={`AD-icon`}
            text={`Bolster a newfound interest in meditation or improve a seasoned pro’s setup.`}
          />

          <LogosOtherCompanys img={`images/logos/AD.svg`} alt={`AD-icon`}
            text={`Bolster a newfound interest in meditation or improve a seasoned pro’s setup.`}
          />

          <LogosOtherCompanys img={`images/logos/AD.svg`} alt={`AD-icon`}
            text={`Bolster a newfound interest in meditation or improve a seasoned pro’s setup.`}
          />
        </article>

        <article className="flex flex-col pl-8 pr-8">
          <div className=" h-[1000px] bg-cover bg-center bg-no-repeat grid grid-rows-2"
            style={{ backgroundImage: `url(images/blueHumanBackground.jpeg)` }}>

            <p className="text-white grid row-start-1 row-end-2 justify-self-center self-center">
              Space for the self.
            </p>

            <button className="text-white justify-self-center self-end m-12 p-3
              border-solid w-fit rounded-full border-[1px] hover:bg-black/30">

              Shop Meditation Cushions
            </button>
          </div>
        </article>

        <article>
          <SliderOfImage1 head={`Writings by the Walden Team`} arrPhoto={ArrayImageSliderFooter} />
        </article>
      </main>

      <footer className="m-0 mt-[139px]">
        <div className="flex flex-col mb-[103px] items-center gap-y-3 text-neutral-400">
          <p>Sign up for our newsletter</p>

          <form method='get'>
            <input type='email' placeholder='Enter email' className='text-center w-80 border-[1px] border-solid  border-neutral-300 rounded-3xl'></input>
          </form>

        </div>

        <div className='flex flex-col text-neutral-400'>
          <div className="flex justify-around m-3">
            <p>© 2021 Walden</p>

            <p>FAQ</p>

            <p>Reading</p>

            <p>love@walden.us</p>

            <p>Wholesale</p>
          </div>

          <div className="flex h-16 flex-col justify-center bg-neutral-200">
            <p className=" text-zinc-700 text-center">
              Free Shipping Over $100, Returns, and a One-Year Warranty
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
