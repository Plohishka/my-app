import React, { useContext } from 'react';
import Child from './Child/Child';
import CONSTANTS from '../../../../constants';
import { ThemeContext } from '../../../../contexts/themeContext';
import { UserContext } from '../../../../contexts/userContext';

const { THEMES } = CONSTANTS;

const Subparent = (props) => {
    const {theme, setTheme} = useContext(ThemeContext);
    const {user} = useContext(UserContext);

    const nextTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    return (
        <div style={{ border: '3px solid black', padding: '25px' }}>
            Subparent
            <p>{user.firstName} {user.lastName}</p>
            <button onClick={() => { setTheme(nextTheme) }}>Click to change theme</button>
            <Child />
        </div>
    )
    
}

export default Subparent;


