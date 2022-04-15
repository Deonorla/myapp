import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetups from './pages/NewMeetups';
import Favourites from './pages/Favourites'
import MainNavigation from './components/Layout/MainNavigation';

function App(){
    return(  
        <Router>
        <div>
        <MainNavigation/>
           
            <main>
                    <Routes>
                         <Route exact path="/" element={<AllMeetupsPage/>}/>
                         <Route  path="/new" element={<NewMeetups/>}/>
                         <Route  path="/fav" element={<Favourites/>}/>
                    </Routes> 
            </main>
           
        </div>
        </Router>
    )

}
export default App;