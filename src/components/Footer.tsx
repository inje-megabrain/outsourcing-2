interface Props {
  theme?: 'white' | 'black';
}

const Footer: React.FC<Props> = ({ theme }) => (
  <div className="flex -z-6 w-full text-center justify-center bottom-0">
    <h6
      className={`text-md ${
        (theme === 'white' && 'text-white') ||
        ((theme === 'black' || theme === undefined) && 'text-black')
      }`}
    >
      Copyright 2021. SimG. Co., Ltd. all rights reserved.
    </h6>
  </div>
);

export default Footer;
