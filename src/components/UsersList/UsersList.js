import React from 'react';
import UsersCard from './UsersCard';
import { getUsers } from '../../api';
import styles from './style.module.css';

class UsersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            userCount: 100,
            filteredUsers: [],
            page: 1
        }
    }

    prevBtnHand = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
        }
    }

    nextBtnHand = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    componentDidMount() {
        const {userCount, page} = this.state;
        {this.loadUsers(userCount, page)};
    }

    componentDidUpdate(prevProps, prevState) {
        const {userCount, page} = this.state;

        if (prevState.page !== page) {
            this.loadUsers(userCount, page);
        }
    }

    renderUsers = () => {
        const { users, filteredUsers } = this.state;

        return filteredUsers.length > 0 
        ?
        filteredUsers.map((user) => <UsersCard user={user} key={user.login.uuid}/>)
         :
         users.map((user) => <UsersCard user={user} key={user.login.uuid} />);
    }

    setUserCount = ({ target: {value} }) => {
        this.setState({
            userCount: value
        })
    }

    loadUsers = (userCount, page) => {
        getUsers(userCount, page)
            .then((data) => {
                const { results } = data;
                this.setState({
                    users: results
                })
            });
    }

    submitHandler = (event) => {
        event.preventDefault();
    }

    searchHandler = ({target}) => {
        if (target.value === '') {
            this.setState({
                filteredUsers: []
            })
        }

        const {users} = this.state;
        const searchValue = target.value;
        const filteredUsers = users.filter((user) => user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1 ||
        user.email.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1 ||
        user.name.first.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1);

        this.setState({
            filteredUsers
        })
    }   


    render() {
        const { users } = this.state;
        return (
            <>

                <form onSubmit={this.submitHandler}>
                    <label>
                        Number of users:
                        <input type='number' min={1} max={100} onChange={this.setUserCount} />
                    </label>
                    <button onClick={this.loadUsers}>Click</button>

                    <label>
                        Search users:
                        <input type='text' onChange={this.searchHandler}/>
                    </label>
                    <button onClick={this.prevBtnHand}>Previos page</button>
                    <button onClick={this.nextBtnHand}>Next page</button>
                </form>

                <section className={styles.container}>
                    {users.length > 0 ? this.renderUsers() : <h2>Users is loading</h2>}
                </section>
            </>
        )
    }

}

export default UsersList;