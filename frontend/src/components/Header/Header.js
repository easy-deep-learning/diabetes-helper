import Link from "next/link"
import style from './Header.module.scss';

export default function Header(props) {
  return (
    <header className={style.header}>
      <div className={`container ${style.header__container}`}>
        <h1 className={style.header__title}>{props.title}</h1>
        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.item}><Link href='/'>Main Page</Link></li>
            <li className={style.item}><Link href='/about'>About</Link></li>
            <li className={style.item}><Link href='/calculator'>Calculator</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
