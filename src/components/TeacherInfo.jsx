import React from "react";

const TeacherInfo = ({ data }) => {
    return (
        <div>
            <h1 className="text-[18pt] underline underline-offset-4 font-bold max-sm:text-xl">
                SUBMITTED TO
            </h1>
            <div className="text-[15pt] mt-3">
                <h1 className="teacherName text-[18pt] max-sm:text-lg font-bold">
                    {data.teacherName ? data.teacherName : "--"}
                </h1>
                <h2 className="teacherDesignation max-sm:text-base">
                    {data.teacherDesignation ? data.teacherDesignation : "--"}
                </h2>
                <h2 className="teacherDeptName max-sm:text-base">
                    {data.facultyName ? data.facultyName : "--"}
                </h2>
                <h2 className="teacherVersityName max-sm:text-base">
                    Leading University, Sylhet
                </h2>
            </div>
        </div>
    );
};

export default TeacherInfo;
