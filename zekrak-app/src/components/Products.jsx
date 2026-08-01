import { useMemo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { CATEGORIES, PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import './Products.css';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="products" id="shop">
      <div className="container">
        <div className="products__intro">
          <p className="eyebrow">✦ Our Collection ✦</p>
          <h2 className="section-heading products__heading">Every Memory, A Masterpiece</h2>
          <p className="section-sub">Handcrafted, personalized gifts that feel impossibly special.</p>
        </div>

        <div className="products__filters" role="tablist" aria-label="Filter products by category">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`products__filter ${activeCategory === category ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products__slider">
          <button
            ref={prevRef}
            type="button"
            className="products__nav products__nav--prev"
            aria-label="Previous products"
          >
            ‹
          </button>

          <Swiper
            key={activeCategory}
            modules={[Navigation, A11y]}
            spaceBetween={24}
            slidesPerView={1.15}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              600: { slidesPerView: 2, spaceBetween: 24 },
              1000: { slidesPerView: 3, spaceBetween: 28 },
            }}
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={nextRef}
            type="button"
            className="products__nav products__nav--next"
            aria-label="Next products"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
