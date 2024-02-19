import { Font, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import serifBold from "../assets/fonts/LiberationSerif-Bold.ttf";
import serifRegular from "../assets/fonts/LiberationSerif-Regular.ttf";
const IndividualPdf = ({ data }) => {
    return (
        <>
            <View
                style={{
                    width: "100%",
                    alignContent: "center",
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        gap: 12,
                        textAlign: "center",
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifBold",
                            width: "25%",
                            textAlign: "left",
                        }}
                        break={false}
                    >
                        Name:{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        {data.studentName ? data.studentName : "--"}
                    </Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        gap: 12,
                        textAlign: "center",
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifBold",
                            width: "25%",
                            textAlign: "left",
                        }}
                        break={false}
                    >
                        ID:{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        {data.studentId ? data.studentId : "--"}
                    </Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        gap: 12,
                        textAlign: "center",
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifBold",
                            width: "25%",
                            textAlign: "left",
                        }}
                        break={false}
                    >
                        Batch:{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        {data.studentBatch ? data.studentBatch : "--"}
                    </Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        gap: 12,
                        textAlign: "center",
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifBold",
                            width: "25%",
                            textAlign: "left",
                        }}
                        break={false}
                    >
                        Department:{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        {data.studentDepartment ? data.studentDepartment : "--"}
                    </Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "start",
                        gap: 12,
                        textAlign: "center",
                        marginBottom: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifBold",
                            width: "25%",
                            textAlign: "left",
                        }}
                        break={false}
                    >
                        Section:{" "}
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            textAlign: "left",
                            width: "100%",
                        }}
                    >
                        {data.studentSection ? data.studentSection : "--"}
                    </Text>
                </View>
            </View>
        </>
    );
};

Font.register({ family: "serifBold", src: serifBold });
Font.register({ family: "serifRegular", src: serifRegular });

const styles = StyleSheet.create({
    logo: {
        width: "130px",
        height: "130px",
        objectFit: "contain",
    },
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        fontFamily: "serifRegular",
    },

    header: {
        display: "flex",
        flexDirection: "row",
        gap: 50,
    },
    headerInfo: {
        border: "1px solid #3465a4",
        width: "100%",
        height: "100%",
        textAlign: "center",
        padding: "12px",
    },

    forInfo: {
        border: "1px solid #3465a4",
        width: "100%",
        height: "auto",
        marginTop: 40,
        padding: "12px",
    },
});

export default IndividualPdf;
