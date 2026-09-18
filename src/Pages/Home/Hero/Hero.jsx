import BookImage from "../../../assets/pngwing 1.png";

const Hero = () => {
  return (
    <>
      <div className="flex max-md:flex-col-reverse max-md:text-center items-center justify-center md:p-20 md:gap-21.5 gap-10">
        <div className="space-y-12">
          <h1 className="text-6xl font-bold fpd leading-20">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="w-48 h-16 text-xl btn btn-success rounded-xl">
            <a href="">View The List</a>
          </button>
        </div>
        <div>
          <img className="w-full" src={BookImage} alt="Bundle of books" />
        </div>
      </div>
    </>
  );
};

export default Hero;
