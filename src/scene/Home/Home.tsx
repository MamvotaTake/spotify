import './Home.scss'
import {Button} from "../../components/Button";
import {Card} from "../../components/Card";
export function Home() {
    return (
        <div className="Home">
            <div className="Filter">
                <Button className="Filter__button Filter__button--active">All</Button>
                <Button className="Filter__button">Music</Button>
                <Button className="Filter__button">Podcast</Button>
            </div>

            <div className='Home__playlist'>
                <Card className='Home__playlist__card' display="row" title="Macheso" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"/>
                <Card display="row" title="Macheso" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"/>
            </div>
        </div>
    );
}