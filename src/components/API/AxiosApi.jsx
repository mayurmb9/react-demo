import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AxiosApi() {

    const [usersData, setUsersData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showEditUser, setShowEditUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [newUser, setNewUser] = useState({ name: "", email: "" });

   
    const getUsersData = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://dummyjson.com/users");
            setUsersData(response.data.users || []);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    const getJsonServerData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            setUsersData(response.data);
        } catch (error) {
            console.error("Error fetching from json-server:", error);
        }
    };

    useEffect(() => {
        getJsonServerData();
    }, []);


    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/users", newUser);
            console.log("Response", response.data);
            alert("User Added Successfully");
            setNewUser({ name: "", email: "" });
            getJsonServerData();
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`);
            getJsonServerData();
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    
    const handleEditUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/users/${newUser.id}`, newUser);
            console.log("Response", response.data);
            setShowEditUser(false);
            setNewUser({ name: "", email: "" });
            getJsonServerData();
        } catch (error) {
            console.error("Error editing user:", error);
        }
    };

    const GetWithAxios = () => {
        return (
            <div>
                {loading ? (
                    <h4>Loading...</h4>
                ) : (
                    usersData.map((user) => (
                        <div key={user.id}>
                            <div style={{ display: "flex", gap: "1rem" }}>
                                {user.image && (
                                    <img
                                        style={{ width: "50px", height: "50px" }}
                                        src={user.image}
                                        alt=""
                                    />
                                )}

                                {user.name ? (
                                    <h5>Name :- {user.name}</h5>
                                ) : (
                                    <h5>
                                        Name :- {user.firstName} {user.lastName}
                                    </h5>
                                )}

                                <h5>Email :- {user.email}</h5>

                                {user.gender && <h5>Gender :- {user.gender}</h5>}

                                {user.age && <h4>Age :- {user.age}</h4>}

                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>

                                <button
                                    onClick={() => {
                                        setNewUser(user);
                                        setShowEditUser(true);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                            <hr />
                        </div>
                    ))
                )}
            </div>
        );
    };

    return (
       <div className='left-container'>

            <h3>Axios Api</h3>

            <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? "Hide Users" : "Show Users"}
                </button>
                <button onClick={() => setShowAddUser(!showAddUser)}>
                    {showAddUser ? "Hide Add User" : "Show Add User"}
                </button>
            </div>

            {showEditUser && (
                <EditUser
                    newUser={newUser}
                    setNewUser={setNewUser}
                    handleEditUser={handleEditUser}
                />
            )}

            {showAddUser && (
                <AddUser
                    newUser={newUser}
                    setNewUser={setNewUser}
                    handleAddUser={handleAddUser}
                />
            )}

            {toggle && <GetWithAxios />}
        </div>
    );
}


const AddUser = ({ newUser, setNewUser, handleAddUser }) => {
    return (
        <form onSubmit={handleAddUser}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    gap: "1rem",
                }}
            >
                <input
                    className="input-field"
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                    }
                />
                <input
                    className="input-field"
                    type="text"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                />
                <button type="submit">Add User</button>
            </div>
        </form>
    );
};


const EditUser = ({ newUser, setNewUser, handleEditUser }) => {
    return (
        <form onSubmit={handleEditUser}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    gap: "1rem",
                }}
            >
                <input
                    className="input-field"
                    type="text"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                    }
                />
                <input
                    className="input-field"
                    type="text"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                />
                <button type="submit">Edit User</button>
            </div>
        </form>
    );
};
