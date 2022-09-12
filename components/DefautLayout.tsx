import React, { useState } from "react";
import Head from 'next/head';
import { Avatar, Col, Drawer, Layout, Menu, MenuProps, Row } from "antd";
import { faBars, faSignOut, faSignIn, faHome, faCubes, faUser, faUsers, faFlaskVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useOidc, useOidcUser } from '@axa-fr/react-oidc';
import { ReactCSS } from "../functions/ReactCSS";

const { Content, Sider } = Layout;

const styles = ReactCSS.create({
    container: {
        minHeight: '100vh'
    },
    sidebarLogo: {
        height: 64,
        padding: 8,
        margin: 16,
        background: '#333',
        color: 'white'
    },
    sidebar: {
        paddingBottom: 96
    },
    topbar: {
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 16,
        paddingTop: 16,
        backgroundColor: 'white',
        display: "flex",
        alignItems: 'center'
    },
    topbarLogo: {
        height: 48,
        padding: 8,
        color: 'white',
        background: '#333',
        flex: 1
    },
    content: {
        margin: 24,
        padding: 24,
        minHeight: 280,
        background: 'white'
    },
    avatarContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 32
    },
    helloUser: {
        color: 'white',
        marginTop: 16,
        marginBottom: 20
    }
});

const DefaultLayout: React.FC<{
    children: React.ReactNode
}> = ({ children }) => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const router = useRouter();
    const { isAuthenticated, login, logout } = useOidc();
    const { oidcUser } = useOidcUser();

    // menu.key must match the router.pathname, see example (/dashboard) below
    const [selected, setSelected] = useState([router.pathname]);

    // key must also be unique, for obvious reason
    function getMenu(): MenuProps['items'] {
        const menu: MenuProps['items'] = [];

        menu.push({
            key: '/',
            label: 'Home',
            icon: <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>,
            onClick: () => router.push('/')
        });

        menu.push(
            {
                key: 'menu1',
                label: 'Menu 1',
                icon: <FontAwesomeIcon icon={faCubes}></FontAwesomeIcon>,
                children: [
                    {
                        key: '/dashboard',
                        label: 'Dashboard',
                        onClick: () => router.push('/dashboard')
                    },
                    {
                        key: 'subMenuB',
                        label: 'Sub Menu B',
                        onClick: () => router.push('/')
                    },
                    {
                        key: 'subMenuC',
                        label: 'Sub Menu C',
                        onClick: () => router.push('/')
                    }
                ]
            },
            {
                key: 'menu2',
                label: 'Menu 2',
                icon: <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>,
                children: [
                    {
                        key: 'subMenuD',
                        label: 'Sub Menu D',
                        onClick: () => router.push('/')
                    },
                    {
                        key: 'subMenuE',
                        label: 'Sub Menu E',
                        onClick: () => router.push('/')
                    },
                    {
                        key: 'subMenuF',
                        label: 'Sub Menu F',
                        onClick: () => router.push('/')
                    }
                ]
            },
            {
                key: 'menu3',
                label: 'Menu 3',
                icon: <FontAwesomeIcon icon={faFlaskVial}></FontAwesomeIcon>,
                children: [
                    {
                        key: 'subMenuG',
                        label: 'Sub Menu G',
                        onClick: () => router.push('/')
                    },
                    {
                        key: 'subMenuH',
                        label: 'Sub Menu H',
                        onClick: () => router.push('/')
                    },
                    {
                        key: 'subMenuI',
                        label: 'Sub Menu I',
                        onClick: () => router.push('/')
                    }
                ]
            }
        );

        if (isAuthenticated) {
            menu.push({
                key: 'signOut',
                label: 'Sign out',
                icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
                onClick: () => logout()
            });
        } else {
            menu.push({
                key: 'signIn',
                label: 'Sign in',
                icon: <FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>,
                onClick: () => login()
            });
        }

        return menu;
    }

    function getUserName(): string {
        // oidc user can be null before user data is loaded, be careful
        if (oidcUser) {
            return oidcUser.name;
        }

        return '';
    }

    function renderAvatar() {
        if (isAuthenticated) {
            return (
                <div style={styles.avatarContainer}>
                    <div>
                        <Avatar size={64} icon={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>} />
                    </div>
                    <div style={styles.helloUser}>
                        Hello, {getUserName()}
                    </div>
                </div>
            );
        }

        return null;
    }

    return (
        <Layout style={styles.container}>
            <Head>
                <meta key="meta-charset" charSet="utf-8" />
                <meta key="meta-viewport" name="viewport" content="width=device-width, initial-scale=1" />
                <link key="favicon" rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <Sider width={240} breakpoint="lg" collapsedWidth={0} trigger={null} style={styles.sidebar}>
                    <div style={styles.sidebarLogo}>Logo</div>
                    {renderAvatar()}
                    <Menu theme="dark" mode="vertical" items={getMenu()}
                        selectedKeys={selected} onSelect={e => setSelected(e.selectedKeys)} />
                </Sider>
                <Layout>
                    <Drawer
                        title="Menu"
                        placement="left"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        <Menu className="border-0" mode="inline" items={getMenu()}
                            selectedKeys={selected} onSelect={e => setSelected(e.selectedKeys)} />
                    </Drawer>
                    <Row style={styles.topbar} className='d-lg-none'>
                        <Col flex={1}>
                            <button onClick={() => setDrawerOpen(true)} type="button" className='btn btn-outline-primary'>
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            </button>
                        </Col>
                        <Col flex={1} style={styles.topbarLogo}>
                            Logo
                        </Col>
                        <Col flex={1}>
                        </Col>
                    </Row>
                    <Content style={styles.content}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export const WithDefaultLayout = (page: React.ReactElement) => <DefaultLayout>{page}</DefaultLayout>;
