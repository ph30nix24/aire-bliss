import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
    return (
        <main className="min-h-screen">
            <Outlet />
        </main >
    )
}

export default AdminLayout