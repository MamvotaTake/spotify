import './Sidebar.scss'
import Logo from '../../../assets/Logo.png'
import {PageButton} from "./PageButton.tsx";
import {GoHome, GoSearch} from "react-icons/go";
import {LuLibrary} from "react-icons/lu";
import {FiPlus} from "react-icons/fi";
import {IoIosArrowForward} from "react-icons/io";
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
                <div className="Sidebar__Link-library">
                    <PageButton
                        icon={<LuLibrary/>}
                        title={'Your Library'}
                    />

                    <span>
                        <PageButton
                            icon={<FiPlus/>}

                        />
                         <PageButton
                             icon={<IoIosArrowForward />}
                         />
                    </span>
                </div>

            </ul>
        </div>
    );
}