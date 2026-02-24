import Image from "next/image";
import styles from "./page.module.css";
import SimpsonsCharacters from './components/SimpsonsCharacters';
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
     
    
          <h1><SimpsonsCharacters /></h1>

      </main>
    </div>
  );
}
