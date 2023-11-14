const PropretyCard = ({ imageDimensions }) => {
  return (
    <div className="flex-1 rounded-3xs bg-gray-white box-border h-[467px] flex flex-col items-start justify-start py-[15px] px-[13px] gap-[23px] min-w-[355px] max-w-[400px] text-left text-[14.51px] text-gray-700 font-body-large-400 border-[1px] border-solid border-whitesmoke hover:bg-gainsboro hover:cursor-pointer sm:w-[100%!important] sm:mb-5">
      <img
        className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="self-stretch flex flex-row items-start justify-start p-2.5">
        <div className="flex-1 relative leading-[20.32px] font-medium">
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start p-2.5 text-[13.55px] text-primary-500">
        <div className="relative leading-[18.98px] font-semibold">
          $ 590,693
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 gap-[17px] text-[10.84px] text-gray-500">
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.4px] h-[17.4px]"
            alt=""
            src="/car.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.4px] h-[17.4px]"
            alt=""
            src="/bathtub.svg"
          />
          <div className="relative leading-[16.27px] font-medium">4</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[4.35px]">
          <img
            className="relative w-[17.4px] h-[17.4px]"
            alt=""
            src="/arrowsout.svg"
          />
          <div className="relative leading-[16.27px] font-medium">
            2,096.00 ft
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-center text-[11.61px]">
        <div className="flex flex-row items-center justify-start gap-[5.81px]">
          <img
            className="relative rounded-[50%] w-[27.6px] h-[27.6px] object-cover"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className="relative leading-[17.42px] font-medium">
            Jenny Wilson
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8.71px]">
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="relative w-[14.5px] h-[14.5px]"
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="relative w-[14.5px] h-[14.5px]"
              alt=""
              src="/heart.svg"
            />
          </div>
          <div className="rounded-[1.45px] bg-primary-50 flex flex-row items-start justify-start p-[2.902620315551758px]">
            <img
              className="relative w-[14.5px] h-[14.5px]"
              alt=""
              src="/plus.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropretyCard;
