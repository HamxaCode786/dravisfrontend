import Layout from "./global/layout";
import HomePage from "./pages/homepage";
import {Routes, Route} from 'react-router-dom';
import Startsale from './pages/startsale';
import Loginpage from './pages/loginpage';
import Myadpage from './pages/myadpage';
import Inbox from './pages/inbox';
import Favourites from "./pages/favourites";
import Billings from './pages/billings';
import Profilesection from "./pages/profilesection";
import Sellerlist from './pages/sellerlist';
import Controlnotice from './pages/controlnotice'
import Dealcreation from './pages/dealcreation'
import Purchasepage from "./pages/purchasepage";
import Pinlisting from "./pages/pinlisting";
import Registration from "./pages/registration";
import Homepage2 from "./pages/homepage2";
import Apiprac from './pages/apiprac';
import Forgetpassword from "./pages/forgetpassword";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './style/style.css';
        
//import { faBell, faInbox, faSquare } from '@fortawesome/free-solid-svg-icons';


function App() {

  return (
    <div className="App">
      <Layout>
       
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/startsale" exact element={<Startsale />} />
          <Route path="/Loginpage" exact element={<Loginpage />} />
          <Route path="/myadpage" exact element={<Myadpage />} />
          <Route path="/inbox" exact element={<Inbox />} />
          <Route path="/favourites" exact element={<Favourites />} />
          <Route path="/billings" exact element={<Billings />} />
          <Route path="/profilesection" exact element={<Profilesection />} />
          <Route path="/sellerlist" exact element={<Sellerlist />} />
          <Route path="/controlnotice" exact element={<Controlnotice />} />
          <Route path="/dealcreation" exact element={<Dealcreation />} />
          <Route path="/purchasepage" exact element={<Purchasepage />} />
          <Route path="/pinlisting" exact element={<Pinlisting />} />
          <Route path="/registration" exact element={<Registration />} />
          <Route path="/homepage2" exact element={<Homepage2 />} />
          <Route path="/apiprac" exact element={<Apiprac />} />
          <Route path="/forgetpassword" exact element={<Forgetpassword />} />
        
          
        </Routes>
      
      </Layout>
    </div>
  );
}

export default App;

