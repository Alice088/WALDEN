import React from "react";
import SliderOfImage1 from "./components/sliders/SliderOfImage1";
import SliderOfImage2 from "./components/sliders/sliderOfImage2";
import arrayImageOfSliderTop from "./arrayImageOfSliderTop";
import arrayImageOfSliderMiddle from "./arrayImageOfSliderMiddle"
import arrayImageOfSliderFooter from "./arrayImageOfSliderFooter.js";
import LogosOtherCompanys from "./components/LogosOtherCompanys";

export default function App() {
  return (
    <div className="font-roboto">

      <header className="h-[762px]"
        style={{backgroundImage: `url(images/header-img.jpeg)`}}>
        <nav>
          <img src="images/icons/Logo-app.png" alt="Walden-icon" />

          <div>
            <a href="#not-link-yet">Meditation Cushions</a>
            <a href="#not-link-yet">The Gong</a>
            <a href="#not-link-yet">Apparel</a>
            <a href="#not-link-yet">ABOUT</a>
            {/* потом каждому линку дать ссылку на айди для прокрутки!!!  */}
            {/* в том смысле когда артикли буду, сейчас пока не надо */}

            <img src="images/icons/circle-nav-icon.svg" alt="circle" />
          </div>
        </nav>
      </header>
 
      <main>
        <article>
          <SliderOfImage1
          head={`We believe everyone needs a space to be present, explore the mind, and find stillness. Walden designs and engineers tools for meditation.`} arrPhoto={arrayImageOfSliderTop}/>
        </article>

      <article className="flex flex-col pl-8 pr-8">
          <div className=" h-[1000px] pt-16 bg-cover bg-center bg-no-repeat grid grid-rows-2"
            style={{ backgroundImage: `url(images/gong.png)` }}>

            <span className="text-white grid row-start-1 gap-5 row-end-2 justify-self-center self-start">
              <h2 className=" text-4xl text-center row-start-1">The Gong</h2>
              <p className=" text-center">An analogue meditation timer</p>
            </span>

            <button className="text-white justify-self-center self-end m-12 p-3
              border-solid w-fit rounded-full border-[1px] hover:bg-black/30">

              Shop Meditation Cushions
            </button>
          </div>
        </article>

        <article>
          <SliderOfImage2 head={`What Makes Our Original Cushions Special`} arrPhoto={arrayImageOfSliderMiddle} className="sliderM"/>
        </article>

        <section className="h-[500px] grid grid-cols-3 grid-rows-2">
          <LogosOtherCompanys img={`images/logos/AD.svg`} alt={`AD-icon`}
            text={`Bolster a newfound interest in meditation or improve a seasoned pro’s setup.`}
          />
          
          <LogosOtherCompanys img={`images/logos/Financial-times.svg`} alt={`Financial-times-icon`}
            text={`Equipment in style`}
          />

          <LogosOtherCompanys img={`images/logos/All-Consuming.svg`} alt={`All-Consuming-icon`}
            text={`Underneath this Mat, could be anything: air, the ocean, Earth.`}
          />

          <LogosOtherCompanys img={`images/logos/DisignMilkco.svg`} alt={`DisignMilkco-icon`}
            text={`A comfortable place to relax so you can dive into your meditation sessions while
             continuing on your self-care practice.`}
          />

          <LogosOtherCompanys img={`images/logos/GQ.svg`} alt={`GQ-icon`}
            text={`Bath oil is cool, but nothing will reduce mom's raging stress levels like meditation.`}
          />

          <LogosOtherCompanys img={`images/logos/BuzzFeed.svg`} alt={`BuzzFeed-icon`}
            text={`The best meditation cushion on Earth`}
          />
        </section>

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
          <SliderOfImage1 head={`Writings by the Walden Team`} arrPhoto={arrayImageOfSliderFooter} className="sliderF"/>
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

            <address>love@walden.us</address>

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
