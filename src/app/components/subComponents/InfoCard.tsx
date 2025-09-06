interface InfoCardProps {
  title: string;
  content?: string;
  para?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

const InfoCard = ({ title, content, icon, para, highlight }: InfoCardProps) => (
  <div
    className={`w-full p-6 rounded-[10px] border-[1px] border-[#D9D9D9] space-y-4 ${
      highlight ? "bg-[#F3F9FC]" : " bg-white"
    }`}
  >
    {icon && icon}
    <h3 className="text-2xl 2xl:text-[32px] leading-10 text-[#011632] font-bold">
      {title}
    </h3>
    <div className="space-y-2">
      <p className="text-base text-left 2xl:text-xl leading-7  text-[#3C4959]">
        {content}
      </p>
      <p className="text-base 2xl:text-xl leading-7  text-secondary-gray">
        {para}
      </p>
    </div>
  </div>
);

export default InfoCard;
