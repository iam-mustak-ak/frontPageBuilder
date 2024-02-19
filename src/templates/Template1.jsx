import { Button } from "@mantine/core";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import React from "react";
import FrontHeader from "../components/FrontHeader";
import GroupTable from "../components/GroupTable";
import IndividualTable from "../components/IndividualTable";
import TeacherInfo from "../components/TeacherInfo";
import Template from "../pdfTemplates/Template";

const Template1 = ({
    data,
    name,
    sameCheck,
    tableContent,
    dateInlcude,
    forValue,
}) => {
    return (
        <div>
            <div
                id="frontPage"
                className=" border mt-3 w-full mx-auto my-auto font-serif"
            >
                <div>
                    <div className=" bg-white px-8 mx-auto py-6">
                        <FrontHeader data={data} />

                        <div className="topicInfo border border-[#3465a4] mt-[4rem] p-4">
                            <table className="border-collapse font-serif text-[14pt]">
                                <tbody>
                                    <tr>
                                        <td className="font-serifBold w-[11rem] align-top">
                                            {forValue == "for Assignment"
                                                ? "Asssignment"
                                                : "Lab"}{" "}
                                            Name:{" "}
                                        </td>
                                        <td>
                                            {data.topic ? data.topic : "--"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-[11rem] align-top">
                                            Date of Submission:
                                        </td>
                                        <td>
                                            {dateInlcude
                                                ? data.inputDate
                                                : "..........................."}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="teacherInfo border border-[#3465a4] mt-[3rem] p-4 text-center font-calde">
                            <TeacherInfo data={data} />
                        </div>
                        <div className="studentInfo border border-[#3465a4] mt-[3rem] p-4 text-center font-calde">
                            <h1 className="text-[18pt] underline underline-offset-4 font-bold">
                                SUBMITTED BY
                            </h1>
                            <div className="text-[15pt] mt-3">
                                {name == "individual" ? (
                                    <IndividualTable data={data} />
                                ) : (
                                    <GroupTable
                                        data={data}
                                        sameCheck={sameCheck}
                                        tableContent={tableContent}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <PDFDownloadLink
                    document={
                        <Template
                            data={data}
                            forValue={forValue}
                            dateInlcude={dateInlcude}
                        />
                    }
                    fileName={data.studentId}
                >
                    {({ blob, url, loading, error }) =>
                        loading ? (
                            "Loading document..."
                        ) : (
                            <Button
                                className="bg-black my-5"
                                rightSection={<Download size={14} />}
                            >
                                Download
                            </Button>
                        )
                    }
                </PDFDownloadLink>
            </div>
        </div>
    );
};

export default Template1;
