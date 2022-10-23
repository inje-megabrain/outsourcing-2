interface Props {
  title: string;
  detail: string;
  backlink?: string;
  children?: JSX.Element | JSX.Element[];
}

const AdminContainer: React.FC<Props> = ({
  title,
  detail,
  backlink,
  children,
}) => (
  <div className="w-full h-full">
    <div className="w-full h-[180px] pt-[83px] pb-[24px] px-[143px] bg-white">
      <h1 className="text-4xl mb-3 font-semibold">{title}</h1>
      <h3 className="text-[#AAAAAA] text-base">{detail}</h3>
    </div>
    <div className="w-full h-[calc(100%-180px)] px-[143px] pb-[52px] pt-[30px] bg-[#DADADA]">
      {children}
    </div>
  </div>
);

export default AdminContainer;
