import {Button} from "./components/Button";
import {HiCheck} from "react-icons/hi";
import {IoChevronForward, IoNotificationsSharp} from "react-icons/io5";



import {Divider} from "./components/Divider";

import {Button} from "./components/Button";
import {HiCheck} from "react-icons/hi";
import {IoChevronForward, IoNotificationsSharp} from "react-icons/io5";




function App() {

  return (
    <>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
        <Divider thick={true} />

        <div className='ButtonComponent'>
            <Button type='primary'>
                PLAY
            </Button>
            <br/>

            <Button icon={<HiCheck/>}/>
            <br/>
            <Button icon={<IoChevronForward />}/>
            <br/>
            <Button icon={<IoNotificationsSharp/>}/>
            <br/>
            <Button type='secondary'>
                <span><HiCheck/></span>Following
            </Button>
        </div>

    </>
  )
}

export default App
