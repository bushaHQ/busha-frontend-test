import { Menu_types } from "../../../utils/menutypes";

import styles from "./styles.module.scss";


const menuOptions = [
    Menu_types.WALLETS, Menu_types.PRICES, Menu_types.PEER2PEER, Menu_types.ACTIVItY, Menu_types.SETTING
]
export default function Menu({activeMenuOption, SetActiveMenuOption}:any) {
    return (
        <div className={styles.menu_container}>
            <div className={styles.container}>
                {menuOptions.map((e: string, i) => {
                    return (
                        <div key={i} className={`${styles.menu_option} ${e === activeMenuOption && styles.active_options}`} onClick={() => SetActiveMenuOption(e)}>
                            {e}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}