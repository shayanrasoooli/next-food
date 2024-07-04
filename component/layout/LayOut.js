import Link from "next/link"
import styles from "./layout.module.css"

function LAYOUT({children}) {
  return (
    <>      
    <header className={styles.header}>
     <div className={styles.left}>
         <Link href="/" >NextFood</Link>
     </div>
     <div className={styles.right}>
         <Link href='/menu'>Menu</Link>
         <Link href='/categories'>Categories</Link>
     </div>
    </header>
    <div className={styles.container}>{children}</div>

    <footer className={styles.footer}>
     <a href='google.com' target="_blank" rel="noreferrer">NextFood</a>
     NextJS course || NextFood &copy;
    </footer>
    </>
  )
}

export default LAYOUT