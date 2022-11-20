import React from "react"
import './App.scss';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./component/Header/Header"
import Home from "./component/Home/Home";
import MovieDetail  from "./component/MovieDetail/MovieDetail";
import PageNotFound from "./component/PageNotFound/pageNotFound"
import Footer from "./component/Footer/Footer"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
