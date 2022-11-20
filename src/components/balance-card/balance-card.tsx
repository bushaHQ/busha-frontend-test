import styles from './balance-card.module.scss';

const BalanceCard = ({ currency, image, balance }: { currency: string, image: string, balance: string }) => {
    return (
        <div className={styles.balanceCard}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img src={image}/>
                    </div>
                    <div className={styles.currency}>{currency}</div>
                </div>
                <div className={styles.balance}>{currency === 'NGN' && '₦'} {balance}</div>
                <div className={styles.footer}>
                    <button className={styles.navButton}>
                        <img src='/assets/images/chevron-right.svg' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BalanceCard;