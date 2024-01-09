import './Topbar.scss'
import {Button} from "../../../components/Button";
import {IoIosArrowBack, IoIosArrowForward, IoIosNotifications} from "react-icons/io";
import {MdArrowCircleDown} from "react-icons/md";
export function Topbar() {
    return (
        <div className='Topbar'>
            <div className="Topbar__Left">
                <div className="Topbar__Buttons">
                    <Button icon={<IoIosArrowBack/>} className="Topbar__Button"/>
                    <Button icon={<IoIosArrowForward/>} className="Topbar__Button"/>
                </div>
            </div>
            <div className="Topbar__Right">
                <Button className="Topbar__Right-Explore">Explore Premium</Button>
                <Button type="secondary">
                    <span>
                        <MdArrowCircleDown/>
                    </span>
                    Install App
                </Button>
                <Button icon={<IoIosNotifications/>} className="Topbar__Button"/>
                <img src="https://i.scdn.co/image/4e55ca05d4f336a2fa0e3062a7ec9778a201e8bc" alt="profile image"/>
            </div>
        </div>
    );
}