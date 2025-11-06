import React, { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";
import useAuth from "../Hooks/UserAuth";
import useSecureAxios from "../Hooks/AxiosSecure";

const BidsFood = () => {
  const user = useAuth();
  const axiosHook = useSecureAxios();
  const [bidesData, setBidesData] = useState([]);

  // JWT Custoom Token Verify
  useEffect(() => {
    if (user?.email) {
      axiosHook.get(`/price?email=${user.email}`)
      .then((datra) => {
        console.log("THis is a data of the value", datra.data);
        setBidesData(datra.data);
      });
    }
  }, [user?.email, axiosHook]);

 
  const handelDelet = (_id) => {
    console.log(_id);

    fetch(`https://pricktise-server.vercel.app/price/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("This items Delete Now", data);
        if (data.deletedCount) {
          const filters = bidesData.filter((one) => one._id !== _id);
          setBidesData(filters);
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      {" "}
      <div className=" w-11/12 md:w-9/12 mx-auto my-16 rounded-lg shadow-2xl ">
        <div className="overflow-x-auto shadow rounded-lg">
          <table className="table w-full">
            <thead className="hidden md:table-header-group">
              <tr>
                <th>SL No</th>
                <th>Product</th>
                <th>Seller</th>
                <th>Bid Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {bidesData.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-10 text-center">
                    <ClockLoader color="#2eee36" />
                  </td>
                </tr>
              ) : (
                bidesData.map((bid, index) => (
                  <tr
                    key={bid._id}
                    className="
              block md:table-row 
              border border-gray-200 md:border-b md:border-gray-300 
              rounded-lg md:rounded-none
              mb-5 md:mb-0
              p-2 md:p-3
              
            "
                  >
                    <td className="block md:table-cell font-medium text-sm py-1">
                      <span className="md:hidden text-gray-500 text-xs">
                        SL No:
                      </span>{" "}
                      {index + 1}
                    </td>

                    <td className="block md:table-cell py-2">
                      <div className="flex items-center gap-2 md:gap-3">
                        <img
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full "
                          src={bid.byer_image}
                          alt=""
                        />
                        <p className="font-semibold text-sm md:text-base">
                          {bid.byer_name}
                        </p>
                      </div>
                    </td>

                    <td className="block md:table-cell py-1">
                      <span className="badge badge-ghost badge-sm">
                        {bid.byer_email}
                      </span>
                    </td>

                    <td className="block md:table-cell font-semibold py-1 text-sm md:text-base">
                      ${bid.bid_price}
                    </td>

                    <td className="block md:table-cell py-2">
                      {bid.status === "pending" ? (
                        <div className="badge badge-warning badge-sm md:badge-md">
                          {bid.status}
                        </div>
                      ) : (
                        <div className="badge badge-success badge-sm md:badge-md">
                          {bid.status}
                        </div>
                      )}
                    </td>

                    <td className="block md:table-cell py-1 pt-2">
                      <button
                        onClick={() => handelDelet(bid._id)}
                        className="btn btn-outline text-red-600 btn-xs w-full md:w-auto"
                      >
                        Remove Bid
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BidsFood;
