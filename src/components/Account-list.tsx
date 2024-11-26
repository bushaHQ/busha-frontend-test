import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./shared/Loader";
import NetworkError from "./shared/Error";

const ListWrapper = styled.div`
    max-width: 1000px;
    margin: auto;
`;

const ListHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`;

const Heading = styled.h2`
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    color: ${(props) => props.theme.text};
`;

const AddAccountButton = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.text};
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
`;

const ErrorWrapper = styled.section`
    text-align: center;
`;

const CenterLoader = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 400px;
`;

const CardsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 1rem;

    @media (max-width: 991px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const Card = styled.article`
    /* border: 1px solid #ccc; */
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    background: ${(props) => props.theme.walletCard};
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0px 10px 20px 0px ${(props) => props.theme.walletBoxShadow};
    transition: 0.9s;
    height: 150px;

    &:hover {
        box-shadow: none;
        transition: 0.9s;
    }
`;

const CardRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    color: #fff;

`;

const CardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    color: #9aa5b1;
    font-size: 14px;
`;

const BalanceText = styled.p`
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
`;

const FallbackAvatar = styled.div<{ bgColor: string }>`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 20px;
    color: white;
    text-align: center;
    line-height: 40px;
    text-transform: uppercase;
    margin-right: 10px;
    background-color: ${(props) => props.bgColor};
`;

const ArrowIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #303030;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
`;

const Arrow = styled.span`
    color: #fff;
`;

const HorizontalRule = styled.hr`
    margin: 0;
    border: none;
    border-top: 1px solid #ccc;
`;

const getColorForWalletName = (name: string): string => {
    const colors = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae", "#a8a8a8"];
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return colors[sum % colors.length];
};

interface Account {
    id: string;
    currency: string;
    hold: string;
    pending_balance: string;
    balance: string;
    name: string;
    type: string;
    deposit: boolean;
    payout: boolean;
    imgURL: string;
}

interface AccountListProps {
    onAddAccountClick: () => void;
    walletData?: {
        name: string;
        currency: string;
    };
}

const AccountList: React.FC<AccountListProps> = ({
    onAddAccountClick,
    walletData,
}) => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [validImageUrls,] = useState<{
        [key: string]: boolean;
    }>({});

    useEffect(() => {
        fetchAccounts();
    }, []);

    useEffect(() => {
        if (walletData) {
            const newAccount = {
                id: `id-${accounts.length + 1}`,
                name: walletData.name,
                currency: walletData.currency,
                balance: "0.00",
                imgURL: "",
                hold: "",
                pending_balance: "",
                type: "wallet",
                deposit: false,
                payout: false,
            };

            setAccounts((prevAccounts) => {
                if (!prevAccounts?.find((acc) => acc.name === newAccount.name)) {
                    return [...prevAccounts, newAccount];
                }
                return prevAccounts;
            });
        }
    }, [accounts.length, walletData]);

    const fetchAccounts = async (): Promise<void> => {
        setLoading(true);
        setError(false);
        const url = process.env.REACT_APP_FETCH_URL;

        try {
            const response = await fetch(`${url}/accounts`);
            if (!response.ok) {
                setError(true);
            }
            const data: Account[] = await response.json();
            setAccounts(data);
        } catch (err) {
            setError(true);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading)
        return (
            <CenterLoader>
                <Loader width={5} size={60} />
            </CenterLoader>
        );

    if (error)
        return (
            <ErrorWrapper>
                <NetworkError callApi={fetchAccounts} />
            </ErrorWrapper>
        );

    return (
        <ListWrapper>
            <ListHeader>
                <Heading>Wallets</Heading>
                <AddAccountButton onClick={onAddAccountClick}>
                    + Add new wallet
                </AddAccountButton>
            </ListHeader>
            <HorizontalRule />
            <CardsGrid>
                {accounts.map((account) => (
                    <Card
                        key={account.id}>
                        <CardRow>
                            <CardIcon>
                                {validImageUrls[account.id] ? (
                                    <img
                                        src={account.imgURL}
                                        alt="currency icon"
                                    />
                                ) : (
                                    <FallbackAvatar
                                        bgColor={getColorForWalletName(
                                            account.name
                                        )}
                                    >
                                        {account.name.charAt(0).toUpperCase()}
                                    </FallbackAvatar>
                                )}
                                {account.name}
                            </CardIcon>
                        </CardRow>
                        <CardRow>
                            <BalanceText>
                                {account.balance} {account.currency}
                            </BalanceText>
                        </CardRow>
                        <CardRow>
                            <ArrowIcon>
                                <Arrow className="material-symbols-outlined">
                                    chevron_right
                                </Arrow>
                            </ArrowIcon>
                        </CardRow>
                    </Card>
                ))}
            </CardsGrid>
        </ListWrapper>
    );
};

export default AccountList;
