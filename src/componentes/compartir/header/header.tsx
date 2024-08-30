import Link from "next/link";
import styles from './header.module.sass';

export const Header = () => {
    console.log('mensaje del header')
    return(
        <header className={styles.Header}>
          <nav>
            <ul className={styles.ul}>
              <Link href="/">
              <li>Home</li>
              </Link>
              <Link href="/store">
              <li>Tienda</li>
              </Link>
            </ul>
          </nav>
        </header>
    )
}