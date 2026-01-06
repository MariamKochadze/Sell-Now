import styles from "./loginPage.module.css"

export default function Page(){
    return(
    <form className={styles.form}>
      <label className={styles.label}>Email</label>
      <input className={styles.input} type="email" placeholder="Email"/><br/>
      <label className={styles.label}>Password</label>
      <input className={styles.input} type="password"/><br/>
      <button className={styles.button}>Submit</button>
   </form>
    )
}

