import './Footer.scss';
import {Button} from "../../components/Button";
import {IoPlay, IoShuffle} from "react-icons/io5";
import {GoHeartFill} from "react-icons/go";
import {TbPlayerTrackNext, TbPlayerTrackPrev, TbRepeat} from "react-icons/tb";
import {LuMic2} from "react-icons/lu";
import {MdOutlineKeyboardArrowUp} from "react-icons/md";
export function Footer() {

    function repeat() {
        console.log('hello world')
    }
    return (
        <div className='Footer'>
            <div className="Footer__Song-Name">
                <span className="Footer__Song-Name--Image">
                    <img src="https://i.scdn.co/image/4e55ca05d4f336a2fa0e3062a7ec9778a201e8bc" alt="song image"/>
                    <Button onClick={() => repeat} className="Footer__Song-Name--Image-Button"><MdOutlineKeyboardArrowUp/></Button>
                </span>
                <p>Shape Of You <span>Ed Sheeran</span></p>
                <Button className="Footer__Song-Liked"><GoHeartFill/></Button>
            </div>

            <div className="Footer__Song-Play">
                <Button className="Footer__Song-Shuffle-Button"><IoShuffle/></Button>
                <Button className="Footer__Song-Prev-Button"><TbPlayerTrackPrev/></Button>
                <Button className="Footer__Song-Play-Button"><IoPlay/></Button>
                <Button className="Footer__Song-Next-Button"><TbPlayerTrackNext/></Button>
                <Button className="Footer__Song-Repeat-Button"><TbRepeat/></Button>
            </div>

            <div className="Footer__Next">
                <Button className="Footer__Song-Shuffle-Button"><LuMic2/></Button>
                <Button className="Footer__Song-Prev-Button"><TbPlayerTrackPrev/></Button>
                {/*<figure>*/}
                {/*    <audio controls src="/media/cc0-audio/t-rex-roar.mp3"></audio>*/}
                {/*</figure>*/}
                <Button className="Footer__Song-Next-Button"><TbPlayerTrackNext/></Button>
                <Button className="Footer__Song-Repeat-Button"><TbRepeat/></Button>
            </div>
        </div>
    );
}