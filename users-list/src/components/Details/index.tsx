import styles from './styles.module.scss'

export function Details() {
  return (
    <div className={styles.container}>
      <section className={styles.detailsContent}>
        <div className={styles.infoBlock}>
          <strong>Nome:</strong>
          <span>Gustavo</span>
        </div>

        <div className={styles.infoBlock}>
          <strong>Email:</strong>
          <span>gustavo@outlook.com</span>
        </div>

        <div className={styles.infoBlock}>
          <strong>Telefone:</strong>
          <span>(38) 98812-6329</span>
        </div>

        <div className={styles.infoBlock}>
          <strong>Site:</strong>
          <span>github.com/gustavojuneo</span>
        </div>
      </section>
    </div>
  )
}
