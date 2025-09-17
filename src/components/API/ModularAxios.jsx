import React, { useEffect, useState } from 'react'
import { getAllUsers, getUserPosts } from '../../api/userService';
import { createPost } from '../../api/postService';

export default function ModularAxios() {
    const [usersData, setUsersData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await getAllUsers();
                setUsersData(res.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();

        async function saveData() {
            try {

                const newPost = await createPost({
                    title: "Modular Axios Example",
                    body: "This is clean and scalable!",
                    userId: 101,
                });
                console.log("Created Post:", newPost.data);
            } catch (err) {
                console.error("Error:", err.message);
            }
        }

        saveData();
    }, []);




    return (
        <div className='left-container'>

            <h3>Modular Axios</h3>

            {
                error ? (
                    <p>Error fetching users: {error.message}</p>
                ) : (
                    usersData && usersData.length > 0 ? (
                        usersData.map(user => {
                            return (
                                <div
                                    style={{
                                        padding: "1rem",
                                        border: "1px solid white"
                                    }}
                                    key={user.id}>
                                    {user.name}
                                </div>
                            )
                        })
                    ) : (
                        <p>No users found</p>
                    )
                )
            }

        </div>

    )
}

