import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0f172a] text-white flex flex-col">
      {/* Logo */}
      <div className="p-5 text-xl font-bold border-b border-gray-700">
        Garment<span className="text-blue-400">Flow</span>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink className="block px-4 py-2 rounded hover:bg-gray-700">
          Dashboard
        </NavLink>

        <NavLink
          to="manage-users"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition
     ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`
          }
        >
          Manage Users
        </NavLink>

        <NavLink
          to="all-product"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition
     ${isActive ? "bg-gray-700 text-white" : "hover:bg-gray-700"}`
          }
        >
          All Products
        </NavLink>

        {/* className={({ isActive }) =>
            isActive ? "text-[#192586] font-semibold" : "hover:text-[#27379b]"
          } */}

        <NavLink className="block px-4 py-2 rounded hover:bg-gray-700">
          All Orders
        </NavLink>

        <NavLink className="block px-4 py-2 rounded hover:bg-gray-700">
          Settings
        </NavLink>
      </nav>

      {/* Admin Info */}
      <div className="p-4 border-t border-gray-700 flex items-center gap-3">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://i.pravatar.cc/100" />
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Admin User</p>
          <p className="text-xs text-gray-400">admin@garmentflow.com</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
