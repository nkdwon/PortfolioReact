import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Projetos from './pages/Projetos/Projetos'
import Contato from './pages/Contato/Contato'
import Page404 from './pages/Page404/Page404'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'


function AppRoutes() {
    return (
        <BrowserRouter>
          <Header/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/sobre" element={<Sobre />} ></Route>
                    <Route path="/projetos" element={<Projetos />} ></Route>
                    <Route path="/contatos" element={<Contato />} ></Route>
                    <Route path="*" element={<Page404 />} ></Route>
                 </Routes>
            </Container>
          <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes
