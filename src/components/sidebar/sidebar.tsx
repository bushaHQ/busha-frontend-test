import styles from './sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li >
                    <a className={styles.activePage} href='/'>Wallets</a>
                </li>
                <li>
                    <a href='/'>Prices</a>
                </li>
                <li>
                    <a href='/'>Peer2Peer</a>
                </li>
                <li>
                    <a href='/'>Activity</a>
                </li>
                <li>
                    <a href='/'>
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar