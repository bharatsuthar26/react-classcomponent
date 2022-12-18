import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Addproduct from './components/Addproduct';
import Editproduct from './components/Editproduct';
import Nav from './components/Nav';
import Products from './components/Products';
import Homeclass from './components/Homeclass'
function App() {
  return (
     <>
     <Router>
       <Nav/>
       <section className='container'>
          <Routes>
             <Route path='/' element={<Homeclass/>}/>
             <Route path='/products' element={<Products/>}/>
             <Route path='/addproduct' element={<Addproduct/>}/>
             <Route path='/editproduct/:id' element={<Editproduct/>}/>
          </Routes>
       </section>
     </Router>
     </>
  );
}

export default App;
