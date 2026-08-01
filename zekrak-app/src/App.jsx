import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Process from './components/Process';
import Featured from './components/Featured';
import Reviews from './components/Reviews';
import Story from './components/Story';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Process />
        <Featured />
        <Reviews />
        <Story />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
