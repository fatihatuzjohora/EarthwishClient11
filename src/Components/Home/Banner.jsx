import img1 from "../../../public/6.jpeg";
import img2 from "../../../public/5.jpeg";
import img3 from "../../../public/4.jpeg";
import img4 from "../../../public/3.jpeg";
import img5 from "../../../public/2.jpeg";
import img6 from "../../../public/1.jpeg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute h-full items-center flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  space-y-7 pl-12 w-1/2">
              <p className="text-xl md:text-6xl font-bold ">
                Group study part of life & importent
              </p>
              <p className="">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="">
                <button className="btn bg-orange-400 mr-5 mb-2">
                  Discover More
                </button>
                <button className="btn">Latest Project</button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute h-full items-center flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  space-y-7 pl-12 w-1/2">
              <p className="text-xl md:text-6xl font-bold ">
                Always consuntration your study
              </p>
              <p className="">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="">
                <button className="btn bg-orange-400 mr-5 mb-2">
                  Discover More
                </button>
                <button className="btn">Latest Project</button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute h-full items-center flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  space-y-7 pl-12 w-1/2">
              <p className="text-xl md:text-6xl font-bold ">
                Group study part of life & importent
              </p>
              <p className="">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="">
                <button className="btn bg-orange-400 mr-5 mb-2">
                  Discover More
                </button>
                <button className="btn">Latest Project</button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute h-full items-center flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  space-y-7 pl-12 w-1/2">
              <p className="text-xl md:text-6xl font-bold ">
                Always consuntration your study
              </p>
              <p className="">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="">
                <button className="btn bg-orange-400 mr-5 mb-2">
                  Discover More
                </button>
                <button className="btn">Latest Project</button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute h-full items-center flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  space-y-7 pl-12 w-1/2">
              <p className="text-xl md:text-6xl font-bold ">
                Group study part of life & importent
              </p>
              <p className="">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="">
                <button className="btn bg-orange-400 mr-5 mb-2">
                  Discover More
                </button>
                <button className="btn">Latest Project</button>
              </div>
            </div>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute h-full items-center flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white  space-y-7 pl-12 w-1/2">
              <p className="text-xl md:text-6xl font-bold ">
                Always consuntration your study
              </p>
              <p className="">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="">
                <button className="btn bg-orange-400 mr-5 mb-2">
                  Discover More
                </button>
                <button className="btn">Latest Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
