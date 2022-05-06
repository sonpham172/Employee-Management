
import React from "react";
import { Layout, Menu } from "antd";
import {
    Link
} from "react-router-dom";

const { Header, Footer, Content } = Layout;

const LayoutComponent = ({ children }) => {
    return (
        <Layout className="layout">
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to="/employee/list">Home</Link></Menu.Item>
                </Menu>
                `</Header>
            <Content className="main_container">{children}</Content>
            <Footer style={{ textAlign: 'center' }}>Son Thanh Pham Developer</Footer>
        </Layout>
    )
}

export default LayoutComponent;