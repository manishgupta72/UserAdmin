import React, { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const EditUser = ({ curUser }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const { authorizationToken } = useAuth();
  const params = useParams();
  console.log("Params single user:", params);

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.userId}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(`single user data ${data}`);
      setData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("updated Successfully");
      } else {
        toast.error("Not updated");
      }
      console.log(response);
    } catch (error) {
      console.error("Error when update data:", error);
    }
  };
  return (
    <div>
      <section>
        <main>
          <div className="section-updation">
            {/* our main registration code  */}
            <div className="updation-form">
              <h1 className="main-heading mb-3">Update User Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={data.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={data.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="phone"
                    value={data.phone}
                    onChange={handleInput}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-submit">
                  Update Now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default EditUser;
