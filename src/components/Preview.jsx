import React from 'react';
import { useSelector } from 'react-redux';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import { useParams } from 'react-router-dom';
import { Margin, Resolution, usePDF } from 'react-to-pdf';

const Preview = () => {
  const template = useSelector(state => state.input.template);
  const { name } = useParams();
  const sameCheck = useSelector(state => state.input.sameCheck);
  const tableContent = useSelector(state => state.input.tableContent);
  const dateInlcude = useSelector(state => state.input.dateInclude);
  const forValue = useSelector(state => state.input.forValue);
  const data = useSelector(state => state.input.data);
  const { toPDF, targetRef } = usePDF({
    filename: `${data.studentId ? data.studentId : 'Front-page'}`,
    page: {
      margin: Margin.MEDIUM,
      format:'a4'
    },
    overrides: {
      pdf: {
        orientation: 'portrait',
        
      }
    },
    resolution: Resolution.EXTREME
  });

  return (
    <div>
      {template == 'template1' ? <Template1
        data={data}
        name={name}
        sameCheck={sameCheck}
        tableContent={tableContent}
        dateInlcude={dateInlcude}
        forValue={forValue}
        toPDF={toPDF}
        targetRef={targetRef}
      /> : ''}
      {template == 'template2' ? <Template2 /> : ''}
    </div>
  );
};

export default Preview;