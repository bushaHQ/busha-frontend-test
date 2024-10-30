import React, { ReactNode } from "react";
import Header from "../Header";
import { Container, PageContainer } from "../AppWrapper";
import Sidebar from "../Sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Header fullname="Oluwatobi Akindunjoye" />
      <Container>
        <PageContainer>
          <div className="main-content-left">
            <Sidebar />
          </div>
          <div className="main-content">{children}</div>
        </PageContainer>
      </Container>
    </div>
  );
}
