import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Container from '../../components/Container/Container'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </main>
  )
}

export default Layout
