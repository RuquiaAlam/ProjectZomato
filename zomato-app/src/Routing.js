import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./Header";
import Footer from "./Footer";
const Routing =()=>
{
return(
    <BrowserRouter>
    <>
    <Header/>

<Routes>
<Route path ="/" element ={<Home/>}/>
{/* <Route path ="/listing/:mealId" element ={<Listing/>}/> */}
</Routes>


    <Footer/>
    </>
    </BrowserRouter>
   );

}
export default Routing;
