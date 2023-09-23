// import {Appearance} from 'react-native';
import { StyleSheet } from "react-native";

// const colorScheme = Appearance.getColorScheme();
// const darkTheme = colorScheme === 'dark' ? true : false;

let _dark = "#50ff96";
let _light = "#f0effb";
let _success = "#208b3a";
let _warning = "#ec7d10";
let _danger = "#fc2f00";
let _secondary = "#353535";
let _black = "#000000";
let _info = "#007ea7";
let _white = "#ffffff";
let _themeLight = "#d3ffd8";
let _transparent = "rgba(0,0,0,.2)";

const styling = {
  textWhite: {
    color: _white,
  },
  textPrimary: {
    color: _dark,
  },
  textSecondary: {
    color: _secondary,
  },
  textSuccess: {
    color: _success,
  },
  textDanger: {
    color: _danger,
  },
  textWarning: {
    color: _warning,
  },
  textBlack: {
    color: _black,
  },
  textInfo: {
    color: _info,
  },
  textLight: {
    color: _light,
  },
  textThemeLight: {
    color: _themeLight,
  },
  textstart: {
    textAlign: "right",
  },
  textend: {
    textAlign: "left",
  },
  textCenter: {
    textAlign: "center",
  },
  textBold: {
    fontWeight: "bold",
  },
  bgWhite: {
    backgroundColor: _white,
  },
  bgPrimary: {
    backgroundColor: _dark,
  },
  bgSecondary: {
    backgroundColor: _secondary,
  },
  bgSuccess: {
    backgroundColor: _success,
  },
  bgDanger: {
    backgroundColor: _danger,
  },
  bgWarning: {
    backgroundColor: _warning,
  },
  bgBlack: {
    backgroundColor: _black,
  },
  bgInfo: {
    backgroundColor: _info,
  },
  bgLight: {
    backgroundColor: _light,
  },
  bgThemeLight: {
    backgroundColor: _themeLight,
  },
  bgTransparent: {
    backgroundColor: _transparent,
  },
  borderWhite: {
    borderColor: _white,
  },
  borderPrimary: {
    borderColor: _dark,
  },
  borderSecondary: {
    borderColor: _secondary,
  },
  borderSuccess: {
    borderColor: _success,
  },
  borderDanger: {
    borderColor: _danger,
  },
  borderWarning: {
    borderColor: _warning,
  },
  borderBlack: {
    borderColor: _black,
  },
  borderInfo: {
    borderColor: _info,
  },
  borderLight: {
    borderColor: _light,
  },
  borderTopWhite: {
    borderColor: _white,
  },
  borderTopPrimary: {
    borderColor: _dark,
  },
  borderTopSecondary: {
    borderColor: _secondary,
  },
  borderTopSuccess: {
    borderColor: _success,
  },
  borderTopDanger: {
    borderColor: _danger,
  },
  borderTopWarning: {
    borderColor: _warning,
  },
  borderTopBlack: {
    borderColor: _black,
  },
  borderTopInfo: {
    borderColor: _info,
  },
  borderTopLight: {
    borderColor: _light,
  },
  borderBottomWhite: {
    borderColor: _white,
  },
  borderBottomPrimary: {
    borderColor: _dark,
  },
  borderBottomSecondary: {
    borderColor: _secondary,
  },
  borderBottomSuccess: {
    borderColor: _success,
  },
  borderBottomDanger: {
    borderColor: _danger,
  },
  borderBottomWarning: {
    borderColor: _warning,
  },
  borderBottomBlack: {
    borderColor: _black,
  },
  borderBottomInfo: {
    borderColor: _info,
  },
  borderBottomLight: {
    borderColor: _light,
  },
  borderLeftWhite: {
    borderColor: _white,
  },
  borderLeftPrimary: {
    borderColor: _dark,
  },
  borderLeftSecondary: {
    borderColor: _secondary,
  },
  borderLeftSuccess: {
    borderColor: _success,
  },
  borderLeftDanger: {
    borderColor: _danger,
  },
  borderLeftWarning: {
    borderColor: _warning,
  },
  borderLeftBlack: {
    borderColor: _black,
  },
  borderLeftInfo: {
    borderColor: _info,
  },
  borderLeftLight: {
    borderColor: _light,
  },
  borderRightWhite: {
    borderColor: _white,
  },
  borderRightPrimary: {
    borderColor: _dark,
  },
  borderRightSecondary: {
    borderColor: _secondary,
  },
  borderRightSuccess: {
    borderColor: _success,
  },
  borderRightDanger: {
    borderColor: _danger,
  },
  borderRightWarning: {
    borderColor: _warning,
  },
  borderRightBlack: {
    borderColor: _black,
  },
  borderRightInfo: {
    borderColor: _info,
  },
  borderRightLight: {
    borderColor: _light,
  },
  border1: {
    borderWidth: 1,
  },
  border2: {
    borderWidth: 2,
  },
  border3: {
    borderWidth: 3,
  },
  border4: {
    borderWidth: 4,
  },
  border5: {
    borderWidth: 5,
  },
  borderTop1: {
    borderTopWidth: 1,
  },
  borderTop2: {
    borderTopWidth: 2,
  },
  borderTop3: {
    borderTopWidth: 3,
  },
  borderTop4: {
    borderTopWidth: 4,
  },
  borderTop5: {
    borderTopWidth: 5,
  },
  borderBottom1: {
    borderBottomWidth: 1,
  },
  borderBottom2: {
    borderBottomWidth: 2,
  },
  borderBottom3: {
    borderBottomWidth: 3,
  },
  borderBottom4: {
    borderBottomWidth: 4,
  },
  borderBottom5: {
    borderBottomWidth: 5,
  },
  borderLeft1: {
    borderLeftWidth: 1,
  },
  borderLeft2: {
    borderLeftWidth: 2,
  },
  borderLeft3: {
    borderLeftWidth: 3,
  },
  borderLeft4: {
    borderLeftWidth: 4,
  },
  borderLeft5: {
    borderLeftWidth: 5,
  },
  borderRight1: {
    borderRightWidth: 1,
  },
  borderRight2: {
    borderRightWidth: 2,
  },
  borderRight3: {
    borderRightWidth: 3,
  },
  borderRight4: {
    borderRightWidth: 4,
  },
  borderRight5: {
    borderRightWidth: 5,
  },
  w100: {
    width: "100%",
  },
  w75: {
    width: "75%",
  },
  w50: {
    width: "50%",
  },
  w25: {
    width: "25%",
  },
  w90: {
    width: "90%",
  },
  w80: {
    width: "80%",
  },
  w70: {
    width: "70%",
  },
  w60: {
    width: "60%",
  },
  w40: {
    width: "40%",
  },
  w30: {
    width: "30%",
  },
  w20: {
    width: "20%",
  },
  w10: {
    width: "10%",
  },
  h100: {
    height: "100%",
  },
  h90: {
    height: "90%",
  },
  h80: {
    height: "80%",
  },
  h75: {
    height: "75%",
  },
  h70: {
    height: "70%",
  },
  h60: {
    height: "60%",
  },
  h50: {
    height: "50%",
  },
  h40: {
    height: "40%",
  },
  h30: {
    height: "30%",
  },
  h25: {
    height: "25%",
  },
  h20: {
    height: "20%",
  },
  h10: {
    height: "10%",
  },
  fsXL: {
    fontSize: 50,
  },
  fsL: {
    fontSize: 40,
  },
  fs1: {
    fontSize: 32,
  },
  fs2: {
    fontSize: 26,
  },
  fs3: {
    fontSize: 22,
  },
  fs4: {
    fontSize: 20,
  },
  fs5: {
    fontSize: 18,
  },
  fs6: {
    fontSize: 16,
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  input: {
    height: "auto",
    width: "100%",
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 17,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // color: _black,
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,

    // elevation: 9,
  },
  searchInput: {
    height: "auto",
    fontSize: 15,
    color: _black,
    flex: 1,
  },
  formInput: {
    height: "auto",
    width: "100%",
    paddingVertical: 12,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: _dark,
  },
  btn: {
    backgroundColor: _transparent,
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnPrimary: {
    backgroundColor: _dark,
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnSecondary: {
    backgroundColor: _secondary,
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnInfo: {
    backgroundColor: _info,
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnSuccess: {
    backgroundColor: _success,
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnDanger: {
    backgroundColor: _danger,
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnBlack: {
    backgroundColor: _black,
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  btnLight: {
    backgroundColor: _light,
    color: "white",
    // width: '100%',
    padding: 12,
    paddingHorizontal: 25,
    fontSize: 16,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  link: {
    color: _info,
    fontSize: 18,
  },
  roundedBtn: {
    backgroundColor: _dark,
    color: "white",
    height: 50,
    width: 50,
    padding: 12,
    fontSize: 16,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  badge: {
    width: 25,
    height: 25,
    fontSize: 13,
    backgroundColor: "white",
    color: _dark,
    borderRadius: 15,
    padding: 3,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    left: -10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  shadow1: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  shadow2: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  shadow3: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  shadow4: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  shadow5: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  shadow6: {
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  p1: {
    padding: 10,
  },
  p2: {
    padding: 20,
  },
  p3: {
    padding: 30,
  },
  p4: {
    padding: 40,
  },
  p5: {
    padding: 50,
  },
  py1: {
    paddingVertical: 10,
  },
  py2: {
    paddingVertical: 20,
  },
  py3: {
    paddingVertical: 30,
  },
  py4: {
    paddingVertical: 40,
  },
  py5: {
    paddingVertical: 50,
  },
  px1: {
    paddingHorizontal: 10,
  },
  px2: {
    paddingHorizontal: 20,
  },
  px3: {
    paddingHorizontal: 30,
  },
  px4: {
    paddingHorizontal: 40,
  },
  px5: {
    paddingHorizontal: 50,
  },
  ps1: {
    paddingLeft: 10,
  },
  ps2: {
    paddingLeft: 20,
  },
  ps3: {
    paddingLeft: 30,
  },
  ps4: {
    paddingLeft: 40,
  },
  ps5: {
    paddingLeft: 50,
  },
  pt1: {
    paddingTop: 10,
  },
  pt2: {
    paddingTop: 20,
  },
  pt3: {
    paddingTop: 30,
  },
  pt4: {
    paddingTop: 40,
  },
  pt5: {
    paddingTop: 50,
  },
  pe1: {
    paddingEnd: 10,
  },
  pe2: {
    paddingEnd: 20,
  },
  pe3: {
    paddingEnd: 30,
  },
  pe4: {
    paddingEnd: 40,
  },
  pe5: {
    paddingEnd: 50,
  },
  pb1: {
    paddingBottom: 10,
  },
  pb2: {
    paddingBottom: 20,
  },
  pb3: {
    paddingBottom: 30,
  },
  pb4: {
    paddingBottom: 40,
  },
  pb5: {
    paddingBottom: 50,
  },
  m1: {
    margin: 10,
  },
  m2: {
    margin: 20,
  },
  m3: {
    margin: 30,
  },
  m4: {
    margin: 40,
  },
  m5: {
    margin: 50,
  },
  my1: {
    marginVertical: 10,
  },
  my2: {
    marginVertical: 20,
  },
  my3: {
    marginVertical: 30,
  },
  my4: {
    marginVertical: 40,
  },
  my5: {
    marginVertical: 50,
  },
  mx1: {
    marginHorizontal: 10,
  },
  mx2: {
    marginHorizontal: 20,
  },
  mx3: {
    marginHorizontal: 30,
  },
  mx4: {
    marginHorizontal: 40,
  },
  mx5: {
    marginHorizontal: 50,
  },
  ms1: {
    marginLeft: 10,
  },
  ms2: {
    marginLeft: 20,
  },
  ms3: {
    marginLeft: 30,
  },
  ms4: {
    marginLeft: 40,
  },
  ms5: {
    marginLeft: 50,
  },
  me1: {
    marginEnd: 10,
  },
  me2: {
    marginEnd: 20,
  },
  me3: {
    marginEnd: 30,
  },
  me4: {
    marginEnd: 40,
  },
  me5: {
    marginEnd: 50,
  },
  mt1: {
    marginTop: 10,
  },
  mt2: {
    marginTop: 20,
  },
  mt3: {
    marginTop: 30,
  },
  mt4: {
    marginTop: 40,
  },
  mt5: {
    marginTop: 50,
  },
  mb1: {
    marginBottom: 10,
  },
  mb2: {
    marginBottom: 20,
  },
  mb3: {
    marginBottom: 30,
  },
  mb4: {
    marginBottom: 40,
  },
  mb5: {
    marginBottom: 50,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flexNoWrap: {
    flexWrap: "nowrap",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentStart: {
    justifyContent: "flex-start",
  },
  justifyContentEnd: {
    justifyContent: "flex-end",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsStart: {
    alignItems: "flex-start",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  justifyContentBetween: {
    justifyContent: "space-between",
  },
  justifyContentAround: {
    justifyContent: "space-around",
  },
  rounded: {
    borderRadius: 15,
  },
  roundedPill: {
    borderRadius: 500,
  },
  label: {
    fontSize: 18,
    borderRadius: 5,
    paddingLeft: 10,
    color: _dark,
  },
  chips: {
    padding: 7,
    paddingHorizontal: 15,
    backgroundColor: _light,
    borderRadius: 30,
    margin: 2,
    borderWidth: 1,
    borderColor: _dark,
  },
  paper: {
    padding: 10,
    backgroundColor: _white,
    borderRadius: 10,
    margin: 2,
    shadowColor: "rgba(0,0,0,.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  positionRelative: {
    position: "relative",
  },
  positionAbsolute: {
    position: "absolute",
  },
  Positionfloat: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  positionFixed: {
    position: "fixed",
  },
  _dark: _dark,
  _light: _light,
  _success: _success,
  _warning: _warning,
  _danger: _danger,
  _secondary: _secondary,
  _black: _black,
  _info: _info,
  _white: _white,
  _transparent: _transparent,
};

const styles = StyleSheet.create(styling);

export default styles;
