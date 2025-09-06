interface IndustryCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
}

const IndustryCard = ({
  title,
  description,
  icon,
  isHighlighted = false,
}: IndustryCardProps) => (
  <div
    className={`rounded-xl flex gap-3 p-5 border-2 ${
      isHighlighted
        ? "border-[#5c5ccd]  bg-[#F3F9FC]"
        : "border-gray-200 bg-white"
    } transition-all min-h-[144px]`}
  >
    <div className="text-4xl text-black flex-shrink-0">{icon}</div>
    <div className="flex flex-col gap-2 flex-1">
      <h4 className="font-bold text-xl leading-[30px] text-[#011632]">
        {title}
      </h4>
      <p className="text-base text-[#3C4959] leading-[22px]">{description}</p>
    </div>
  </div>
);

export default IndustryCard;
