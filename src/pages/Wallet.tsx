import { useEffect, useState } from "react";
import Api, { IAccount, IWallet } from "../Api";
import { Avatar, Button, Card, CloseButton, Col, Container, ErrorView, Option, Row, Select, Text } from "../components/bits"
import Loader from "../components/shared/Loader";
import Modal from "../components/shared/Modal";

export interface WalletPageProps {

}

function WalletPage(props: WalletPageProps) {
	const [loading, setLoading] = useState({
		wallet: false,
		accounts: true,
		addWallet: false,
	});
	const [hasError, setHasError] = useState({
		wallet: false,
		accounts: false,
		addWallet: false,
	});
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedWallet, setSelectedWallet] = useState<string>('');
	const [accounts, setAccounts] = useState<IAccount[]>([]);
	const [wallets, setWallets] = useState<IWallet[]>([]);

	useEffect(() => {
		getWallets()
	}, [])

	const getWallets = async () => {
		try {
			setLoading({ ...loading, accounts: true })
			setHasError({ ...hasError, accounts: false })

			const res = await Api.getWalletAccounts();
	
			setAccounts(res)
			setHasError({ ...hasError, accounts: false })
		} catch (error) {
			console.log(error)
			setHasError({ ...hasError, accounts: true })
		} finally {
			setLoading({ ...loading, accounts: false })
		}
	}

	const getCurrencies = async () => {
		try {
			setLoading({ ...loading, wallet: true })
			setHasError({ ...hasError, wallet: false })

			const res = await Api.getWalletCurrencies();
	
			setWallets(res)
			setHasError({ ...hasError, wallet: false })
		} catch (error) {
			console.log(error)
			setHasError({ ...hasError, wallet: true })
		} finally {
			setLoading({ ...hasError, wallet: false })
		}
	}

	const handleCreateWallet = async () => {
		try {
			setLoading({ ...loading, addWallet: true })
			setHasError({ ...hasError, addWallet: false })

			const res = await Api.createWallet({ currency: selectedWallet });

			accounts.push(res)
	
			setWallets(accounts)
			setHasError({ ...hasError, addWallet: false })
			setModalOpen(false)
		} catch (error) {
			console.log(error)
			setHasError({ ...hasError, addWallet: true })
		} finally {
			setLoading({ ...hasError, addWallet: false })
		}
	}

	const handleOpenNewWalletModal = () => {
		setModalOpen(true)
		getCurrencies()
	}

	return (
		<Container>
			<Row align="start" justify="center">
				<Col xs={8}>
					<Text mode="h5" style={{ margin: 0 }}>Wallets</Text>
				</Col>
				<Col cols grow alignSelf="center">
					<Button text onClick={handleOpenNewWalletModal}>
						<Text mode="span" color="rgba(0, 0, 0, 1)" size={1}>+ Add new wallet</Text>
					</Button>
				</Col>
				<Col xs={12} style={{ paddingTop: 0 }}>
					<div style={{ borderBottom: '1px solid rgba(211, 213, 216, 0.5)' }}></div>
				</Col>
				<Col xs={12}>
					<Row align="start" justify="start">
						{loading.accounts && (
							<Col cols>
								<Row justify="center">
									<Loader />
								</Row>
							</Col>
						)}

						{hasError.accounts ? (
							<Col cols>
								<ErrorView onRetry={getWallets} />
							</Col>
						) : (
							<>
								{accounts.map((account) => (
									<Col key={account.id} xs={12} sm={6} lg={4}>
										<Card height="150px">
											<Row noGutters>
												<Col xs={12}>
													<Row style={{ paddingTop: 0, paddingBottom: 0 }}>
														<Col cols shrink>
															<img src={account.imgURL} alt={account.currency} width="34px" height="34px" />
														</Col>
														<Col cols style={{ paddingLeft: 0 }}>
															<Text mode="span" color="rgba(154, 165, 177, 1)" style={{ margin: 0 }}>{account.name}</Text>
														</Col>
													</Row>
												</Col>
												<Col xs={12} style={{ paddingTop: 0 }}>
													<Text color="rgba(255, 255, 255, 1)" style={{ margin: 0 }}>{`${account.balance} ${account.currency}`}</Text>
												</Col>
												<Col xs={12}>
													<Row justify="end">
														<Avatar size={32}>
															<img src="/chevron-right-icon.svg" alt={`Go to ${account.name} account`} />
														</Avatar>
													</Row>
												</Col>
											</Row>
										</Card>
									</Col>
								))}
							</>
						)}
					</Row>
				</Col>
			</Row>

			<Modal isOpen={modalOpen}>
				<Container fillHeight={loading.wallet || hasError.wallet}>
					{loading.wallet && (
						<Row justify="center" align="center">
							<Loader size={83} />
						</Row>
					)}

					{hasError.wallet && (
						<Row justify="center" align="center">
							<ErrorView onRetry={getCurrencies} />
						</Row>
					)}
					
					{!loading.wallet && !hasError.wallet && (
						<Row noGutters align="start" justify="start">
							<Col xs={12}>
								<Row justify="space-between">
									<Col cols>
										<Text mode="h5" style={{ marginBottom: 0, marginTop: 0 }}>Add new wallet</Text>
									</Col>
									<Col cols shrink>
										<CloseButton onClick={() => setModalOpen(false)}>
											<Text weight="bold">X</Text>
										</CloseButton>
									</Col>
								</Row>
							</Col>
							<Col xs={12}>
								<Text>The crypto wallet will be created instantly and be available in your list of wallets.</Text>
							</Col>
							<Col xs={12}>
								<Text mode="span" style={{ marginBottom: 0 }}>Select wallet</Text>
							</Col>
							<Col xs={12}>
								<Select onChange={(e) => setSelectedWallet(e.target.value)} value={selectedWallet}>
									{wallets.map((wallet) => (
										<Option key={wallet.currency} value={wallet.currency}>{wallet.name}</Option>
									))}
								</Select>
							</Col>
							<Col xs={12}>
								<Row justify="center">
									<Button loading={loading.addWallet} onClick={handleCreateWallet}>Create Wallet</Button>
								</Row>
							</Col>

							{hasError.addWallet && (
								<Col xs={12} style={{ marginTop: '30px' }}>
									<Row justify="center">
										<div style={{ padding: 10, borderRadius: '8px', border: '1px solid #E0B3B2', width: '100%', background: '#FFF4F4' }}>
											<Text mode="span" weight="bold" style={{ color: 'rgba(215, 44, 13, 1)' }}>Network Error</Text>
										</div>
									</Row>
								</Col>
							)}
						</Row>
					)}
				</Container>
			</Modal>
		</Container>
	)
}

export default WalletPage
