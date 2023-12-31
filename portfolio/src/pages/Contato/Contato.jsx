import styles from './Contato.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

function Contato() {
  return (
    <>
      <section className={styles.contatos}>
        <h2>Contatos</h2>

        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre</p>

        <div className={styles.icones}>
          <a
            href="mailto:felipebarrosratton.almeida@gmail.com"
            target="_blank"
            rel="noopener no noreferrer"
          >
            <GoMail className={styles.icone} />
          </a>

          <a
            href="https://www.instagram.com/felps_barros/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className={styles.icone} />
          </a>

          <a href="" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp className={styles.icone} />
          </a>

          <a
            href="https://github.com/nkdwon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className={styles.icone} />
          </a>

          <a
            href="https://www.linkedin.com/in/felipebarrosratton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className={styles.icone} />
          </a>
        </div>
      </section>
    </>
  )
}

export default Contato
