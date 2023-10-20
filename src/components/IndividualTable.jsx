import React from 'react';

const IndividualTable = ({data}) => {
    return (
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
        </table >
    );
};

export default IndividualTable;