import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function AppLayout() {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    )
}
