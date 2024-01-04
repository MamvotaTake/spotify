import {Sidebar} from "./sidebar/Sidebar.tsx";
import './Navigation.scss'
import {Topbar} from "./topbar/Topbar.tsx";
import {Profile} from "./profile/Profile.tsx";

export function Navigation() {
    return (
        <>
            <div className='Navigation'>
                <Sidebar/>
                <div className='Navigation__Content'>
                    <Topbar/>
                </div>
                <div className='Navigation__Profile'>
                    <Profile/>
                </div>
            </div>
        </>
    );
}