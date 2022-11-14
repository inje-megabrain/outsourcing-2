import { AdminContainer } from '../../components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const GraphView = () => {
  const [select, setSelect] = useState(0);
  const name = ['평균 두께', '거리', '각도', '속도'];
  const color = [
    { border: '#007ED1', bg: '#019CD4' },
    { border: '#E82E9A', bg: '#F671BA' },
    { border: '#F38922', bg: '#F2B322' },
    { border: '#5B43B2', bg: '#9361FF' },
  ];
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  const data = {
    labels,
    datasets: [
      {
        label: name[select],
        data: labels.map((e, i) => 30 + select * i * 5),
        borderColor: color[select].border,
        backgroundColor: color[select].bg,
        borderWidth: 6,
        spanGaps: true,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 15,
          },
        },
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const navigate = useNavigate();

  return (
    <AdminContainer
      title="그래프 기록"
      detail="훈련을 진행하는 과정에서의 거리, 각도, 속도, 두께를 그래프로 살펴볼 수 있습니다."
      backlink={navigate}
    >
      <div className="flex flex-row mt-5">
        <div className="flex flex-col w-[15%] space-y-4">
          <button
            onClick={() => {
              setSelect(0);
            }}
            className="bg-[#F3F5F9] shadow-[0px_3px_26px_rgba(0,0,0,0.19)] h-[90px] rounded-[10px] flex justify-center"
          >
            <hr className="w-3 bg-gradient-to-l from-[#007ED1] to-[#019CD4] h-full rounded-l-[10px] inline-block" />
            <div className="flex w-[calc(100%-12px)] h-full justify-center items-center">
              <p className="text-2xl font-bold">평균 두께</p>
            </div>
          </button>
          <button
            onClick={() => {
              setSelect(1);
            }}
            className="bg-[#F3F5F9] shadow-[0px_3px_26px_rgba(0,0,0,0.19)] h-[90px] rounded-[10px] flex justify-center"
          >
            <hr className="w-3 bg-gradient-to-l from-[#E82E9A] to-[#F671BA] h-full rounded-l-[10px] inline-block" />
            <div className="flex w-[calc(100%-12px)] h-full justify-center items-center">
              <p className="text-2xl font-bold">거리</p>
            </div>
          </button>
          <button
            onClick={() => {
              setSelect(2);
            }}
            className="bg-[#F3F5F9] shadow-[0px_3px_26px_rgba(0,0,0,0.19)] h-[90px] rounded-[10px] flex justify-center"
          >
            <hr className="w-3 bg-gradient-to-l from-[#F38922] to-[#F2B322] h-full rounded-l-[10px] inline-block" />
            <div className="flex w-[calc(100%-12px)] h-full justify-center items-center">
              <p className="text-2xl font-bold">각도</p>
            </div>
          </button>
          <button
            onClick={() => {
              setSelect(3);
            }}
            className="bg-[#F3F5F9] shadow-[0px_3px_26px_rgba(0,0,0,0.19)] h-[90px] rounded-[10px] flex justify-center"
          >
            <hr className="w-3 bg-gradient-to-l from-[#5B43B2] to-[#9361FF] h-full rounded-l-[10px] inline-block" />
            <div className="flex w-[calc(100%-12px)] h-full justify-center items-center">
              <p className="text-2xl font-bold">속도</p>
            </div>
          </button>
        </div>
        <div className="w-[83%] ml-6 p-[2%] space-y-4 h-auto">
          <Line options={options} data={data} height="100%" />
          <div className="rounded-[15px] bg-white w-full flex justify-between items-center px-12 py-7">
            <p className="text-2xl font-bold">평균</p>
            <p className="text-2xl font-bold">150cm/s</p>
          </div>
          <div className="rounded-[15px] bg-white w-full flex justify-between items-center px-12 py-7">
            <p className="text-2xl font-bold">최대</p>
            <p className="text-2xl font-bold">200cm/s</p>
          </div>
          <div className="rounded-[15px] bg-white w-full flex justify-between items-center px-12 py-7">
            <p className="text-2xl font-bold">최소</p>
            <p className="text-2xl font-bold">40cm/s</p>
          </div>
        </div>
      </div>
    </AdminContainer>
  );
};

export default GraphView;
