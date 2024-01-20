import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
const AdminContact = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();
  const getContactData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        console.log(response);
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        getContactData();
        toast.success("deleted Successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContactData();
  }, []);
  return (
    <>
      <section className="admin-contacts-section">
        <h1 className="ch">Admin Contact Data</h1>
        <div className="admin-users">
          {contactData &&
            contactData.map((curContact, index) => {
              const { username, email, message, _id } = curContact;
              return (
                <div key={index} className="box">
                  <p style={{fontWeight:"bolder"}}>{username}</p>
                  <p style={{fontWeight:"bold"}}>{email}</p>
                  <p>{message}</p>
                  <button
                    className="btn"
                    onClick={() => deleteContactById(_id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default AdminContact;
