export const formatBalance = (balance: number) => {
    return new Intl.NumberFormat('en-US').format(balance);
}