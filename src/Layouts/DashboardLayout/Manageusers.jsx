const ManageUsers = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Manage Users</h2>
        <button className="btn btn-warning text-white">
          Add New User
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
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
            {/* Row 1 */}
            <tr>
              <td className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/150?img=1" />
                  </div>
                </div>
                John Manager
              </td>
              <td>john.manager@example.com</td>
              <td><span className="badge badge-info">Manager</span></td>
              <td><span className="badge badge-success">Active</span></td>
              <td className="text-right space-x-2">
                <button className="link link-primary">Update</button>
                <button className="link link-error">Suspend</button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/150?img=2" />
                  </div>
                </div>
                Sarah Buyer
              </td>
              <td>sarah.buyer@example.com</td>
              <td><span className="badge badge-secondary">Buyer</span></td>
              <td><span className="badge badge-success">Active</span></td>
              <td className="text-right space-x-2">
                <button className="link link-primary">Update</button>
                <button className="link link-error">Suspend</button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/150?img=3" />
                  </div>
                </div>
                Mike Production
              </td>
              <td>mike.prod@example.com</td>
              <td><span className="badge badge-info">Manager</span></td>
              <td><span className="badge badge-error">Suspended</span></td>
              <td className="text-right space-x-2">
                <button className="link link-primary">Update</button>
                <button className="link link-success">Activate</button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://i.pravatar.cc/150?img=4" />
                  </div>
                </div>
                Emma Client
              </td>
              <td>emma.client@example.com</td>
              <td><span className="badge badge-secondary">Buyer</span></td>
              <td><span className="badge badge-success">Active</span></td>
              <td className="text-right space-x-2">
                <button className="link link-primary">Update</button>
                <button className="link link-error">Suspend</button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
