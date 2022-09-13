import React from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(next);
      });
    });
  };
}

export default function ProductImageSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <div className="">
      <div ref={sliderRef} className="keen-slider my-5">
        <div className="keen-slider__slide">
          <Image
            src="/assets/images/image-product-1.jpg"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/assets/images/image-product-2.jpg"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src="/assets/images/image-product-3.jpg"
            layout="fill"
            className="rounded-xl"
          />
        </div>
        <div className="keen-slider__slide">
          <img
            src="/assets/images/image-product-4.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div className="keen-slider__slide hover:cursor-pointer">
          <img
            src="/assets/images/image-product-1-thumbnail.jpg"
            alt=""
            className="rounded-xl active:border-2 active:border-orange"
          />
        </div>
        <div className="keen-slider__slide hover:cursor-pointer ">
          <img
            src="/assets/images/image-product-2-thumbnail.jpg"
            alt=""
            className="rounded-xl active:border-2 active:border-orange"
          />
        </div>
        <div className="keen-slider__slide hover:cursor-pointer">
          <img
            src="/assets/images/image-product-3-thumbnail.jpg"
            alt=""
            className="rounded-xl active:border-2 active:border-orange"
          />
        </div>
        <div className="keen-slider__slide hover:cursor-pointer">
          <img
            src="/assets/images/image-product-4-thumbnail.jpg"
            alt=""
            className="rounded-xl active:border-2 active:border-orange"
          />
        </div>
      </div>
    </div>
  );
}
