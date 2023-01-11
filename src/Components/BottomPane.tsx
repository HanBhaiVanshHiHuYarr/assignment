import React from 'react';
import MainTable from './MainTable';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

function BottomPane() {
  const {data} = useQuery(['users'], () => {
    return axios
      .get('https://mocki.io/v1/36a6f4d3-303a-4464-aa7e-d54939b08fae')
      .then(res => res.data);
  });
  return (
    <div className="p-4 grow ">
      {data !== undefined && <MainTable data={data} />}
    </div>
  );
}

export default BottomPane;
