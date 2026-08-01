import heroImage from '../assets/images/pp.jpeg'; // أو أي صورة مجلة مباشرة بدون خلفية
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">✦ Custom Gifting Studio ✦</p>
          <h1 className="hero__heading">
            Turning
            <br />
            <em>Memories into </em>
            <br />
            <span className="hero__no-break">Timeless keepsakes</span>
          </h1>
          <p className="hero__desc">
            Turn your cherished photos into stunning magazine covers, newspaper
            prints, polaroid sets, and framed masterpieces — gifts made just for
            you.
          </p>

          <div className="hero__actions">
            <a href="#shop" className="btn btn-primary">
              Shop Now →
            </a>
            <a href="#about" className="btn btn-outline">
              Our Story
            </a>
          </div>

          <div className="hero__stats">
            <div>
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">HAPPY CUSTOMERS</span>
            </div>
            <div>
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">CUSTOM DESIGNS</span>
            </div>
            <div>
              <span className="hero__stat-number">1000+</span>
              <span className="hero__stat-label">MEMORIES CREATED</span>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <img src={heroImage} alt="Collage of custom Vogue-style magazine cover prints" />
          <div className="hero__rating">
            <span className="hero__rating-score">★ 5.0</span>
            <span className="hero__rating-count">500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}