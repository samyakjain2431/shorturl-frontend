import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

function Navbar() {

    const { handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    // const toggleButton = (button) =>{
    //     button.nextElementSibling.classList.toggle('show');
    // }
    const logOutUser = () =>{ 
        handleLogout();
        navigate("/login");
        window.location.reload();
    }

    const styles =`
        
        
            `
            
            return (
                
                <nav className='flex sticky top-0 shadow-xl lg:w-[300px] justify-between flex-col gap-10 p-4 lg:px-8 border-primary border-2 rounded-2xl h-screen'>
            <style dangerouslySetInnerHTML={{ __html: styles }} />
            
            <div className='flex flex-col gap-5'>
            <h1 className="title_box  flex items-center  justify-between">
                <span className='text-2xl' onClick={()=> navigate("/")}>SmallURL</span>
                <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
            </h1>
            <div className="first_block flex flex-col gap-2 mt-5">
                <p onClick={()=> navigate("/new")} className='px-3 py-1 duration-200  my-bg-secondary rounded-lg cursor-pointer '>➕ New URL</p>
                <p className='px-3 py-1 my-bg-secondary duration-200  rounded-lg disabled'>🔍 Search</p>
                <p className='px-3 py-1 my-bg-secondary duration-200 rounded-lg disabled'>❤️ Favorites</p>
            </div>
            <hr className='hr-color'  />
            <ul className='px-3 py-1 my-bg-secondary duration-200  rounded-lg ' >
                <li onClick={()=> navigate("/all-urls")} >🔗 All URLs</li>
                {/* <ul className='sub_menu '>
                    <div className='ml-3'>
                            <li>Activated</li>
                            <li>Deactivated</li>
                            <li>Expired</li>
                    </div>
                </ul> */}
            </ul>
            <hr className='hr-color' />
            <ul >
                <li className='px-3 py-1 my-bg-secondary duration-200 rounded-lg disabled ' >📂 Url Collections</li>
                {/* <ul className='sub_menu '>
                    <div className='ml-3'>
                            <li>Activated</li>
                            <li>Deactivated</li>
                            <li>Expired</li>
                    </div>
                </ul> */}
            </ul>
            <hr className='hr-color'  />
            <div className="new_features">
                <p className='px-3 py-1 my-bg-secondary duration-200 rounded-lg disabled'>🌐 API</p>
            </div>
           </div>
            <div className="account_section">
                <button className='px-3 w-full text-left py-2 bg-red-100 hover:bg-red-200 text-red-600 duration-200 rounded-lg ' onClick={logOutUser}  >💁 Log out</button>
            </div>

        </nav>

  )
}

export default Navbar