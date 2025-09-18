import React, { useState, useCallback } from 'react'
import { shuffle } from 'lodash';
import Search from './Search';

const allUsers = [
    'Arya Stark',
    'John Snow',
    'Rob Stark',
    'Sansa Stark',
    'Bran Stark',
    'Daenerys Targaryen',
    'Tyrion Lannister',
    'Jaime Lannister',
    'Cersei Lannister'
]
export default function UseCallBackHook() {

    const [users, setUsers] = useState(allUsers);

    // const handleSearch = (searchTerm) => {
    //     const filteredUsers = allUsers.filter((user) => user.toLowerCase().includes(searchTerm.toLowerCase()));
    //     setUsers(filteredUsers);
    // }
    const handleSearch = useCallback((searchTerm) => {
        console.log(users[0]);
        const filteredUsers = allUsers.filter((user) => user.toLowerCase().includes(searchTerm.toLowerCase()));
        setUsers(filteredUsers);
    }, [users])


    return (
        <div>
            <h3>UseCallBackHook</h3>

            <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => setUsers(shuffle(allUsers))}>
                    Shuffle
                </button>
                <Search onChange={handleSearch} />
            </div>

            {
                users.map((user) => <h4 key={user}>- {user}</h4>)
            }

        </div>
    )
}
