const CareerCard = ({ img, title, text, logo, name }) => {
  return (
    <div className="flex w-[250px] cursor-pointer flex-col gap-3">
      <div className="border-gray h-[176.6px] w-[250px] rounded-md border-[1px]">
        {img}
      </div>
      <div className="flex flex-col gap-[5px]">
        <h1 className="text-[17px] font-semibold">{title}</h1>
        <p className="text-overflow w-[250px] text-[11px] font-[500] text-[#8a8a8a]">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-1">
        <div className="rounded-full border-[2px] border-gray-100">{logo}</div>
        <div className="truncate text-[12px] text-[#8a8a8a]">{name}</div>
      </div>
    </div>
  );
};

export default CareerCard;
