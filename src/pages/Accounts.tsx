import { useContext } from "react";
import { Accounts } from "../components/Accounts";
import { AccountsContext } from "../context/accountContext";

export const AccountsPage = () => {
    const { accounts: { data, loading, error, refetch, updateAccounts } } = useContext(AccountsContext);

    return (
        <Accounts
            accounts={data}
            errorMessage={error}
            loading={loading}
            refetch={refetch}
            updateAccounts={updateAccounts}
        />
    )
}
