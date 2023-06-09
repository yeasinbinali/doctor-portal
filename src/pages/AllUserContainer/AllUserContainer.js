import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsersContainer = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctor-portal-server-gamma-five.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold my-5 text-primary">All User</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsersContainer;
