import React from 'react';
import SliderOfImage from './components/SliderOfImage';
import arrayPhoto from './arrayPhotoOne.js';
import arrayPhoto2 from './arrayPhotoTwo.js';

export default function App() {
	return (
		<div className='font-roboto'>
			<header className='w-full p-9 flex items-center justify-between'>
				<p>Walden app</p>
				<ul className='flex gap-2'>
					<li>Home</li>
					<li>Contacts</li>
				</ul>
			</header>

      <main >
        <SliderOfImage arrPhoto={arrayPhoto2}/>
      </main>

			<main>
				<SliderOfImage head={`Writings by the Walden TeamWritings by the Walden Team`} arrPhoto={arrayPhoto} />
			</main>

			<footer>
				<div className='flex flex-col mb-14 items-center gap-y-3 text-neutral-400'>
					<p>Sign up for our newsletter</p>

					<form method='get'>
						<input type='email' placeholder='Enter email' className='text-center w-80 border-[1px] border-solid  border-neutral-300 rounded-3xl'></input>
					</form>
				</div>

				<div className='flex justify-around text-neutral-400 m-3'>
					<p>© 2021 Walden</p>

					<p>FAQ</p>

					<p>Reading</p>

					<p>love@walden.us</p>

					<p>Wholesale</p>

					<p>Instagram</p>
				</div>

				<div className='flex h-16 flex-col justify-center bg-neutral-100'>
					<p className=' text-zinc-700 text-center'>Free Shipping Over $100, Returns, and a One-Year Warranty</p>
				</div>
			</footer>
		</div>
	);
}
