import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Archive from './components/Archive';
import Marketing from './components/Marketing';
import EMag from './components/EMag';
import Partners from './components/events/Partners';
import PartnersDetail from './components/events/PartnersDetail';
import PastEvents from './components/events/PastEvents';
import Supplements from './components/events/Supplements';
import Subscription from './components/Subscription';
import Advertising from './components/Advertising';
import ContactUs from './components/ContactUs';
import Footer from "./components/Footer";

function App() {
  
  const today = new Date();
  const dayOfWeek = today.getDay();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = weekdays[dayOfWeek];
  const date = today.getDate();
  const month = today.getMonth();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthName = months[month];
  const fullDate = `${dayName}, ${monthName} ${date},`;

  const getOrdinalSuffix = day => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  return (
    <Router>
      <img className="banner" src="/images/banner.webp" alt="Banner Image" />
      <div className="day d-flex px-4 py-2">{dayName}&nbsp;
        <div className="date text-white ms-1 px-2">{monthName} {date}{getOrdinalSuffix(date)}</div>
      </div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/marketing" element={<Marketing/>}/>
        <Route path="/emag" element={<EMag/>}/>
        <Route path="/events/partners" element={<Partners/>}/>
        <Route path="/events/partners/detail" element={<PartnersDetail/>}/>
        <Route path="/events/mediabuzz/supplement" element={<Supplements/>}/>
        <Route path="/events/mediabuzz/past" element={<PastEvents/>}/>
        <Route path="/subscribe" element={<Subscription/>}/>
        <Route path="/advert" element={<Advertising/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
