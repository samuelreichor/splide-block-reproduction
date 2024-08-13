import './style.css'

// Try to remove all splide related imports for comparison
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import Splide from '@splidejs/splide';

  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
    console.log('js runs and is not blocked')
  } );

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="wrapper">
    <section class="splide" aria-label="Splide Basic HTML Example">
      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">Slide 01</li>
          <li class="splide__slide">Slide 02</li>
          <li class="splide__slide">Slide 03</li>
        </ul>
      </div>
    </section>
  </div>
`
