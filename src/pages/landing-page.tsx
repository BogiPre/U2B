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

  createEffect(() => {
    anime({
      targets: '.converter-title',
      translateY: [-100, 0],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)',
    });

    // Additional animation for stats
    anime({
      targets: '#animated-stats',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeOutElastic(1, .8)',
      delay: 500 // delay to make it appear after initial animation
    });

    // Counter animation for stats
    const animateValue = (elementId: string, endValue: number) => {
      anime({
        targets: `#${elementId}`,
        innerHTML: [0, endValue],
        duration: 2000,
        round: 1,
        easing: 'easeInOutExpo'
      });
    };

    animateValue('conversions', 94321);
    animateValue('time-saved', 6789);
    animateValue('supported-formats', 2);
  });



  return (
    <div class="h-full w-full bg-gray-200 flex flex-col justify-between overflow-y-auto">
        <header class="bg-gray-700 text-white p-4">
          <h1 class="text-2xl font-semibold">YouTube to MP3 & MP4 Converter</h1>
        </header>

        <section class="p-4 bg-gray-200 h-min">
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
        </section>

        <section class="p-4 bg-white rounded-lg shadow-md container mx-auto">
          <h3 class="text-2xl font-semibold text-center mb-4" id="stats-title">Our Achievements</h3>
          <div class="container mx-auto flex flex-col md:flex-row justify-around items-center mt-4" id="animated-stats">
            <div class="text-center mb-4 md:mb-0 md:w-1/3">
              <p class="font-semibold text-4xl" id="conversions">0</p>
              <p>Conversions Done</p>
            </div>
            <div class="text-center mb-4 md:mb-0 md:w-1/3">
              <p class="font-semibold text-4xl" id="time-saved">0</p>
              <p>Hours Saved</p>
            </div>
            <div class="text-center md:w-1/3">
              <p class="font-semibold text-4xl" id="supported-formats">0</p>
              <p>Supported Formats</p>
            </div>
          </div>
        </section>



        <section class="p-4 m-4 border-2 border-black rounded-3xl container mx-auto">
          <h3 class="text-2xl font-semibold text-center mb-4">Why Choose Our Converter?</h3>
          <div class="flex flex-col md:flex-row justify-around items-center flex-wrap mt-4">
            <div class="text-center mb-4 md:mb-0 md:w-1/3">
              <i class="fas fa-lock text-4xl"></i>
              <p class="font-semibold">Secure</p>
              <p>Your data is safe and secure with us.</p>
            </div>
            <div class="text-center mb-4 md:mb-0 md:w-1/3">
              <i class="fas fa-headphones text-4xl"></i>
              <p class="font-semibold">Best Audio Experience</p>
              <p>Enjoy the best audio experience with our high-quality conversions.</p>
            </div>
            <div class="text-center md:w-1/3">
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
