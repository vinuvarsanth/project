import { Route ,Routes ,BrowserRouter } from "react-router-dom";
import SignupPage from "./LoginSignup/Sign";
import Home from "./Home";
import Login from "./LoginSignup/Login";
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import ProductTable from "./ProductTable"
import { useContext } from "react";
import { userContext } from "./Context";
import { useState } from "react";
import { Provider } from "react";
function App(){
    const [user, setuser] = useState('');
    return(
        
        <BrowserRouter>
        <userContext.Provider value = {[user, setuser]}>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/signin' element={<SignupPage/>}/>
            <Route path='/log' element={<Login/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/ProductTable' element={<ProductTable/>}/>
        </Routes>
        </userContext.Provider>
        </BrowserRouter>

    )
}
export default App;