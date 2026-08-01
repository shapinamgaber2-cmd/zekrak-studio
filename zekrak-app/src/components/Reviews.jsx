import './Reviews.css';

const REVIEWS = [
  {
    initial: 'S',
    name: 'Sara M.',
    city: 'Cairo',
    quote: 'The Vogue cover print was absolutely stunning. My best friend cried when she opened it!',
  },
  {
    initial: 'L',
    name: 'Layla K.',
    city: 'Alexandria',
    quote: 'Got the graduation newspaper for my sister — the quality blew us away. Will order again.',
  },
  {
    initial: 'N',
    name: 'Nour A.',
    city: 'Giza',
    quote: 'The polaroid set felt so nostalgic and real. Packaged beautifully too!',
  },
  {
    initial: 'D',
    name: 'Dina R.',
    city: 'Maadi',
    quote: "Best gift I've ever given. The framed collage is now the centerpiece of her room.",
  },
];

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews__intro">
          <p className="eyebrow">✦ Reviews ✦</p>
          <h2 className="section-heading reviews__heading">What Our Customers Say</h2>
        </div>

        <div className="reviews__grid">
          {REVIEWS.map((review) => (
            <figure className="review-card" key={review.name}>
              <div className="review-card__stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="review-card__quote">“{review.quote}”</blockquote>
              <figcaption className="review-card__author">
                <span className="review-card__avatar">{review.initial}</span>
                <span>
                  <span className="review-card__name">{review.name}</span>
                  <span className="review-card__city">{review.city}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
