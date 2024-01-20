import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { SiGooglemessages } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";
const AdminLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="wrapper">
        <div className="adminNavbar">
          <ul>
            <li>
              <NavLink to="/admin/home">
                <FaHome /> Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin/users">
                <FaUser /> Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/contacts">
                <SiGooglemessages /> Contacts
              </NavLink>
            </li>
            <li>
              <NavLink to="/service">
                <MdMiscellaneousServices /> Service
              </NavLink>
            </li>
          </ul>
        </div>

        <main>
          <div class="wrapper_inner">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
