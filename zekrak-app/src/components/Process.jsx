import './Process.css';
import choose from '../assets/images/colours2.png';
import send from '../assets/images/send3.png';
import art from '../assets/images/art.png';
import delivery from '../assets/images/express2.png';
const STEPS = [
  {
    number: '01',
    icon: choose,
    title: 'Choose your product',
    desc: 'Browse our collection and pick the perfect style for your gift.',
  },
  {
    number: '02',
    icon: send,
    title: 'Start your order',
    desc: 'Register your contact info and We will send you a drive link to upload your photos on it via Whatsapp',
  },
  {
    number: '03',
    icon: art,
    title: 'We design it',
    desc: 'Our designers craft your print with care and precision.',
  },
  {
    number: '04',
    icon:delivery,
    title: 'Delivered to you',
    desc: 'Beautifully packaged gift as soon as possible.',
  },
];

export default function Process() {
  return (
    <section className="process" id="how-it-works">
      <div className="container">
        <div className="process__intro">
          <p className="eyebrow">✦ Process ✦</p>
          <h2 className="section-heading process__heading">How It Works</h2>
        </div>

        <div className="process__grid">
          {STEPS.map((step) => (
            <div className="process__card" key={step.number}>
              <div className="process__top">
                <span className="process__icon" aria-hidden="true">
                  {typeof step.icon === 'string' && (step.icon.endsWith('.jpg') || step.icon.endsWith('.png') || step.icon.includes('/')) ? (
                    <img src={step.icon} alt={step.title} />
                  ) : (
                    step.icon
                  )}
                </span>
                <span className="process__number">{step.number}</span>
              </div>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}