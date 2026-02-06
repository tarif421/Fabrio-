const Setting = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-10">
      {/* Page Title */}
      <h2 className="text-2xl font-bold">Settings</h2>

      {/* Profile Settings */}
      <div className="border rounded-lg p-5">
        <h3 className="text-lg font-semibold mb-4">Profile Settings</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Admin Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />
        </div>

        <button className="btn btn-primary mt-4">
          Update Profile
        </button>
      </div>

      {/* Password Settings */}
      <div className="border rounded-lg p-5">
        <h3 className="text-lg font-semibold mb-4">Change Password</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="password"
            placeholder="Current Password"
            className="input input-bordered"
          />
          <input
            type="password"
            placeholder="New Password"
            className="input input-bordered"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="input input-bordered"
          />
        </div>

        <button className="btn btn-warning mt-4">
          Change Password
        </button>
      </div>

      {/* System Settings */}
      <div className="border rounded-lg p-5">
        <h3 className="text-lg font-semibold mb-4">System Settings</h3>

        <div className="flex flex-col gap-4">
          <label className="flex items-center justify-between">
            <span>Enable Email Notifications</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>

          <label className="flex items-center justify-between">
            <span>Allow New User Registration</span>
            <input type="checkbox" className="toggle toggle-success" />
          </label>

          <label className="flex items-center justify-between">
            <span>Maintenance Mode</span>
            <input type="checkbox" className="toggle toggle-error" />
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="border border-red-300 rounded-lg p-5">
        <h3 className="text-lg font-semibold text-red-600 mb-3">
          Danger Zone
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          These actions are irreversible. Please be careful.
        </p>

        <button className="btn btn-outline btn-error">
          Reset System Settings
        </button>
      </div>
    </div>
  );
};

export default Setting;
