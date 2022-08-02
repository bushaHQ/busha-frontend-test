import { useState } from "react";
import { Menu_types } from "../../utils/menutypes"
import Menu from "../menu"
import Wallets from "../wallets";

import styles from "./styles.module.scss";


export default function Main() {
    const [activeMenuOption, SetActiveMenuOption] = useState(Menu_types.WALLETS);

    const ActiveMenu = () => {
        switch (activeMenuOption) {
            case Menu_types.WALLETS:
                return <Wallets />
            case Menu_types.ACTIVItY:
                return <div />
            case Menu_types.PEER2PEER:
                return <div />
            default:
                return <div></div>
        }
    }

    return (
        <div className={styles.main_container}>
            <Menu activeMenuOption={activeMenuOption} SetActiveMenuOption={SetActiveMenuOption} />
            <ActiveMenu />
        </div>
    )
}