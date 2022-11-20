import styles from './balance-card.module.scss';

const BalanceCard = ({ name, image, balance }: { name: string, image: string, balance: string }) => {
    return (
        <div className={styles.balanceCard}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img alt={name} src={image}/>
                    </div>
                    <div className={styles.currency}>{name}</div>
                </div>
                <div className={styles.balance}>{name === 'Naira' && '₦'} {balance}</div>
                <div className={styles.footer}>
                    <button className={styles.navButton}>
                        <img alt='nav' src='/assets/images/chevron-right.svg' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard;