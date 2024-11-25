import Image from "next/image";

const CountriesCard = ({ data }) => {
  return (
    <div className=" max-w-7xl mx-auto">
      <h5 className="font-poppins font-[600] text-[20px] sm:text-[25px] md:text-[32px] text-white lg:text-[46px] text-center">
        Located in <span className="text-[#FF6E4E]">5 Countries</span>
      </h5>
      <div className="font-poppins mb-3 font-[300] text-[12px] xl:text-[14px] 2xl:text-[16px] sm:text-[16px] mt-4 leading-8 w-[90%] lg:w-[83%] xl:w-[75%] 2xl:w-[60%] m-auto text-[#b5b2b2] text-center">
        <p>
          Strugbits caters to a worldwide audience and clientele. Working with a
          diverse range of people makes us more adaptable and acceptable to
          unique digital needs and ideas. No matter where you are from or what
          you do, we can provide the online assistance you require.{" "}
        </p>
      </div>

      <div className="flex justify-around my-16 flex-wrap gap-2">
        {data.map((item, index) => {
          const { country, img } = item;
          return (
            <div
              key={index}
              className="border max-w-[350px] h-[220px] rounded-lg"
            >
              <h3 className="font-poppins text-[20px] leading-[42px] font-[600] text-white mt-7">
                {country}
                <Image
                  src={img}
                  width={230}
                  height={200}
                  quality={100}
                  className="p-2"
                  alt="image"
                />
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesCard;

export const StaffCountriesCard = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <h6 className="font-poppins space-x-2 text-[25px] sm:text-[28px] md:text-[32px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px] text-center font-bold capitalize">
        Located in <span className="text-[#FF6E4E]">5 Countries</span>
      </h6>
      <div className="font-poppins mb-3 font-[300] text-[12px] xl:text-[14px] 2xl:text-[16px] sm:text-[16px] mt-4 leading-8 w-[90%] lg:w-[89%] xl:w-[80%] 2xl:w-[90%] m-auto  text-center">
        <p>
          Strugbits caters to a worldwide audience and clientele. By leveraging
          talent from various regions, we ensure that our clients receive the
          best possible solutions, tailored to meet the specific demands of
          their industries.
        </p>
      </div>

      <div className="flex justify-around my-16 flex-wrap gap-2">
        {data.map((item, index) => {
          const { country, img } = item;
          return (
            <div
              key={index}
              className="border max-w-[350px] h-[220px] rounded-lg"
            >
              <h3 className="font-poppins text-[20px] leading-[42px] font-[600] text-black mt-7">
                {country}
                <Image
                  src={img}
                  width={230}
                  height={200}
                  quality={100}
                  className="p-2"
                  alt="image"
                />
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};