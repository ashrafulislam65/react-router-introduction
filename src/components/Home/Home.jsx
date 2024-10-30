
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Heared/Header";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;