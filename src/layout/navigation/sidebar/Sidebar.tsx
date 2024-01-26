import './Sidebar.scss'
import Logo from '../../../assets/Logo.png'
import {PageButton} from "./PageButton.tsx";
import {GoHome, GoSearch} from "react-icons/go";
import {LuLibrary} from "react-icons/lu";
import {FiPlus} from "react-icons/fi";
import {IoIosArrowForward} from "react-icons/io";
import {Card} from "../../../components/Card";
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
            <div className='Sidebar__Cards'>
                <Card type="Tk.Spotify" display="column" title="Macheso" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"/>
                <Card type="Playlist.Spotify" display="column" title="I don't know" image="https://i.scdn.co/image/ab67616d00004851d315ce32ba3637c4fa9b5dab"/>
                <Card type="Playlist.Spotify" display="column" title="I don't know" image="https://i.scdn.co/image/ab67616d0000b273d766fd9e96ce4be7776759a4"/>
                <Card type="Playlist.Spotify" display="column" title="I don't know" image="https://i.scdn.co/image/ab67616d00001e0220b6d5bea09a79e431af4dfc"/>

            </div>
        </div>
    );
}