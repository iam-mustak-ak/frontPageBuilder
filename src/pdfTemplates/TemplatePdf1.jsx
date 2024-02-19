import {
    Document,
    Font,
    Image,
    Page,
    StyleSheet,
    Text,
    View,
} from "@react-pdf/renderer";

import serifBold from "../assets/fonts/LiberationSerif-Bold.ttf";
import serifRegular from "../assets/fonts/LiberationSerif-Regular.ttf";
import GroupPdf from "../pdfComponets/GroupPdf";
import IndividualPdf from "../pdfComponets/IndividualPdf";

const Template = ({
    data,
    forValue,
    dateInlcude,
    tableContent,
    sameCheck,
    name,
}) => {
    return (
        <Document pageMode="useNone">
            <Page size="A4" style={styles.body}>
                <View style={styles.header}>
                    <Image style={styles.logo} src={data.photo} />

                    <View style={styles.headerInfo}>
                        <Text
                            style={{
                                fontSize: "20pt",
                                fontFamily: "serifBold",
                            }}
                        >
                            Leading University, Sylhet
                        </Text>
                        <Text style={{ fontSize: "16pt", paddingVertical: 5 }}>
                            {data.deptName ? data.deptName : "--"}
                        </Text>

                        <View style={{ marginTop: 20 }}>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 12,
                                    marginBottom: 3,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: "14pt",
                                        fontFamily: "serifBold",
                                        width: "90px",
                                        textAlign: "left",
                                    }}
                                >
                                    Course Code:{" "}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: "14pt",
                                        textAlign: "left",
                                    }}
                                >
                                    {data.courseCode ? data.courseCode : "--"}
                                </Text>
                            </View>
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "start",
                                    gap: 12,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: "14pt",
                                        fontFamily: "serifBold",
                                        width: "35%",
                                        textAlign: "left",
                                    }}
                                    break={false}
                                >
                                    Course Title:{" "}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: "14pt",
                                        textAlign: "left",
                                        width: "100%",
                                    }}
                                >
                                    {data.courseTitle ? data.courseTitle : "--"}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* for information */}
                <View style={styles.forInfo}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "start",
                            gap: 12,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: "14pt",
                                fontFamily: "serifBold",
                                width: "35%",
                                textAlign: "left",
                            }}
                            break={false}
                        >
                            {forValue == "for Assignment"
                                ? "Asssignment"
                                : "Lab"}{" "}
                            Name:{" "}
                        </Text>
                        <Text
                            style={{
                                fontSize: "14pt",
                                textAlign: "left",
                                width: "100%",
                            }}
                        >
                            {data.topic ? data.topic : "--"}
                        </Text>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "start",
                            gap: 12,
                            marginTop: 7,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: "14pt",
                                fontFamily: "serifRegular",
                                width: "35%",
                                textAlign: "left",
                            }}
                            break={false}
                        >
                            Submission Date:{" "}
                        </Text>
                        <Text
                            style={{
                                fontSize: "14pt",
                                textAlign: "left",
                                width: "100%",
                            }}
                        >
                            {dateInlcude
                                ? data.inputDate
                                : "..........................."}
                        </Text>
                    </View>
                </View>

                {/* Techer Info info */}
                <View style={styles.forInfo}>
                    <Text
                        style={{
                            fontFamily: "serifBold",
                            textAlign: "center",
                            textDecoration: "underline",
                            marginBottom: 15,
                        }}
                    >
                        SUBMITTED TO
                    </Text>

                    <Text
                        style={{
                            fontSize: "18pt",
                            fontFamily: "serifBold",
                            textAlign: "center",
                            marginBottom: 3,
                        }}
                    >
                        {data.teacherName ? data.teacherName : "--"}
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifRegular",
                            textAlign: "center",
                            marginBottom: 3,
                        }}
                    >
                        {data.teacherDesignation
                            ? data.teacherDesignation
                            : "--"}
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifRegular",
                            textAlign: "center",
                            marginBottom: 3,
                        }}
                    >
                        {data.facultyName ? data.facultyName : "--"}
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifRegular",
                            textAlign: "center",
                        }}
                    >
                        Leading University, Sylhet
                    </Text>
                </View>

                {/* student info */}

                <View style={styles.forInfo}>
                    <Text
                        style={{
                            fontFamily: "serifBold",
                            textAlign: "center",
                            textDecoration: "underline",
                            marginBottom: 20,
                        }}
                    >
                        SUBMITTED BY
                    </Text>

                    {name == "individual" ? (
                        <IndividualPdf data={data} />
                    ) : (
                        <GroupPdf
                            data={data}
                            tableContent={tableContent}
                            sameCheck={sameCheck}
                        />
                    )}
                </View>
            </Page>
        </Document>
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

export default Template;
