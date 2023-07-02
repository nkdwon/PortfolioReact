import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <section className='container'>
      <div className='apresentacao'>
        <p>
          Olá, sou <br/>
          <span>Felipe Barros</span> <br/>
          Dev Full Stack
        </p>
        <button className='btn btn-red'>
          Saiba mais sobre mim
        </button>
     </div>
     <figure>
        <img className='img-home' src="/src/assets/icon.svg" alt="Imagem de Home" />
     </figure>
    </section>
    <Footer />
    </>
  )
}

export default App
