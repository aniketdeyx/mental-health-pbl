import React from 'react'
import 'remixicon/fonts/remixicon.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="bg-[#2196f3] text-gray-100 text-center py-5 flex justify-between items-center px-15">
                <h1 className="text-3xl font-bold">HealthCheck</h1>
                <div>
                    <div className='flex items-center gap-1'>
                    <Link to='/admin-login'>
                    <i className="ri-admin-fill text-md cursor-pointer"></i>
                        <h3 className='font-semibold text-lg cursor-pointer hover:text-amber-50'>Admin</h3>
                    </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header