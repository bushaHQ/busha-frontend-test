import styles from './header.module.scss';

const Header =  () =>{
    return (
        <div className={styles.header}>
            <div id='Logo' className={styles.logo}>
                <img alt='logo' src='/assets/images/logo.svg' /> 
            </div>
            <div className={styles.user}>
                <div className={styles.imagePlaceholder}>
                    <span className={styles.imagePlaceholderEmpty}>O</span>
                </div>
                <div className={styles.fullname}>Oluwatobi Akindunjoye</div>
            </div>
        </div>
    )
}

export default Header