import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_165_1854}>
        <View style={styles.View_I165_1854_165_1777}>
          <Text style={styles.Text_I165_1854_165_1777}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </View>
      </View>
      <View style={styles.View_165_1856}>
        <View style={styles.View_I165_1856_165_1795}>
          <Text style={styles.Text_I165_1856_165_1795}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </Text>
        </View>
      </View>
      <View style={styles.View_167_0}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1475/5c75/6944a5244b0443a7a32534dafac28bac"
          }}
          style={styles.ImageBackground_I167_0_27_306}
        />
        <View style={styles.View_I167_0_27_308}>
          <Text style={styles.Text_I167_0_27_308}>Ali ÇORAK</Text>
        </View>
        <View style={styles.View_I167_0_27_309}>
          <Text style={styles.Text_I167_0_27_309}>1 October . 8 min read</Text>
        </View>
      </View>
      <View style={styles.View_167_5}>
        <View style={styles.View_I167_5_165_1858}>
          <Text style={styles.Text_I167_5_165_1858}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
      <View style={styles.View_196_12}>
        <View style={styles.View_I196_12_165_1858}>
          <Text style={styles.Text_I196_12_165_1858}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
      <View style={styles.View_196_0} />
      <View style={styles.View_196_1} />
      <View style={styles.View_196_2}>
        <View style={styles.View_I196_2_27_257} />
        <View style={styles.View_I196_2_27_259}>
          <Text style={styles.Text_I196_2_27_259}>
            Engineer &amp; Designer iletisim@alicorak.com
          </Text>
        </View>
        <View style={styles.View_I196_2_27_247}>
          <View style={styles.View_I196_2_27_247_27_221} />
          <View style={styles.View_I196_2_27_247_27_222}>
            <Text style={styles.Text_I196_2_27_247_27_222}>Follow</Text>
          </View>
        </View>
        <View style={styles.View_I196_2_27_250}>
          <Text style={styles.Text_I196_2_27_250}>Written by</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfbc/7327/506ab3a6d35274eb02a56938a9513ad1"
          }}
          style={styles.ImageBackground_I196_2_27_245}
        />
        <View style={styles.View_I196_2_27_252}>
          <Text style={styles.Text_I196_2_27_252}>Ali ÇORAK</Text>
        </View>
      </View>
      <View style={styles.View_196_14}>
        <View style={styles.View_I196_14_27_257} />
        <View style={styles.View_I196_14_27_259}>
          <Text style={styles.Text_I196_14_27_259}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
        </View>
        <View style={styles.View_I196_14_27_247}>
          <View style={styles.View_I196_14_27_247_61_0}>
            <Text style={styles.Text_I196_14_27_247_61_0}>Following</Text>
          </View>
        </View>
        <View style={styles.View_I196_14_27_250}>
          <Text style={styles.Text_I196_14_27_250}>Published ın</Text>
        </View>
        <View style={styles.View_I196_14_27_245}>
          <View style={styles.View_I196_14_27_245_196_24} />
        </View>
        <View style={styles.View_I196_14_27_252}>
          <Text style={styles.Text_I196_14_27_252}>A Publisher</Text>
        </View>
      </View>
      <View style={styles.View_167_7}>
        <View style={styles.View_I167_7_17_35} />
        <View style={styles.View_I167_7_38_1166}>
          <View style={styles.View_I167_7_17_38}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/066c/a080/ac3ed2328650800dcd9e5a6c25db4212"
              }}
              style={styles.ImageBackground_I167_7_17_38_4_7}
            />
          </View>
          <View style={styles.View_I167_7_17_58}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32aa/8ab7/d0f4737d99ba0bf457940257fa9fab26"
              }}
              style={styles.ImageBackground_I167_7_17_58_17_55}
            />
          </View>
          <View style={styles.View_I167_7_17_41}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3354/9101/63c4d0625380bb9d7c9a1ee11b84747a"
              }}
              style={styles.ImageBackground_I167_7_17_41_17_25}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04c8/187f/6a30aca23e05c1c5d6caea984536be61"
            }}
            style={styles.ImageBackground_I167_7_17_47}
          />
        </View>
      </View>
      <View style={styles.View_196_63}>
        <View style={styles.View_I196_63_27_191} />
        <View style={styles.View_I196_63_27_190}>
          <Text style={styles.Text_I196_63_27_190}>Related reads</Text>
        </View>
      </View>
      <View style={styles.View_196_98}>
        <View style={styles.View_I196_98_69_1284}>
          <View style={styles.View_I196_98_69_1285}>
            <View style={styles.View_I196_98_69_1286}>
              <Text style={styles.Text_I196_98_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I196_98_69_1287}>
              <Text style={styles.Text_I196_98_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I196_98_69_1288}>
            <View style={styles.View_I196_98_69_1289} />
            <View style={styles.View_I196_98_69_1290} />
          </View>
        </View>
        <View style={styles.View_I196_98_69_1227}>
          <View style={styles.View_I196_98_69_1228}>
            <View style={styles.View_I196_98_69_1229}>
              <View style={styles.View_I196_98_69_1230}>
                <Text style={styles.Text_I196_98_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I196_98_69_1231}>
              <View style={styles.View_I196_98_69_1232}>
                <View style={styles.View_I196_98_69_1233}>
                  <Text style={styles.Text_I196_98_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I196_98_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I196_98_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I196_98_69_1237}
            />
          </View>
        </View>
        <View style={styles.View_I196_98_69_1293}>
          <View style={styles.View_I196_98_69_1294} />
        </View>
      </View>
      <View style={styles.View_196_125}>
        <View style={styles.View_I196_125_69_1284}>
          <View style={styles.View_I196_125_69_1285}>
            <View style={styles.View_I196_125_69_1286}>
              <Text style={styles.Text_I196_125_69_1286}>
                Medium App Clone #1
              </Text>
            </View>
            <View style={styles.View_I196_125_69_1287}>
              <Text style={styles.Text_I196_125_69_1287}>
                The Medium user interface is minimal and beautiful. I decided to
                challenge my...
              </Text>
            </View>
          </View>
          <View style={styles.View_I196_125_69_1288}>
            <View style={styles.View_I196_125_69_1289} />
            <View style={styles.View_I196_125_69_1290} />
          </View>
        </View>
        <View style={styles.View_I196_125_69_1227}>
          <View style={styles.View_I196_125_69_1228}>
            <View style={styles.View_I196_125_69_1229}>
              <View style={styles.View_I196_125_69_1230}>
                <Text style={styles.Text_I196_125_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I196_125_69_1231}>
              <View style={styles.View_I196_125_69_1232}>
                <View style={styles.View_I196_125_69_1233}>
                  <Text style={styles.Text_I196_125_69_1233}>
                    28 September . 7 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I196_125_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I196_125_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I196_125_69_1237}
            />
          </View>
        </View>
        <View style={styles.View_I196_125_69_1293}>
          <View style={styles.View_I196_125_69_1294} />
        </View>
      </View>
      <View style={styles.View_196_68}>
        <View style={styles.View_I196_68_27_184} />
        <View style={styles.View_I196_68_27_185}>
          <Text style={styles.Text_I196_68_27_185}>More from UX Planet</Text>
        </View>
      </View>
      <View style={styles.View_196_121}>
        <View style={styles.View_I196_121_27_184} />
        <View style={styles.View_I196_121_27_185}>
          <Text style={styles.Text_I196_121_27_185}>More from UX Planet</Text>
        </View>
      </View>
      <View style={styles.View_196_187}>
        <View style={styles.View_I196_187_196_184}>
          <Text style={styles.Text_I196_187_196_184}>Responses</Text>
        </View>
        <View style={styles.View_I196_187_196_179}>
          <View style={styles.View_I196_187_196_180}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbf2/a750/9a6a44a76a998e48a42c23a656e1417b"
              }}
              style={styles.ImageBackground_I196_187_196_181}
            />
          </View>
        </View>
        <View style={styles.View_I196_187_196_185} />
      </View>
      <View style={styles.View_165_1844}>
        <View style={styles.View_I165_1844_23_16} />
        <View style={styles.View_I165_1844_23_17}>
          <View style={styles.View_I165_1844_23_17_10_1}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccaf/2275/7507ba450f4201f617780accae5c7611"
              }}
              style={styles.ImageBackground_I165_1844_23_17_10_2}
            />
          </View>
        </View>
        <View style={styles.View_I165_1844_37_316}>
          <View style={styles.View_I165_1844_23_9}>
            <Text style={styles.Text_I165_1844_23_9}>Published in</Text>
          </View>
          <View style={styles.View_I165_1844_23_10}>
            <Text style={styles.Text_I165_1844_23_10}>A publication</Text>
          </View>
          <View style={styles.View_I165_1844_27_22} />
        </View>
      </View>
      <View style={styles.View_165_1808}>
        <View style={styles.View_I165_1808_14_15}>
          <View style={styles.View_I165_1808_14_16}>
            <Text style={styles.Text_I165_1808_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I165_1808_14_17}>
            <View style={styles.View_I165_1808_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I165_1808_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I165_1808_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I165_1808_14_23}
              />
            </View>
            <View style={styles.View_I165_1808_14_24}>
              <Text style={styles.Text_I165_1808_14_24}>100%</Text>
            </View>
            <View style={styles.View_I165_1808_14_25}>
              <View style={styles.View_I165_1808_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I165_1808_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I165_1808_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I165_1808_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I165_1808_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I165_1808_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I165_1808_14_37}>
            <View style={styles.View_I165_1808_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I165_1808_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I165_1808_14_40}
              />
            </View>
            <View style={styles.View_I165_1808_14_44}>
              <Text style={styles.Text_I165_1808_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I165_1808_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I165_1808_14_46}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(18, 18, 18, 1)" },
  View_2: { height: hp("356.2841530054645%") },
  View_165_1854: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I165_1854_165_1777: {
    flexGrow: 1,
    width: wp("90.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_I165_1854_165_1777: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 23,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29,
    textTransform: "none"
  },
  View_165_1856: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.508196721311474%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I165_1856_165_1795: {
    flexGrow: 1,
    width: wp("90.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0.9562841530054662%"),
    justifyContent: "flex-start"
  },
  Text_I165_1856_165_1795: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.31500000000000006,
    textTransform: "none"
  },
  View_167_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.2568306010929%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  ImageBackground_I167_0_27_306: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("0.9562841530054627%")
  },
  View_I167_0_27_308: {
    flexGrow: 1,
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333333%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "center"
  },
  Text_I167_0_27_308: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I167_0_27_309: {
    flexGrow: 1,
    width: wp("34.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "center"
  },
  Text_I167_0_27_309: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_167_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("73.36065573770492%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I167_5_165_1858: {
    flexGrow: 1,
    width: wp("90.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "center"
  },
  Text_I167_5_165_1858: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.054000002145767216,
    textTransform: "none"
  },
  View_196_12: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47.540983606557376%"),
    minHeight: hp("47.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("190.30054644808743%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I196_12_165_1858: {
    flexGrow: 1,
    width: wp("90.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.732240437158481%"),
    justifyContent: "center"
  },
  Text_I196_12_165_1858: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.054000002145767216,
    textTransform: "none"
  },
  View_196_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.03825136612022%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_196_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27.322404371584703%"),
    minHeight: hp("27.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("162.97814207650273%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_196_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("244.80874316939892%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I196_2_27_257: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.08196721311478%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I196_2_27_259: {
    flexGrow: 1,
    width: wp("47.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("10.382513661202154%"),
    justifyContent: "flex-start"
  },
  Text_I196_2_27_259: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_2_27_247: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333333%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I196_2_27_247_27_221: {
    flexGrow: 1,
    width: wp("18.666666666666668%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(65, 135, 44, 1)",
    borderWidth: 1
  },
  View_I196_2_27_247_27_222: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0.9562841530054413%"),
    justifyContent: "center"
  },
  Text_I196_2_27_247_27_222: {
    color: "rgba(65, 135, 44, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_2_27_250: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("4.91803278688522%"),
    justifyContent: "center"
  },
  Text_I196_2_27_250: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.12,
    textTransform: "uppercase"
  },
  ImageBackground_I196_2_27_245: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("4.91803278688522%")
  },
  View_I196_2_27_252: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("7.513661202185773%"),
    justifyContent: "center"
  },
  Text_I196_2_27_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_196_14: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("265.0273224043716%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I196_14_27_257: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.081967213114694%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I196_14_27_259: {
    flexGrow: 1,
    width: wp("47.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("10.382513661202154%"),
    justifyContent: "flex-start"
  },
  Text_I196_14_27_259: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_14_27_247: {
    flexGrow: 1,
    width: wp("23.200000000000003%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(65, 135, 44, 1)"
  },
  View_I196_14_27_247_61_0: {
    flexGrow: 1,
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.0245901639344197%"),
    justifyContent: "center"
  },
  Text_I196_14_27_247_61_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_14_27_250: {
    flexGrow: 1,
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("4.918032786885192%"),
    justifyContent: "center"
  },
  Text_I196_14_27_250: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.12,
    textTransform: "uppercase"
  },
  View_I196_14_27_245: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("4.918032786885192%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_14_27_245_196_24: {
    flexGrow: 1,
    width: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I196_14_27_252: {
    flexGrow: 1,
    width: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("7.5136612021857445%"),
    justifyContent: "center"
  },
  Text_I196_14_27_252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_167_7: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("237.8415300546448%"),
    backgroundColor: "rgba(8, 8, 8, 1)",
    overflow: "hidden"
  },
  View_I167_7_17_35: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I167_7_38_1166: {
    flexGrow: 1,
    width: wp("90.13333333333333%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I167_7_17_38: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I167_7_17_38_4_7: {
    flexGrow: 1,
    width: wp("7.037678019205728%"),
    height: hp("3.9268853234463053%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2843098958333332%"),
    top: hp("0%")
  },
  View_I167_7_17_58: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.60000000000001%"),
    top: hp("0.9562841530054698%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I167_7_17_58_17_55: {
    flexGrow: 1,
    width: wp("7.728493245442708%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092895847%")
  },
  View_I167_7_17_41: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("0.4098360655737565%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I167_7_17_41_17_25: {
    flexGrow: 1,
    width: wp("4.666666666666667%"),
    height: hp("3.2085978919691076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_I167_7_17_47: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0.5464480874316564%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%")
  },
  View_196_63: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("285.24590163934425%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I196_63_27_191: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I196_63_27_190: {
    flexGrow: 1,
    width: wp("29.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.142076502732209%"),
    justifyContent: "flex-start"
  },
  Text_I196_63_27_190: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_196_98: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("298.3606557377049%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I196_98_69_1284: {
    flexGrow: 1,
    width: wp("100.0008544921875%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_98_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.0491803278688394%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_98_69_1286: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I196_98_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I196_98_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754088%"),
    justifyContent: "flex-start"
  },
  Text_I196_98_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_98_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.88001302083333%"),
    top: hp("2.0491803278688394%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_98_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0695312500000114%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I196_98_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.459016393442623%"),
    top: hp("7.923497267759615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I196_98_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_98_69_1228: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_98_69_1229: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_98_69_1230: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I196_98_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_98_69_1231: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_98_69_1232: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_98_69_1233: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I196_98_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I196_98_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66663411458333%")
  },
  View_I196_98_69_1236: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93330078125%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I196_98_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I196_98_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("22.540983606557404%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I196_98_69_1294: {
    width: wp("91.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3999999999999995%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_196_125: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("326.91256830601094%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I196_125_69_1284: {
    flexGrow: 1,
    width: wp("100.0008544921875%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_125_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.0491803278688394%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_125_69_1286: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I196_125_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I196_125_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737736%"),
    justifyContent: "flex-start"
  },
  Text_I196_125_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_125_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.88001302083333%"),
    top: hp("2.0491803278688394%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_125_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0695312500000114%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I196_125_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.459016393442623%"),
    top: hp("7.923497267759558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I196_125_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_125_69_1228: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_125_69_1229: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_125_69_1230: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I196_125_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_125_69_1231: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_125_69_1232: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I196_125_69_1233: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I196_125_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I196_125_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.19996744791667%")
  },
  View_I196_125_69_1236: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93330078125%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I196_125_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I196_125_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("22.540983606557404%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I196_125_69_1294: {
    width: wp("91.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3999999999999995%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_196_68: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.260303809994557%"),
    minHeight: hp("7.260303809994557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("292.48633879781426%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I196_68_27_184: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.877389021909953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I196_68_27_185: {
    flexGrow: 1,
    width: wp("34.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("4.918032786885192%"),
    justifyContent: "flex-start"
  },
  Text_I196_68_27_185: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.49000000000000005,
    textTransform: "none"
  },
  View_196_121: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.260303809994557%"),
    minHeight: hp("7.260303809994557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("321.0382513661202%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I196_121_27_184: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.877389021909953%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I196_121_27_185: {
    flexGrow: 1,
    width: wp("34.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("4.918032786885249%"),
    justifyContent: "flex-start"
  },
  Text_I196_121_27_185: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.49000000000000005,
    textTransform: "none"
  },
  View_196_187: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("349.72677595628414%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I196_187_196_184: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%"),
    top: hp("1.9125683060109395%"),
    justifyContent: "flex-start"
  },
  Text_I196_187_196_184: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I196_187_196_179: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("1.9125683060109395%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I196_187_196_180: {
    width: wp("3.5310343424479167%"),
    height: hp("0.9798368469613498%"),
    top: hp("0.8479217362534541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9195312499999915%")
  },
  ImageBackground_I196_187_196_181: {
    width: wp("3.5310343424479167%"),
    height: hp("0.9798368469613498%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I196_187_196_185: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.420765027322432%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_165_1844: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.73224043715847%"),
    backgroundColor: "rgba(8, 8, 8, 1)",
    overflow: "hidden"
  },
  View_I165_1844_23_16: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.87431693989071%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I165_1844_23_17: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("0.9562841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I165_1844_23_17_10_1: {
    flexGrow: 1,
    width: wp("2.8159993489583335%"),
    height: hp("2.6229493604983136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("0.5464480874316942%")
  },
  ImageBackground_I165_1844_23_17_10_2: {
    width: wp("2.8159993489583335%"),
    height: hp("2.6229493604983136%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I165_1844_37_316: {
    flexGrow: 1,
    width: wp("31.2%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I165_1844_23_9: {
    flexGrow: 1,
    width: wp("16.8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("0.683060109289618%"),
    justifyContent: "flex-start"
  },
  Text_I165_1844_23_9: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I165_1844_23_10: {
    flexGrow: 1,
    width: wp("17.599999999999998%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("2.8688524590163937%"),
    justifyContent: "flex-start"
  },
  Text_I165_1844_23_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I165_1844_27_22: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.683060109289618%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_165_1808: {
    width: wp("100.00000813802083%"),
    minWidth: wp("100.00000813802083%"),
    height: hp("2.732240697725223%"),
    minHeight: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(8, 8, 8, 1)"
  },
  View_I165_1808_14_15: {
    flexGrow: 1,
    width: wp("100.00000813802083%"),
    height: hp("2.732240697725223%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I165_1808_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_I165_1808_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I165_1808_14_17: {
    width: wp("24.133333333333333%"),
    minWidth: wp("24.133333333333333%"),
    height: hp("2.2267742886569333%"),
    minHeight: hp("2.2267742886569333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("0.4098360655737705%")
  },
  View_I165_1808_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.20491803278688525%")
  },
  ImageBackground_I165_1808_14_19: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I165_1808_14_22: {
    width: wp("0.4%"),
    minWidth: wp("0.4%"),
    height: hp("0.6694385914203248%"),
    minHeight: hp("0.6694385914203248%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%"),
    top: hp("0.45079299009562834%")
  },
  ImageBackground_I165_1808_14_23: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("1.0245901639344261%"),
    minHeight: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371584696%")
  },
  View_I165_1808_14_24: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0.04098193893015706%"),
    justifyContent: "flex-start"
  },
  Text_I165_1808_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I165_1808_14_25: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I165_1808_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I165_1808_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.051913235356898846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1653645833333428%")
  },
  ImageBackground_I165_1808_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I165_1808_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.101367187500003%")
  },
  View_I165_1808_14_32: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I165_1808_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15296727581753755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I165_1808_14_37: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("0.4098360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I165_1808_14_38: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I165_1808_14_39: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I165_1808_14_40: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I165_1808_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I165_1808_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I165_1808_14_45: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I165_1808_14_46: {
    width: wp("3.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
