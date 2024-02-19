import React from "react";

const IndividualTable = ({ data }) => {
    return (
        <table className="border-collapse font-calde text-start text-[14pt] mx-auto">
            <tbody>
                <tr>
                    <td className="font-bold w-[8rem] align-top max-sm:text-base">
                        Name:{" "}
                    </td>
                    <td className="max-sm:text-base">
                        {data.studentName ? data.studentName : "--"}
                    </td>
                </tr>
                <tr>
                    <td className="font-bold w-[8rem] max-sm:text-base align-top">
                        ID:
                    </td>
                    <td className="max-sm:text-base">
                        {data.studentId ? data.studentId : "--"}
                    </td>
                </tr>
                <tr>
                    <td className="font-bold w-[8rem] max-sm:text-base align-top">
                        Batch:
                    </td>
                    <td className="max-sm:text-base">
                        {data.studentBatch ? data.studentBatch : "--"}
                    </td>
                </tr>
                <tr>
                    <td className="font-bold w-[8rem] max-sm:text-base align-top">
                        Deparment:
                    </td>
                    <td>
                        {data.studentDepartment ? data.studentDepartment : "--"}
                    </td>
                </tr>
                <tr>
                    <td className="font-bold w-[8rem] max-sm:text-base align-top">
                        Section:
                    </td>
                    <td className="max-sm:text-base">
                        {data.studentSection ? data.studentSection : "--"}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default IndividualTable;
