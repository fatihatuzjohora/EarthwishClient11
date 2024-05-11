import { Link, useLoaderData, useParams } from "react-router-dom";

const Vew = () => {
  const items = useLoaderData();
  const { _id } = useParams();
  const singleData = items?.find((i) => i._id == _id);
 // console.log(singleData);
  return (
    <div>
      <div className="mt-5 mb-5">
        <h1 className="font-extrabold text-3xl md:text-5xl lg:text-5xl mx-auto items-center text-center mt-10 mb-10">
          Views Detiles
        </h1>

        <div className=" card bg-base-100 shadow-xl p-6 border ">
          <div className=" ">
            <div>
              <figure>
                <img
                  className="rounded-xl md:h-[400px]"
                  src={singleData?.photo}
                  alt="image"
                />
              </figure>
            </div>
            <div className="ml-24">
              <h2 className=" md:text-3xl md:font-bold mt-5">
                {singleData?.titleName}
              </h2>
              <p className="mt-3 md:text-2xl font-semibold  ">
                {singleData?.description}
              </p>

              <h1 className="mt-2 md:text-2xl font-semibold ">
                {singleData?.mark}
              </h1>

              <h1 className="mt-2 md:text-2xl font-semibold ">
                {singleData?.processingTime}
              </h1>
            
              <div>
              <Link 
              to={`/takeassigment/${singleData?._id}`}
              >
                        <button className="btn bg-green-400">Take Assigment</button>
                      </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vew;
