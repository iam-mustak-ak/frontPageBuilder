import React from 'react';
import { Button, Table } from '@mantine/core';
import { Download as DIcon, Group } from 'lucide-react';
import GroupTable from '../components/GroupTable';
import IndividualTable from '../components/IndividualTable';
import TeacherInfo from '../components/TeacherInfo';
import FrontHeader from '../components/FrontHeader';


const Template1 = ({data,name,sameCheck,tableContent,dateInlcude,forValue,toPDF,targetRef}) => {

  return (
    <div>

      <div id="frontPage" className=' border mt-3 w-full mx-auto my-auto font-serif'>
        <div ref={targetRef} >
          <div className='w-[45rem] bg-white px-8 mx-auto py-6'>
            <FrontHeader data={data}/>

            <div className="topicInfo border border-[#3465a4] mt-[4rem] p-4">
              <table className='border-collapse font-serif text-[14pt]'>
                <tbody>
                  <tr >
                    <td className="font-serifBold w-[11rem] align-top" >{forValue == 'for Assignment' ? 'Asssignment' : 'Lab'} Name: </td>
                    <td>{data.topic ? data.topic : '--'}</td>
                  </tr>
                  <tr>
                    <td className="w-[11rem] align-top">Date of Submission:</td>
                    <td>{dateInlcude ? data.inputDate : '...........................'}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="teacherInfo border border-[#3465a4] mt-[3rem] p-4 text-center font-calde">

              <TeacherInfo data={data}/>

            </div>
            <div className="studentInfo border border-[#3465a4] mt-[3rem] p-4 text-center font-calde">
              <h1 className='text-[18pt] underline underline-offset-4 font-bold'>SUBMITTED BY</h1>
              <div className='text-[15pt] mt-3'>
                {name == 'individual' ? 
                 <IndividualTable data={data}/>
                  :
                  <GroupTable data={data} sameCheck={sameCheck} tableContent={tableContent}/>
                }
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