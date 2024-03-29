import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { AdminContainer, Loading } from '../../components';
import { jwtTokenState } from '../../states/atoms';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const name = ['평균 두께', '거리', '각도', '속도'];
const color = [
  { border: '#007ED1', bg: '#019CD4' },
  { border: '#E82E9A', bg: '#F671BA' },
  { border: '#F38922', bg: '#F2B322' },
  { border: '#5B43B2', bg: '#9361FF' },
];
const GraphView = () => {
  const { state } = useLocation();
  const token = useRecoilValue(jwtTokenState);
  const [select, setSelect] = useState(0);
  const [average, setAverage] = useState<number>(0);
  const arrayData = [
    state.thicknessList.slice(1, -1).split(',').map(Number),
    state.distanceList.slice(1, -1).split(',').map(Number),
    state.angleList.slice(1, -1).split(',').map(Number),
    state.speedList.slice(1, -1).split(',').map(Number),
  ];
  useEffect(() => {
    setAverage(
      arrayData[select].reduce(
        (acc: number, v: number, i: number, a: any) => acc + v / a.length,
        0,
      ),
    );
  }, [select, token]);
  const data = {
    labels: arrayData[select].map((e: any, i: any) => String(i)),
    datasets: [
      {
        label: name[select],
        data: arrayData[select],
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
      },
    },
  };

  const formatter = (select: number) => {
    if (select === 0) return '㎛';
    else if (select === 1) return 'cm';
    else if (select === 2) return 'º';
    else if (select === 3) return 'cm/s';
  };

  return token !== '' ? (
    <AdminContainer
      title="그래프 기록"
      detail="훈련을 진행하는 과정에서의 거리, 각도, 속도, 두께를 그래프로 살펴볼 수 있습니다."
      backlink
    >
      <div className="flex flex-row mt-4">
        <div className="flex flex-col w-[15%] space-y-3">
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
            <p className="text-2xl font-bold">
              {average % 1 === 0 ? average : average.toFixed(2)}
              {formatter(select)}
            </p>
          </div>
          <div className="rounded-[15px] bg-white w-full flex justify-between items-center px-12 py-6">
            <p className="text-2xl font-bold">최대</p>
            <p className="text-2xl font-bold">
              {arrayData[select].reduce(
                (a: any, b: any) => Math.max(a, b),
                -Infinity,
              ) + formatter(select)}
            </p>
          </div>
          <div className="rounded-[15px] bg-white w-full flex justify-between items-center px-12 py-7">
            <p className="text-2xl font-bold">최소</p>
            <p className="text-2xl font-bold">
              {arrayData[select].reduce(
                (a: any, b: any) => Math.min(a, b),
                Infinity,
              ) + formatter(select)}
            </p>
          </div>
        </div>
      </div>
    </AdminContainer>
  ) : (
    <Loading />
  );
};

export default GraphView;
