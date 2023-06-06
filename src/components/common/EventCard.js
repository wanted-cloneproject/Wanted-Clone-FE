const EventCard = ({ img, label, title }) => {
  return (
    <div className="flex h-[273px] w-auto flex-col gap-3">
      <img
        src={require(`../../assets/imgs/${img}`)}
        alt={title}
        loading="lazy"
        className="border-gray h-full w-full cursor-pointer rounded-md border-[1px] object-cover"
      />
      <div>
        <span className="inline rounded-sm border-[1px] border-[#ff9100] px-[6px] py-[3px] text-[9px] font-[600] text-[#ff9100]">
          {label}
        </span>
      </div>

      <h1 className="cursor-pointer text-[16px] font-bold">{title}</h1>
    </div>
  );
};

export default EventCard;
