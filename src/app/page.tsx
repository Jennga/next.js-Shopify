/*import Image from "next/image";*/
/*import styles from "./page.module.css";*/
import { Description } from "app/componentes/home/description/description";
import { Hero } from "app/componentes/home/hero/hero";
import { Mainprodu } from "app/componentes/home/mainProducts/mainprodu";
import styles  from "app/componentes/compartir/main/main.module.sass"

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Description />
      <Mainprodu />
    </main>
  )
}

export default function Home() {
   return (
    <Main/>
  );
}
