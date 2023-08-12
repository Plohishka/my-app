import React, { useState, useEffect } from 'react';
import UsersCard from './UsersCard';
import { getUsers } from '../../api';
import styles from './style.module.css';

const NewUserList = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [userCount, setUserCount] = useState(100);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const loadUsers = (usersCount, page) => {
        getUsers(usersCount, page)
            .then((data) => {
                const { results } = data;
                setUsers(results);
            })
            .catch((error) => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        loadUsers(userCount, page);
    }, [page])


    const renderUsers = () => {
        return filteredUsers.length > 0
            ?
            filteredUsers.map((user) => <UsersCard user={user} key={user.login.uuid} />)
            :
            users.map((user) => <UsersCard user={user} key={user.login.uuid} />);
    }

    const searchHandler = ({ target }) => {
        if (target.value === '') {
            setFilteredUsers([]);
        }

        const searchValue = target.value;
        const filteredUsers = users.filter((user) => user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1 ||
            user.email.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1 ||
            user.name.first.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1);

        setFilteredUsers(filteredUsers);
    }

    const prevBtnHand = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const nextBtnHand = () => {
        setPage(page + 1);
    }

    const submitHandler = (event) => {
        event.preventDefault();
    }


    return (
        <>
            <form onSubmit={submitHandler}>
                <label>
                    Number of users:
                    <input type='number' min={1} max={100} onChange={({ target: { value } }) => setUserCount(value)} />
                </label>
                <button onClick={() => loadUsers(userCount, page)}>Click</button>

                <label>
                    Search users:
                    <input type='text' onChange={searchHandler} />
                </label>
                <button onClick={prevBtnHand}>Previos page</button>
                <button onClick={nextBtnHand}>Next page</button>
            </form>

            <section className={styles.container}>
                {users.length > 0 ? renderUsers() : <h2>Users is loading</h2>}
            </section>
        </>
    );
}

export default NewUserList;
