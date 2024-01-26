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
                <Card className='Home__playlist__card' playButtonPosition="top" imageSize='small' fullWidth={true} display="row" title="A Happy Man" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"/>
                <Card className='Home__playlist__card' playButtonPosition="top" imageSize='small' fullWidth={true} display="row" title="Давай молодец" image="https://i.scdn.co/image/ab67616d00004851d315ce32ba3637c4fa9b5dab"/>
                <Card className='Home__playlist__card' playButtonPosition="top" imageSize='small' fullWidth={true} display="row" title="I don't know" image="https://i.scdn.co/image/ab67616d00001e0220b6d5bea09a79e431af4dfc"/>
                <Card className='Home__playlist__card' playButtonPosition="top" imageSize='small' fullWidth={true} display="row" title="A Happy Man" image="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"/>
                <Card className='Home__playlist__card' playButtonPosition="top" imageSize='small' fullWidth={true} display="row" title="Давай молодец" image="https://i.scdn.co/image/ab67616d00004851d315ce32ba3637c4fa9b5dab"/>
                <Card className='Home__playlist__card' playButtonPosition="top" imageSize='small' fullWidth={true} display="row" title="I don't know" image="https://i.scdn.co/image/ab67616d00001e0220b6d5bea09a79e431af4dfc"/>
            </div>

        </div>
    );
}