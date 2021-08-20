import React from 'react'
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';


const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Amazona Next</title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Amazona Next</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All reserve save in Amazona Next
                </Typography>
            </footer>
        </div>
    )
}

export default Layout
