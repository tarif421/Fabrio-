import React, { useEffect, useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // for modal
  const [showModal, setShowModal] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [newStatus, setNewStatus] = useState("");

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Open modal to update role/status
  const handleUpdate = (user) => {
    setSelectedUser(user);
    setNewRole(user.role);
    setNewStatus(user.status);
    setShowModal(true);
  };

  // Save changes
  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:3000/users/${selectedUser._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: newRole, status: newStatus }),
      });
      const updatedUser = await res.json();

      // Update state locally
      setUsers(users.map(u => u._id === updatedUser._id ? updatedUser : u));
      setShowModal(false);
      setSelectedUser(null);
    } catch (err) {
      console.error("Failed to update user:", err);
    }
  };

  // Suspend/Activate toggle
  const toggleStatus = async (user) => {
    const newStatus = user.status === "Active" ? "Suspended" : "Active";
    try {
      const res = await fetch(`http://localhost:3000/users/${user._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const updatedUser = await res.json();
      setUsers(users.map(u => u._id === updatedUser._id ? updatedUser : u));
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Users</h2>
        <button className="btn btn-warning text-white">Add New User</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      {user.email[0].toUpperCase()}
                    </div>
                  </div>
                  {user.email.split("@")[0]}
                </td>
                <td>{user.email}</td>
                <td>
                  <span className={`badge ${user.role === "buyer" ? "badge-secondary" : "badge-info"}`}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  </span>
                </td>
                <td>
                  <span className={`badge ${user.status === "Active" ? "badge-success" : "badge-error"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="text-right space-x-2">
                  <button className="link link-primary" onClick={() => handleUpdate(user)}>Update</button>
                  <button
                    className={`link ${user.status === "Active" ? "link-error" : "link-success"}`}
                    onClick={() => toggleStatus(user)}
                  >
                    {user.status === "Active" ? "Suspend" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-bold mb-4">Update User</h3>
            <p className="mb-2">Email: {selectedUser.email}</p>
            <label className="block mb-2">Role:</label>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="buyer">Buyer</option>
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
            </select>

            <label className="block mb-2">Status:</label>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
              <option value="Pending">Pending</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                className="btn btn-gray"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
