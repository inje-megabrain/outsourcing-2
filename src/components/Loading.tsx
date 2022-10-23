interface Props {}

const Loading: React.FC<Props> = () => (
  <>
    <svg
      aria-hidden="true"
      className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-white rounded-full mr-2"
      role="status"
      viewBox="0 0 24 24"
    ></svg>
  </>
);

export default Loading;
