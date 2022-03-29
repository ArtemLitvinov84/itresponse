
import { Social } from "./social";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { News } from "./news";
import { Gallery } from "./gallery";
import { Contacts } from "./contacts";
import { About } from "./about";

export const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route index element={<Social />} />
                <Route path="news" element={<News />} />  
                <Route path="gallery" element={<Gallery />} />  
                <Route path="contacts" element={<Contacts />} />  
                <Route path="about" element={<About />} />                      
            </Routes>   
            </div>
        
        
    );
}