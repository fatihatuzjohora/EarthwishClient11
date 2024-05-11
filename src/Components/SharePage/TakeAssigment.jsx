

const TakeAssigment = () => {
    return (
        <div>
                  <div>
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