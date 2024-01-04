import './Sidebar.scss'
import Logo from '../../../assets/Logo.png'
import {PageButton} from "./PageButton.tsx";
import {GoHome, GoSearch} from "react-icons/go";
import {LuLibrary} from "react-icons/lu";
export function Sidebar() {
    return (
        <div className='Sidebar'>
            <img src={Logo} alt="Spotify Logo" />
            <ul className="Sidebar__Links">
                <PageButton
                    icon={<GoHome />}
                    title={'Home'}
                />
                <PageButton
                    icon={<GoSearch/>}
                    title={'Search'}
                />
                <PageButton
                    icon={<LuLibrary/>}
                    title={'Library'}
                    // sideIcon={<GoSearch/>}

                />

            </ul>
        </div>
    );
}