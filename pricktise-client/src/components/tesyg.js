<div className="py-20">
          <h2 className="text-3xl font-semibold text-purple-600 mt-2">
            Bids For This Products: {bides?.length}
          </h2>

          <div className="overflow-x-auto shadow mt-10 rounded-lg">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No</th>
                  <th>Producat</th>
                  <th>Bider Info</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {/* row 1 */}
                {bides?.map((bid, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={producat.image }
                              alt="No Img"
                            />
                          </div>
                            
                          </div>
                          <div>
                            <p className="text-md  font-semibold">{producat.title}</p>
                            <p className="font-medium">${producat.price_min}-{producat.price_max}</p>
                        </div>
                        
                      </div>
                    </td>

                    <td className="flex items-center">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={bid.byer_image ? bid.byer_image : "No Img"}
                          alt="No Img"
                        />
                      </div>

                      <div>
                        <p className="font-semibold ml-2.5"> {bid.byer_name}</p>
                        <span className="badge badge-ghost badge-sm">
                          {bid.byer_email}
                        </span>
                      </div>
                    </td>
                    <td>
                      $<span>{bid.bid_price}</span>
                    </td>
                    <th className="flex items-center mt-3 md:mt-3">
                      <button className="btn btn-outline  text-green-600  btn-xs hover:border-green-600 ">
                        Accept Offer
                      </button>
                      <button className="btn ml-2 btn-outline  text-red-600  btn-xs hover:border-red-600 ">
                        Reject offer
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>







// ----------------------------------------------------------

   <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <dialog
                ref={""}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <div className="absolute top-2  right-2">
                    <form method="dialog">
                      <button className="text-2xl ">
                        <IoClose />
                      </button>
                    </form>
                  </div>

                  <div className="">
                    <h2 className="mb-8 text-center   text-2xl font-bold text-gray-900">
                      Give Seller Your Offered Price
                    </h2>
                  </div>

                  <form onSubmit={""} className="space-y-6">
                    {/* Buyer Name and Email Row */}
                    {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          Buyer Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          readOnly
                          defaultValue={user.displayName}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                          required
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                          Buyer Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          readOnly
                          defaultValue={user.email}
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                          required
                        />
                      </div>
                    </div> */}

                    {/* Buyer Image URL */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">
                        Buyer Image URL
                      </label>
                      <input
                        type="url"
                        name="imges"
                        // defaultValue={user.photoURL}
                        readOnly
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                      />
                    </div>

                    {/* Place your Price */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">
                        Place your Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        placeholder="e.g. Artisan Roasters"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                        required
                      />
                    </div>

                    {/* Contact Info */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900">
                        Contact Info
                      </label>
                      <input
                        type="text"
                        name="info"
                        placeholder="e.g. +1-555-1234"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-purple-500 outline-none focus:ring-1 focus:ring-purple-400"
                        required
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 pt-4">
                      <button
                        type="submit"
                        className="rounded-lg bg-purple-600 px-5 py-2 font-medium text-white transition-colors hover:bg-purple-700"
                      >
                        Submit Bid
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
            <div className="flex items-center gap-2 block  md:hidden   ">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>