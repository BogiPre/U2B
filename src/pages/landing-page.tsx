import { createEffect, createSignal } from "solid-js";
import anime from 'animejs';





export default function LandingPage() {



  createEffect(() => {
    anime({
      targets: '.converter-title',
      translateY: [-100, 0],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)',
    });
  });

  return (
<div class="h-full bg-gray-200 flex flex-col overflow-y-auto">

<header class="bg-gray-700 text-white p-4">
  <h1 class="text-2xl font-semibold">YouTube to MP3 & MP4 Converter</h1>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />
</header>

<main class="flex-grow p-4 bg-gray-200">
  <div class="container mx-auto grid lg:grid-cols-3 gap-4">

    <div class="bg-white rounded-lg shadow-md p-6 text-center">
      <i class="fas fa-music text-4xl mb-4"></i>
      <h2 class="text-2xl font-semibold">High-Quality Conversion</h2>
      <p class="mt-4">Our tool provides top-notch MP3 conversion quality. Enjoy your music at its best.</p>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 text-center">
      <i class="fas fa-rocket text-4xl mb-4"></i>
      <h2 class="text-2xl font-semibold">Fast and Reliable</h2>
      <p class="mt-4">Super fast conversions. Convert YouTube videos to MP3 files in seconds.</p>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 text-center">
      <i class="fas fa-mobile-alt text-4xl mb-4"></i>
      <h2 class="text-2xl font-semibold">Mobile Friendly</h2>
      <p class="mt-4">Our tool is fully responsive and works perfectly on mobile devices.</p>
    </div>

  </div>
</main>
<section>

</section>


<section class="p-4 m-4 border-2 border-black rounded-3xl overflow-x-auto">
  <h3 class="text-2xl font-semibold text-center">Why Choose Our Converter?</h3>
  <div class="flex justify-around mt-4">
    <div class="text-center">
      <i class="fas fa-lock text-4xl"></i>
      <p class="font-semibold">Secure</p>
      <p>Your data is safe and secure with us.</p>
    </div>
    <div class="text-center">
      <i class="fas fa-headphones text-4xl"></i>
      <p class="font-semibold">Best Audio Experience</p>
      <p>Enjoy the best audio experience with our high-quality conversions.</p>
    </div>
    <div class="text-center">
      <i class="fas fa-users text-4xl"></i>
      <p class="font-semibold">Excellent Support</p>
      <p>We provide excellent support for our users.</p>
    </div>
  </div>
</section>


<footer class="bg-gray-700 text-white p-4">
  <div class="text-center">
    <p>&copy; 2023 U2B MP3 Converter</p>
  </div>
</footer>

</div>
  );
}
