import { Component } from "react";
import Aloha from '../Aloha/Aloha';



class AlohaDashboard extends Component {
constructor(props) {
    super(props);

    this.state = {
        usersArray: [
            {
                id: 1,
                firstName: 'Tony',
                lastName: 'Stark'
            },
            {
                id: 2,
                firstName: 'Bruce',
                lastName: 'Brenner'
            },
            {
                id: 3,
                firstName: 'Thor',
                lastName: 'Odinson'
            },
            {
                id: 4,
                firstName: 'Peter',
                lastName: 'Parker'
            },
            {
                id: 5,
                firstName: 'Natasha',
                lastName: 'Romanof'
            }
        ]
    }
}

sortUsers = () => {
    const {usersArray} = this.state;
    const newArray = [...usersArray];
    newArray.sort((a, b) => a.firstName > b.firstName ? 1 : -1 );
    this.setState({
        usersArray: newArray
    })
}

userToAloha = () => {
    const {usersArray} = this.state;
    return usersArray.map((user) => <Aloha key={user.id} name={user.firstName} lastName={user.lastName}/>)
}

render() {
    return (
        <>
        <button onClick={() => {this.sortUsers()}}>Sort</button>
        {this.userToAloha()}
        </>
    )
}

}



export default AlohaDashboard;