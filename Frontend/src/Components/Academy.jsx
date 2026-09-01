import style from '../css/academy.module.css'
import { Link } from 'react-router-dom'

export default function Academy(){
    return(
        <section className={style.academy}>
            <div className={style.card}>
                <header className={style.header}>
                    <h1 className={style.title}>Panda Academy</h1>
                    <p className={style.subtitle}>
                        Choose your grade below to unlock tailored lessons, practice sets, and progress tracking designed for every step of your math journey.
                    </p>
                </header>

                <div className={style.gradeGrid}>
                    <Link to="/grade-3" className={style.gradeButton}>Panda Bear Academy</Link>
                </div>
            </div>
        </section>
    )
}