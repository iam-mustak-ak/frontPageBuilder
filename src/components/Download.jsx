import { Button } from '@mantine/core';
import React from 'react'
import { Download as DIcon } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useSelector } from 'react-redux';
const Download = ({ select }) => {
    
    const id = useSelector(state => state.input.data.studentId)

    const donwloadPDF = () => {
        const capture = document.querySelector(`${select}`);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('image/octet-stream');
            const doc = new jsPDF();
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);

            console.log(canvas)
            doc.save(`${id}.pdf`);
        });
    };

  return (
      <Button className='bg-black my-5' onClick={donwloadPDF} rightSection={<DIcon size={14} />}>Download</Button>
  )
}

export default Download