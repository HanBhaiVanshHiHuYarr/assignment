import React, {useEffect, useState, FC} from 'react';
import TableBottomPane from './TableBottomPane';
import TableTopPane from './TableTopPane';
import SingleElement from './SingleElement';

interface DisplayData {
  color?: number;
  email: string;
  index: number;
  lastLogin: string;
  name: string;
  role: string;
  status: string;
}

const MainTable: FC<any> = ({data}) => {
  const [sampledata, setSampleData] = useState<DisplayData[]>(data);
  const [page, setPage] = useState<number>(0);
  const [currentData, setCurrentData] = useState<DisplayData[]>([]);

  useEffect(() => {
    const tempData = sampledata.filter((item, index) => {
      if (index >= page * 5 && index < page * 5 + 5) {
        item.color = index;
        return item;
      }
    });
    setCurrentData(tempData);
  }, [page, sampledata]);

  return (
    <div className="h-full w-full bg-white rounded-md drop-shadow-md outline outline-2 outline-neutral-200 flex flex-col divide-y-2 justify-between">
      <div>
        <TableTopPane
          setSampleData={setSampleData}
          sampledata={sampledata}
          lastIndex={sampledata[sampledata?.length - 1].index}
        />
        <div className="">
          {currentData.map(item => {
            return (
              <SingleElement
                data={item}
                sampledata={sampledata}
                setSampleData={setSampleData}
              />
            );
          })}
        </div>
      </div>

      <TableBottomPane
        page={page}
        setPage={setPage}
        maxPage={Math.ceil(sampledata?.length / 5) - 1}
      />
    </div>
  );
};

export default MainTable;
