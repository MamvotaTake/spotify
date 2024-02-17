import './Profile.scss'
import {Button} from "../../../components/Button";
import {IoIosClose} from "react-icons/io";
import { GoHeartFill} from "react-icons/go";
import {BsThreeDots} from "react-icons/bs";

export function Profile() {
    return (
        <div className='Profile'>
            <div className="Profile__Top">
                <p>Songs</p>
                <Button icon={<IoIosClose/>} className='Profile__Close'/>
            </div>
            <div className="Profile__Content">
                <img src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" alt="profile image"/>
                <div className="Profile__Content-Song">
                    <p>Shape Of You <span>Ed Sheeran</span></p>
                    <Button  className="Profile__Content-Song-Liked"><GoHeartFill/></Button>
                    <Button className="Profile__Content-Song-Dots"><BsThreeDots/></Button>

                </div>
            </div>

            <div className="Profile__About">
                <img src="https://i.scdn.co/image/ab6761610000e5ebee07b5820dd91d15d397e29c" alt="Artist image"/>
                <p>About the artist</p>
                <div></div>
            </div>
        </div>
    );
}