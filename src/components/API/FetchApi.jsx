import { useEffect, useState } from 'react';

export default function FetchApi() {

    const [usersData, setUsersData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showEditUser, setShowEditUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", email: "" });

    const getUsersData = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();
            setUsersData(data.users || []);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
        // console.log("IN getUsersData", usersData);
    }

    const getUsersDataUsingFetch = () => {
        let url = 'https://dummyjson.com/users';
        fetch(url)
            .then(res => res.json())
            .then(data => setUsersData(data.users));
    }

    useEffect(() => {
        // console.log("Before getUsersData", usersData);

        // getUsersData();//async call

        // getUsersDataUsingFetch();
        // console.log("After getUsersData", usersData);
        getJsonServerData();
    }, []);

    // console.log("After useEffect", usersData);

    const handleAddUser = async (e) => {
        e.preventDefault();
        console.log("New User", newUser);
        setNewUser({ name: "", email: "" });
        let url = 'http://localhost:3000/users';
        let response = await fetch(url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }
        );
        response = await response.json();
        console.log("Response", response);
        alert("User Added Successfully", response);
        getJsonServerData();
    }

    const handleDeleteUser = async (id) => {
        let url = `http://localhost:3000/users/${id}`;
        let response = await fetch(url,
            {
                method: "DELETE"
            }
        );
        response = await response.json();
        console.log("Response", response);
        getJsonServerData();

    }

    const handleEditUser = async (e) => {
        e.preventDefault();
        let url = `http://localhost:3000/users/${newUser.id}`;
        console.log("New User", url);
        const response = await fetch(url,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            }
        );
        let data = await response.json();
        console.log("Response", data);
        setShowEditUser(false);
        setNewUser({ name: "", email: "" });
        getJsonServerData();
    }


    const GetWithFetch = () => {
        return (
            <div>
                {loading
                    ? <h4>Loading...</h4>
                    : usersData.map((user) =>
                    (
                        <div key={user.id}>
                            <div style={{ display: "flex", gap: "1rem" }} >

                                {user.image && <img style={{ width: "50px", height: "50px", }} src={user.image} alt="" />}

                                {user.name ? <h5>Name :- {user.name}</h5>
                                    : <h5>Name :- {user.firstName} {user.lastName}</h5>
                                }

                                <h5>Email :- {user.email}</h5>

                                {user.gender && <h5>Gender :- {user.gender}</h5>}

                                {user.age && <h4>Age :- {user.age}</h4>}

                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>

                                <button onClick={() => {
                                    setNewUser(user);
                                    setShowEditUser(true)
                                }
                                }>Edit</button>

                            </div>
                            <hr />
                        </div>
                    ))

                }
            </div >
        )
    }


    const getJsonServerData = async () => {
        const url = 'http://localhost:3000/users';
        let response = await fetch(url);
        let data = await response.json();
        setUsersData(data);
    }

    return (

         <div className='left-container'>

            <h3>Fetch Api</h3>

            <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => setToggle(!toggle)}>{toggle ? "Hide Users" : "Show Users"}</button>
                <button onClick={() => setShowAddUser(!showAddUser)} >{showAddUser ? "Hide Add User" : "Show Add User"}</button>
            </div>

            {
                showEditUser &&
                <EditUser
                    newUser={newUser}
                    setNewUser={setNewUser}
                    handleEditUser={handleEditUser} />
            }


            {
                showAddUser &&
                <AddUser
                    newUser={newUser}
                    setNewUser={setNewUser}
                    handleAddUser={handleAddUser} />
            }

            {
                toggle && <GetWithFetch />
            }






        </div>
    )
}

const AddUser = ({ newUser, setNewUser, handleAddUser }) => {
    return (
        <form onSubmit={handleAddUser}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "1rem" }}>
                <input className='input-field' type="text" placeholder='Name' name='Name' value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <input className='input-field' type="text" placeholder='Email' name='Email' value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <button type="submit">Add User</button>
            </div>
        </form>
    )
}


const EditUser = ({ newUser, setNewUser, handleEditUser }) => {
    console.log("IN EditUser", newUser);

    return (
        <form onSubmit={handleEditUser}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", gap: "1rem" }}>
                <input className='input-field' type="text" placeholder='Name' name='Name' value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
                <input className='input-field' type="text" placeholder='Email' name='Email' value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
                <button type="submit">Edit User</button>
            </div>
        </form>
    )
}
