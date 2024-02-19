import { Text, View } from "@react-pdf/renderer";
import React from "react";

const GroupPdf = ({ data, tableContent, sameCheck }) => {
    return (
        <View style={{ flexDirection: "column", gap: 10 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #ced4da",
                }}
            >
                <Text
                    style={{
                        fontSize: "11pt",
                        fontFamily: "serifBold",
                        marginBottom: 4,
                        flex: 2,
                    }}
                >
                    Name
                </Text>
                <Text
                    style={{
                        fontSize: "11pt",
                        fontFamily: "serifBold",
                        flex: 1,
                    }}
                >
                    ID
                </Text>
                <Text
                    style={{
                        fontSize: "11pt",
                        fontFamily: "serifBold",
                        flex: 3,
                    }}
                >
                    Department
                </Text>
                <Text
                    style={{
                        fontSize: "11pt",
                        fontFamily: "serifBold",
                        flex: 1,
                    }}
                >
                    Section
                </Text>
                <Text
                    style={{
                        fontSize: "11pt",
                        fontFamily: "serifBold",
                    }}
                >
                    Batch
                </Text>
            </View>

            {tableContent.map((table, ind) => (
                <View
                    key={ind}
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        gap: 4,
                        borderBottom: "1px solid #ced4da",
                        paddingBottom: 3,
                    }}
                >
                    <Text
                        style={{
                            fontSize: "11pt",
                            flex: 2,
                            textAlign: "left",
                        }}
                    >
                        {data[`studentName${table}`] || "--"}
                    </Text>
                    <Text
                        style={{
                            fontSize: "11pt",
                            flex: 1,
                            textAlign: "left",
                        }}
                    >
                        {data[`studentId${table}`] || "--"}
                    </Text>

                    <Text
                        style={{
                            fontSize: "11pt",
                            flex: 3,
                            textAlign: "left",
                        }}
                    >
                        {sameCheck
                            ? data[`studentDepartment1`]
                            : data[`studentDepartment${table}`] || "--"}
                    </Text>

                    <Text
                        style={{
                            fontSize: "11pt",
                            flex: 1,
                            textAlign: "left",
                        }}
                    >
                        {sameCheck
                            ? data[`studentSection1`]
                            : data[`studentSection${table}`] || "--"}
                    </Text>

                    <Text style={{ fontSize: "11pt", textAlign: "left" }}>
                        {sameCheck
                            ? data[`studentBatch1`]
                            : data[`studentBatch${table}`] || "--"}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default GroupPdf;
