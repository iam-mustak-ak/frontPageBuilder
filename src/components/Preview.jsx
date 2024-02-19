import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";

const Preview = () => {
    const template = useSelector((state) => state.input.template);
    const { name } = useParams();
    const sameCheck = useSelector((state) => state.input.sameCheck);
    const tableContent = useSelector((state) => state.input.tableContent);
    const dateInlcude = useSelector((state) => state.input.dateInclude);
    const forValue = useSelector((state) => state.input.forValue);
    const data = useSelector((state) => state.input.data);
    return (
        <div>
            {template == "template1" ? (
                <Template1
                    data={data}
                    name={name}
                    sameCheck={sameCheck}
                    tableContent={tableContent}
                    dateInlcude={dateInlcude}
                    forValue={forValue}
                />
            ) : (
                ""
            )}
            {template == "template2" ? <Template2 /> : ""}
        </div>
    );
};

export default Preview;
