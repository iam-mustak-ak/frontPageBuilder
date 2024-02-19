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

const Template = () => {
    return (
        <Document pageMode="useNone">
            <Page size="A4" style={styles.body}>
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        src={"/Leading_University_Logo.png"}
                    />

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
                            Computer Science & Engineering
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
                                    GED-1262
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
                                    Differential Equation Laplace Transform and
                                    Fourier Analysis
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
                            Assignment Name:{" "}
                        </Text>
                        <Text
                            style={{
                                fontSize: "14pt",
                                textAlign: "left",
                                width: "100%",
                            }}
                        >
                            Differential Equation Laplace Transform and Fourier
                            Analysis
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
                            19 Feb 2024
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
                        Prithwiraj Bhattacharjee
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifRegular",
                            textAlign: "center",
                            marginBottom: 3,
                        }}
                    >
                        Assistant Professor
                    </Text>
                    <Text
                        style={{
                            fontSize: "14pt",
                            fontFamily: "serifRegular",
                            textAlign: "center",
                            marginBottom: 3,
                        }}
                    >
                        Business Administration
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
                            Md. Mustak Ahmed Khan
                        </Text>
                    </View>

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
                                ID:{" "}
                            </Text>
                            <Text
                                style={{
                                    fontSize: "14pt",
                                    textAlign: "left",
                                    width: "100%",
                                }}
                            >
                                2132020001
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
                                58
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
                                Computer Science And Engineering
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
                                A
                            </Text>
                        </View>
                    </View>
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
