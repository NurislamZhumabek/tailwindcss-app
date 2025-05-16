import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import Footer from "./Foter";

function App() {
    return (
        <div className="App">
            <Home />
            <About/>
            <Work/> 
            <Testimonial/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;