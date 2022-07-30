import styles from "./styles.module.scss"

export default function Header() {
    return (
        <div className={styles.header_container}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src="assets/icons/logo.svg" alt="logo" />
                </div>
                <div className={styles.account}>
                    <img src="assets/icons/userLogo.svg" alt="user" />
                    <div className={styles.user_name}>Oluwatobi Akindunjoye</div>
                </div>
            </div>
        </div>
    )
}