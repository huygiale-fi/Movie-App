import withLayout from 'hoc/withLayout'
import React from 'react'
import {useSelector} from 'react-redux'
import Sidebar from "react-sidebar"
import { Redirect } from 'react-router'
import Navbar from 'containers/admin/Sidebar'
 
 function AdminLayout(props) {
    const {user} = useSelector(state => state.authReducer)
    const userr = JSON.parse(user)
    return userr.maLoaiNguoiDung === 'QuanTri' ? (
        <>
        <Sidebar
        sidebar={<Navbar/>}
        open="true"
        docked="false"
        >
        {props.children}
      </Sidebar>
        </>
    )
    : (<Redirect to="/"/>)
}

export default withLayout(AdminLayout)