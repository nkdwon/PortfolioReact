import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Container from '../../components/Container/Container'
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, sou <br />
              <span>Sandra Alves</span> <br />
              Dev Full Stack
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
            </Link>
          </div>
          <figure>
            <img
              className={styles.img_home}
              src="./src/assets/icon.svg"
              alt="Imagem de Home"
            />
          </figure>
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default Home
