import React from 'react';
import { useSelector } from 'react-redux';
import { Margin, usePDF } from 'react-to-pdf';
import { Button } from '@mantine/core';
import { Download as DIcon } from 'lucide-react';


const Template1 = () => {

  const dateInlcude = useSelector(state => state.input.dateInclude);
  const forValue = useSelector(state => state.input.forValue);
  const data = useSelector(state => state.input.data);
  const { toPDF, targetRef } = usePDF({
    filename: `${data.studentId?data.studentId:'Front-page'}`,
    page: {
      margin: Margin.MEDIUM
    }
  });

  return (
    <div>

      <div id="frontPage" className='border mt-3 w-full mx-auto my-auto font-serif'>

        <div ref={targetRef} >
          <div className='w-[45rem] px-8 mx-auto py-6'>

            <div className="frontHeader flex gap-7 items-center w-full">
              <img src={data.photo} alt="" className='w-[151px] h-[151px] object-contain' />
              <div className="headerInfo border text-center flex-1 p-3 border-[#3465a4]">
                <h1 className="varsityName text-[20pt] font-bold font-serifBold">Leading University, Sylhet</h1>
                <h2 className="deptName text-[16pt]">{data.deptName ? data.deptName : '--'}</h2>
                <div className='text-start pt-4'>

                  <table className='border-collapse font-serif text-[14pt]'>
                    <tbody>
                      <tr >
                        <td className="font-serifBold w-[8rem] align-top" >Course Code: </td>
                        <td>{data.courseCode ? data.courseCode : '--'}</td>
                      </tr>
                      <tr>
                        <td className="font-serifBold w-[8rem] align-top">Course Title:</td>
                        <td>{data.courseTitle ? data.courseTitle : '--'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="topicInfo border border-[#3465a4] mt-[4rem] p-4">
              <table className='border-collapse font-serif text-[14pt]'>
                <tbody>
                  <tr >
                    <td className="font-serifBold w-[11rem] align-top" >{forValue == 'for Assignment' ?'Asssignment':'Lab'} Name: </td>
                    <td>{data.topic ? data.topic : '--'}</td>
                  </tr>
                  <tr>
                    <td className="w-[11rem] align-top">Date of Submssion:</td>
                    <td>{dateInlcude ? data.inputDate : '...........................'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="teacherInfo border border-[#3465a4] mt-[3rem] p-4 text-center font-calde">

              <h1 className='text-[18pt] underline underline-offset-4 font-bold'>SUBMITTED TO</h1>
              <div className='text-[15pt] mt-3'>
                <h1 className="teacherName text-[18pt] font-bold">{data.teacherName ? data.teacherName : '--'}</h1>
                <h2 className="teacherDesignation">{data.teacherDesignation ? data.teacherDesignation : '--'}</h2>
                <h2 className='teacherDeptName'>{data.facultyName ? data.facultyName : '--'}</h2>
                <h2 className='teacherVersityName'>Leading University, Sylhet</h2>

              </div>

            </div>
            <div className="studentInfo border border-[#3465a4] mt-[3rem] p-4 text-center font-calde">
              <h1 className='text-[18pt] underline underline-offset-4 font-bold'>SUBMITTED BY</h1>
              <div className='text-[15pt] mt-3'>
                <table className='border-collapse font-calde text-start text-[14pt] mx-auto'>
                  <tbody>
                    <tr >
                      <td className="font-bold w-[8rem] align-top " >Name: </td>
                      <td>{data.studentName ? data.studentName : '--'}</td>
                    </tr>
                    <tr>
                      <td className="font-bold w-[8rem] align-top">ID:</td>
                      <td>{data.studentId ? data.studentId : '--'}</td>
                    </tr>
                    <tr>
                      <td className="font-bold w-[8rem] align-top">Batch:</td>
                      <td>{data.studentBatch ? data.studentBatch : '--'}</td>
                    </tr>
                    <tr>
                      <td className="font-bold w-[8rem] align-top">Deparment:</td>
                      <td>{data.studentDepartment ? data.studentDepartment : '--'}</td>
                    </tr>
                    <tr>
                      <td className="font-bold w-[8rem] align-top">Section:</td>
                      <td>{data.studentSection ? data.studentSection : '--'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>
        </div>


      </div>

      <div className='flex items-center justify-center'>
        <Button onClick={() => toPDF()} className='bg-black my-5' rightSection={<DIcon size={14} />}>Download</Button>
      </div>


    </div>

  );
};

export default Template1;