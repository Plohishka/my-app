import React, {useState} from 'react';
import Toggler from './Toggler';
import './style.css';


function Scene(props) {

    const [isLight, setIsLight] = useState(true);

    function changeLight() {
        return setIsLight(!isLight);
    }

    return <div className={isLight ? 'scene-on' : 'scene-off'}>
        <Toggler addFunc={changeLight} buttonText={isLight ? 'Off' : 'On'}/>
    </div>
}


export default Scene;