import styles from "./styles.module.scss";


export default function NetworkError({ onClick }: any) {
    return (
        <div className={styles.network_error}>
            <div>
                <img src="assets/icons/verification-link-expired.svg" alt=""/>
            </div>
            <div className={styles.error_title}> Network Error</div>
            <div className={styles.try_button} onClick={() => onClick()}>Try again</div>
        </div>
    )
}