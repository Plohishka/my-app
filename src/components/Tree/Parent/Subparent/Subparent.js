import React from 'react';
import Child from './Child/Child';
import { withTheme, withUser } from '../../../../HOC';
import CONSTANTS from '../../../../constants';

const { THEMES } = CONSTANTS;

const Subparent = (props) => {

    const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    return (
        <div style={{ border: '3px solid black', padding: '25px' }}>
            Subparent
            <p>{props.user.firstName} {props.user.lastName}</p>
            <button onClick={() => { props.setTheme(nextTheme) }}>Click to change theme</button>
            <Child />
        </div>
    )
    
}

/* const SubparentWithTheme = withTheme(Subparent);
const SubparentWithThemeWithUser = withUser(SubparentWithTheme); */

export default withUser(withTheme(Subparent));


