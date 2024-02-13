import { useState } from 'react'
import { FaSearch, FaShoppingCart, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/home.scss'
const User = {
    _id: "shikhar", role: "dmin"
}

const Header = () => {
    const [isOpen,setIsopen]=useState(false);
    const logOutHandler = () =>{
        setIsopen(false)
    }
    return (
        <nav className='header'>
            <Link onClick={()=>setIsopen(false)} to={"/"}>HOME</Link>
            <Link onClick={()=>setIsopen(false)} to={"/search"}><FaSearch /></Link>
            <Link onClick={()=>setIsopen(false)} to={"/cart"}><FaShoppingCart /></Link>
            {
                User?._id ? (<>
                    <button onClick={()=>setIsopen((prev)=>!prev)}><FaUser /></button>
                    <dialog open={isOpen}>
                        <div>{
                            User.role === "admin" && (
                                <Link onClick={()=>setIsopen(false)} to="/admin/dashboard">Admin</Link>
                            )}
                            <Link onClick={()=>setIsopen(false)} to="/orders">Orders</Link>
                            <button onClick={logOutHandler}>
                                <FaSignOutAlt />
                            </button>
                        </div>
                    </dialog>
                </>
                ) : (<Link onClick={()=>setIsopen(false)} to="/login"><FaSignInAlt /></Link>)
                }
        </nav>
    )
}
export default Header;