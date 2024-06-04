import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import rass from "./assets/photo_2024-05-25_10-09-10.jpg"
import Card2 from "./Card";

import Stel from "./Stel";
function Home(){
    return(
        <>
        <Navbar/>
        <img src={rass} alt="" className="as"/>
        <Card2/>
       
        <Stel/>
        </>
    )
}

export default Home;