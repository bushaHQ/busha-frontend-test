import styled from "styled-components";
import { Header, Sidebar } from ".";

interface LayoutProps {
    Component: React.ComponentType,
}

export default function Layout(props: LayoutProps) {
    const { Component } = props;

    return (
        <>
            <Header username={"Oluwatobi Akindunjoye"} />

            <Container>
                <Sidebar />

                <MainView>
                    <Component />
                </MainView>
            </Container>
        </>
    );
}

const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    margin-top: 50px;
    width: 100%;
    flex-grow: 1;
`

const MainView = styled.div`
    width: calc(100% - 180px);
    margin-left: 60px;
`