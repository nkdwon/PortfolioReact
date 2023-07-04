
import styles from './Sobre.module.css'
import avatar from './images/avatar.jpg'
import css from './images/icon-css.svg'
import html from './images/icon-html.svg'
import js from './images/icon-js.svg'
import node from './images/icon-node.svg'
import react from './images/icon-react.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre Mim</h2>

                    <p>Sou <span>Felipe Barros</span> <br />
                    <strong>Estudante e Programador</strong> </p>

                    <p>😄 Apaixonado em tecnologia e aprender</p>

                    <p>📚 Sempre em busca de mais conhecimento</p>

                    <p>💻Atualmente Estudando Typescript, JavaScript, React e aprimorando minhas habilidades em HTML/CSS</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" className={styles.icone}/>
                    <img src={css} alt="Ícone do css" className={styles.icone}/>
                    <img src={js} alt="Ícone do js" className={styles.icone}/>
                    <img src={react} alt="Ícone do react" className={styles.icone}/>
                    <img src={node} alt="Ícone do node" className={styles.icone}/>
                    <img src={sql} alt="Ícone do sql" className={styles.icone}/>
                </div>
            </div>

        </section>
    )
}

export default Sobre

