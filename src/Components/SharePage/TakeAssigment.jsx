import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Link } from "react-router-dom";

const TakeAssigment = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="md:ml-32">
        <section className="p-6 w-[600px]  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
          {/* <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Place A Bid
          </h2> */}

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              {/* <div>
                <label className="text-gray-700 " htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div> */}

              <div>
                <label className="text-gray-700 " htmlFor="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-gray-700 " htmlFor="">
                PDF/doc link
                </label>
                <input
                  id=""
                  type="text"
                  name=""
                  placeholder="PDF/doc link"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

             

              <div>
                <label className="text-gray-700 " htmlFor="comment">
                  Comment
                </label>
                
                <input
                  id="comment"
                  name="comment"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700">Deadline</label>
              </div>
            </div>

            <div className="flex justify-end mt-6">
             <Link to='/pendingassigment'>
             <button
                type="submit"
                className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Submitted Assignment
              </button></Link>
            </div>
          </form>
        </section>

        <form>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="website" className=" font-bold">
          Email
          </label>
          <input
            id=""
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
          />
        </div>

        <div className="col-span-full sm:col-span-3">
          <label htmlFor="website" className=" font-bold">
          PDF/doc link
          </label>
          <input
            id=""
            type="text"
            name=""
            placeholder="PDF/doc link"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
          />
        </div>
        <div className="col-span-full sm:col-span-3">
          <label htmlFor="website" className=" font-bold">
          pending status
          </label>
          <input
            id=""
            type="text"
            name=""
            placeholder="pending status"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
          />
        </div>
        <div className="col-span-full">
          <label htmlFor="bio" className="font-bold">
            Text/ Message
          </label>
          <textarea
            id=""
            type='text'
            name=""
            placeholder="Text/Message"
            className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
          ></textarea>
        </div>
        </form>
      </div>
    </div>
  );
};

export default TakeAssigment;
