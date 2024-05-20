import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from './layout';

const Home = lazy(() => import("./public/home"));
const Contact = lazy(() => import("./public/contact"));
const About = lazy(() => import("./public/about"));
const FAQ = lazy(() => import("./public/faq"));
const Help = lazy(() => import("./public/help"));

function App() {
  return (
    <Suspense fallback={
      <div >
        <p>Loading...</p>
      </div>
    }>
      <Routes element={<PublicLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/help' element={<Help />} />
        <Route element={<p>Not found</p>} />
      </Routes>
    </Suspense>
  );
}

export default App;
