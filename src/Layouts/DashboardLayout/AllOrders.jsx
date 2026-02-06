const AllOrders = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">All Orders</h2>

        {/* Search & Filter */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search by Order ID / User"
            className="input input-bordered w-full md:w-64"
          />

          <select className="select select-bordered">
            <option>Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Status</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* Order Row 1 */}
            <tr>
              <td className="font-mono">#ORD-1001</td>
              <td>
                <div>
                  <p className="font-semibold">Sarah Buyer</p>
                  <p className="text-sm text-gray-500">sarah@example.com</p>
                </div>
              </td>
              <td>Windbreaker Jacket</td>
              <td>120</td>
              <td>
                <span className="badge badge-warning">Pending</span>
              </td>
              <td className="text-right">
                <button className="btn btn-sm btn-outline btn-info">
                  View
                </button>
              </td>
            </tr>

            {/* Order Row 2 */}
            <tr>
              <td className="font-mono">#ORD-1002</td>
              <td>
                <div>
                  <p className="font-semibold">Emma Client</p>
                  <p className="text-sm text-gray-500">emma@example.com</p>
                </div>
              </td>
              <td>Winter Hoodie</td>
              <td>200</td>
              <td>
                <span className="badge badge-success">Approved</span>
              </td>
              <td className="text-right">
                <button className="btn btn-sm btn-outline btn-info">
                  View
                </button>
              </td>
            </tr>

            {/* Order Row 3 */}
            <tr>
              <td className="font-mono">#ORD-1003</td>
              <td>
                <div>
                  <p className="font-semibold">Mike Buyer</p>
                  <p className="text-sm text-gray-500">mike@example.com</p>
                </div>
              </td>
              <td>Cotton T-Shirt</td>
              <td>80</td>
              <td>
                <span className="badge badge-error">Rejected</span>
              </td>
              <td className="text-right">
                <button className="btn btn-sm btn-outline btn-info">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Info */}
      <p className="text-sm text-gray-500 mt-4">
        Admin can view order details and track status history from the View page.
      </p>
    </div>
  );
};

export default AllOrders;
