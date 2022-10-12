import {Routes , Route} from 'react-router-dom'
import Landing from './Pages/Landing';
import ProductPage from './Pages/ProductPage';



function App() {
  return (
     <Routes>
      <Route path = "/" element={<Landing />} />
      <Route path = "/product/:id" element={<ProductPage/>} />
     </Routes>
  );
}

export default App;
