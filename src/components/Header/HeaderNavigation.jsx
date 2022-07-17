import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { BiFile } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { TbMessageCircle } from 'react-icons/tb';
import { IoLogOutOutline } from 'react-icons/io5';


export default function HeaderNavigation() {
    function LogoPN() {
        return (
            <div className="logoPN">
                <img src="https://www.passerellesnumeriques.org/wp-content/uploads/2021/06/PN_Logo_baseline_color_ENG.png" alt="" />
            </div>
        )
    }
    function Logout() {
        return (
            <table className="logout">
                <tbody>
                    <tr>
                        <td className='icon'><IoLogOutOutline /></td>
                        <td>Logout</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    function NavComponent() {
        return (
            <table className="navComponent">
                <tbody>
                    <tr>
                        <p><td className='icon'><IoHomeOutline /></td>
                            <td>Home</td>
                        </p>
                    </tr>
                    <tr>
                        <p><td className='icon'>< AiOutlineUser /></td>
                            <td>Profile</td>
                        </p>
                    </tr>
                    <tr>
                        <p><td className='icon'><MdWorkOutline /></td>
                            <td>Jobs</td>
                        </p>
                    </tr>

                    <tr>
                        <p>
                            <td className='icon'><BiFile /></td>
                            <td>Applied</td>
                        </p>
                    </tr>
                    <tr>
                        <p>
                            <td className='icon'><TbMessageCircle /></td>
                            <td>Message</td>
                        </p>
                    </tr>
                </tbody>
            </table>
        )
    }
    return (
        <div>
            <LogoPN></LogoPN>
            <NavComponent></NavComponent>
            <Logout></Logout>
        </div>
    )
}