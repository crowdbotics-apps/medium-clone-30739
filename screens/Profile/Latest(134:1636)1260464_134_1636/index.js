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
      <View style={styles.View_134_1637}>
        <View style={styles.View_I134_1637_14_15}>
          <View style={styles.View_I134_1637_14_16}>
            <Text style={styles.Text_I134_1637_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I134_1637_14_17}>
            <View style={styles.View_I134_1637_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I134_1637_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I134_1637_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I134_1637_14_23}
              />
            </View>
            <View style={styles.View_I134_1637_14_24}>
              <Text style={styles.Text_I134_1637_14_24}>100%</Text>
            </View>
            <View style={styles.View_I134_1637_14_25}>
              <View style={styles.View_I134_1637_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I134_1637_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I134_1637_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I134_1637_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I134_1637_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I134_1637_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I134_1637_14_37}>
            <View style={styles.View_I134_1637_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I134_1637_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I134_1637_14_40}
              />
            </View>
            <View style={styles.View_I134_1637_14_44}>
              <Text style={styles.Text_I134_1637_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I134_1637_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I134_1637_14_46}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_134_1638}>
        <View style={styles.View_I134_1638_88_363}>
          <View style={styles.View_I134_1638_88_450}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd9b/93b6/fb357d06e51b0b78f4f0923e57d64595"
              }}
              style={styles.ImageBackground_I134_1638_88_356}
            />
            <View style={styles.View_I134_1638_88_447}>
              <View style={styles.View_I134_1638_88_358}>
                <Text style={styles.Text_I134_1638_88_358}>Ali ÇORAK </Text>
              </View>
              <View style={styles.View_I134_1638_88_359}>
                <Text style={styles.Text_I134_1638_88_359}>
                  iletisim@alicorak.com
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I134_1638_88_362}>
            <Text style={styles.Text_I134_1638_88_362}>
              Top writer in Design
            </Text>
          </View>
        </View>
        <View style={styles.View_I134_1638_88_454}>
          <View style={styles.View_I134_1638_88_459}>
            <View style={styles.View_I134_1638_88_460}>
              <Text style={styles.Text_I134_1638_88_460}>Followers</Text>
            </View>
            <View style={styles.View_I134_1638_88_461}>
              <Text style={styles.Text_I134_1638_88_461}>Following</Text>
            </View>
            <View style={styles.View_I134_1638_88_462}>
              <Text style={styles.Text_I134_1638_88_462}>92</Text>
            </View>
            <View style={styles.View_I134_1638_88_463}>
              <Text style={styles.Text_I134_1638_88_463}>215</Text>
            </View>
          </View>
          <View style={styles.View_I134_1638_88_456}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9b/5f62/32a6e625858a6dc47f26a3207d52b85f"
              }}
              style={styles.ImageBackground_I134_1638_88_457}
            />
            <View style={styles.View_I134_1638_88_458}>
              <View style={styles.View_I134_1638_88_458_61_6}>
                <Text style={styles.Text_I134_1638_88_458_61_6}>Follow</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I134_1638_88_455} />
        </View>
      </View>
      <View style={styles.View_134_1639}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I134_1639_37_15}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("89_0"))
          }
        >
          <View style={styles.View_I134_1639_27_195}>
            <Text style={styles.Text_I134_1639_27_195}>Profile</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I134_1639_37_52}>
          <View style={styles.View_I134_1639_27_196}>
            <Text style={styles.Text_I134_1639_27_196}>Latest</Text>
          </View>
          <View style={styles.View_I134_1639_37_95} />
        </View>
        <View style={styles.View_I134_1639_37_102}>
          <View style={styles.View_I134_1639_27_197}>
            <Text style={styles.Text_I134_1639_27_197}>Claps</Text>
          </View>
        </View>
        <View style={styles.View_I134_1639_37_164}>
          <View style={styles.View_I134_1639_27_198}>
            <Text style={styles.Text_I134_1639_27_198}>Responses</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_134_1640}>
        <View style={styles.View_I134_1640_27_191} />
        <View style={styles.View_I134_1640_27_192} />
        <View style={styles.View_I134_1640_27_190}>
          <Text style={styles.Text_I134_1640_27_190}>Latest</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_134_1642}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I134_1642_69_1284}>
          <View style={styles.View_I134_1642_69_1285}>
            <View style={styles.View_I134_1642_69_1286}>
              <Text style={styles.Text_I134_1642_69_1286}>
                Medium App Clone #1
              </Text>
            </View>
            <View style={styles.View_I134_1642_69_1287}>
              <Text style={styles.Text_I134_1642_69_1287}>
                The Medium user interface is minimal and beautiful. I decided to
                challenge my...
              </Text>
            </View>
          </View>
          <View style={styles.View_I134_1642_69_1288}>
            <View style={styles.View_I134_1642_69_1289} />
            <View style={styles.View_I134_1642_69_1290} />
          </View>
        </View>
        <View style={styles.View_I134_1642_69_1227}>
          <View style={styles.View_I134_1642_69_1228}>
            <View style={styles.View_I134_1642_69_1229}>
              <View style={styles.View_I134_1642_69_1230}>
                <Text style={styles.Text_I134_1642_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I134_1642_69_1231}>
              <View style={styles.View_I134_1642_69_1232}>
                <View style={styles.View_I134_1642_69_1233}>
                  <Text style={styles.Text_I134_1642_69_1233}>
                    28 September . 7 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I134_1642_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I134_1642_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I134_1642_69_1237}
            />
          </View>
        </View>
        <View style={styles.View_I134_1642_69_1293}>
          <View style={styles.View_I134_1642_69_1294} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_134_1643}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I134_1643_69_1284}>
          <View style={styles.View_I134_1643_69_1285}>
            <View style={styles.View_I134_1643_69_1286}>
              <Text style={styles.Text_I134_1643_69_1286}>
                Splash Screen is More Important Than You Think
              </Text>
            </View>
            <View style={styles.View_I134_1643_69_1287}>
              <Text style={styles.Text_I134_1643_69_1287}>
                What to watch out for on the splash sc...
              </Text>
            </View>
          </View>
          <View style={styles.View_I134_1643_69_1288}>
            <View style={styles.View_I134_1643_69_1289} />
            <View style={styles.View_I134_1643_69_1290} />
          </View>
        </View>
        <View style={styles.View_I134_1643_69_1227}>
          <View style={styles.View_I134_1643_69_1228}>
            <View style={styles.View_I134_1643_69_1229}>
              <View style={styles.View_I134_1643_69_1230}>
                <Text style={styles.Text_I134_1643_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I134_1643_69_1231}>
              <View style={styles.View_I134_1643_69_1232}>
                <View style={styles.View_I134_1643_69_1233}>
                  <Text style={styles.Text_I134_1643_69_1233}>
                    20 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I134_1643_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I134_1643_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I134_1643_69_1237}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_186_304}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I186_304_69_1284}>
          <View style={styles.View_I186_304_69_1285}>
            <View style={styles.View_I186_304_69_1286}>
              <Text style={styles.Text_I186_304_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I186_304_69_1287}>
              <Text style={styles.Text_I186_304_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I186_304_69_1288}>
            <View style={styles.View_I186_304_69_1289} />
            <View style={styles.View_I186_304_69_1290} />
          </View>
        </View>
        <View style={styles.View_I186_304_69_1227}>
          <View style={styles.View_I186_304_69_1228}>
            <View style={styles.View_I186_304_69_1229}>
              <View style={styles.View_I186_304_69_1230}>
                <Text style={styles.Text_I186_304_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I186_304_69_1231}>
              <View style={styles.View_I186_304_69_1232}>
                <View style={styles.View_I186_304_69_1233}>
                  <Text style={styles.Text_I186_304_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I186_304_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I186_304_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I186_304_69_1237}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_134_1644}>
        <View style={styles.View_I134_1644_23_26} />
        <View style={styles.View_I134_1644_88_151}>
          <View style={styles.View_I134_1644_88_12}>
            <View style={styles.View_I134_1644_88_13}>
              <Text style={styles.Text_I134_1644_88_13}>Edit</Text>
            </View>
          </View>
          <View style={styles.View_I134_1644_88_194}>
            <View style={styles.View_I134_1644_23_37}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3354/9101/63c4d0625380bb9d7c9a1ee11b84747a"
                }}
                style={styles.ImageBackground_I134_1644_23_37_17_25}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I134_1644_136_1754}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("33_164"))
          }
        >
          <View style={styles.View_I134_1644_136_1754_10_1}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccaf/2275/7507ba450f4201f617780accae5c7611"
              }}
              style={styles.ImageBackground_I134_1644_136_1754_10_2}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(18, 18, 18, 1)" },
  View_2: { height: hp("116.93989071038251%") },
  View_134_1637: {
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
  View_I134_1637_14_15: {
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
  View_I134_1637_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_I134_1637_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I134_1637_14_17: {
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
  View_I134_1637_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.20491803278688525%")
  },
  ImageBackground_I134_1637_14_19: {
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
  ImageBackground_I134_1637_14_22: {
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
  ImageBackground_I134_1637_14_23: {
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
  View_I134_1637_14_24: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0.0409902770662568%"),
    justifyContent: "flex-start"
  },
  Text_I134_1637_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I134_1637_14_25: {
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
  View_I134_1637_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I134_1637_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.051913235356898846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I134_1637_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I134_1637_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.101334635416677%")
  },
  View_I134_1637_14_32: {
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
  ImageBackground_I134_1637_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15297144488558745%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I134_1637_14_37: {
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
  View_I134_1637_14_38: {
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
  ImageBackground_I134_1637_14_39: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I134_1637_14_40: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I134_1637_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I134_1637_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I134_1637_14_45: {
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
  ImageBackground_I134_1637_14_46: {
    width: wp("3.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_134_1638: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27.049180327868854%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I134_1638_88_363: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I134_1638_88_450: {
    width: wp("90.4%"),
    minWidth: wp("90.4%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I134_1638_88_356: {
    width: wp("17.066665649414062%"),
    height: hp("8.743168877773599%"),
    top: hp("2.4590163934426226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I134_1638_88_447: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("8.60655737704918%"),
    minHeight: hp("8.60655737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("2.4590163934426226%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1638_88_358: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2295081967213122%"),
    justifyContent: "flex-start"
  },
  Text_I134_1638_88_358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I134_1638_88_359: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.054644808743168%"),
    justifyContent: "flex-start"
  },
  Text_I134_1638_88_359: {
    color: "rgba(129, 129, 129, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1638_88_362: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("13.797814207650273%"),
    justifyContent: "flex-start"
  },
  Text_I134_1638_88_362: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1638_88_454: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.666666666666668%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I134_1638_88_459: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("1.366120218579237%")
  },
  View_I134_1638_88_460: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_I134_1638_88_460: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1638_88_461: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_I134_1638_88_461: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1638_88_462: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I134_1638_88_462: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1638_88_463: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I134_1638_88_463: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1638_88_456: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I134_1638_88_457: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("2.1174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000011%")
  },
  View_I134_1638_88_458: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%"),
    top: hp("1.9125683060109289%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1638_88_458_61_6: {
    flexGrow: 1,
    width: wp("10.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333326%"),
    top: hp("1.0245901639344268%"),
    justifyContent: "center"
  },
  Text_I134_1638_88_458_61_6: {
    color: "rgba(65, 135, 44, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1638_88_455: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.245901639344265%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_134_1639: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.92896174863388%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  TouchableOpacity_I134_1639_37_15: {
    flexGrow: 1,
    width: wp("10.133333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.775956284153004%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I134_1639_27_195: {
    width: wp("10.133333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I134_1639_27_195: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1639_37_52: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("1.775956284153004%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I134_1639_27_196: {
    width: wp("15.733333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I134_1639_27_196: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1639_37_95: {
    width: wp("15.733333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I134_1639_37_102: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I134_1639_27_197: {
    width: wp("9.333333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_I134_1639_27_197: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1639_37_164: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I134_1639_27_198: {
    width: wp("17.599999999999998%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_I134_1639_27_198: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_134_1640: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.939890710382514%"),
    backgroundColor: "rgba(25, 25, 25, 1)",
    overflow: "hidden"
  },
  View_I134_1640_27_191: {
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
  View_I134_1640_27_192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.1038251366120235%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I134_1640_27_190: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_I134_1640_27_190: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  TouchableOpacity_134_1642: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.18032786885246%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I134_1642_69_1284: {
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
  View_I134_1642_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.0491803278688465%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1642_69_1286: {
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
  Text_I134_1642_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I134_1642_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737714%"),
    justifyContent: "flex-start"
  },
  Text_I134_1642_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1642_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.88001302083333%"),
    top: hp("2.0491803278688465%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1642_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0695312500000114%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I134_1642_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.459016393442623%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I134_1642_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("14.480874316939897%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1642_69_1228: {
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
  View_I134_1642_69_1229: {
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
  View_I134_1642_69_1230: {
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
  Text_I134_1642_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1642_69_1231: {
    width: wp("47.199999999999996%"),
    minWidth: wp("47.199999999999996%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.005464480874302%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1642_69_1232: {
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
  View_I134_1642_69_1233: {
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
  Text_I134_1642_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I134_1642_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.2%")
  },
  View_I134_1642_69_1236: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333334%"),
    top: hp("1.3661202185792192%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I134_1642_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I134_1642_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("22.540983606557376%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I134_1642_69_1294: {
    width: wp("91.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3999999999999995%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  TouchableOpacity_134_1643: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("71.85792349726776%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I134_1643_69_1284: {
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
  View_I134_1643_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1643_69_1286: {
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
  Text_I134_1643_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I134_1643_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754102%"),
    justifyContent: "flex-start"
  },
  Text_I134_1643_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1643_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.88001302083333%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1643_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0695312500000114%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I134_1643_69_1290: {
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
  View_I134_1643_69_1227: {
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
  View_I134_1643_69_1228: {
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
  View_I134_1643_69_1229: {
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
  View_I134_1643_69_1230: {
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
  Text_I134_1643_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I134_1643_69_1231: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1643_69_1232: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1643_69_1233: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I134_1643_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I134_1643_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%")
  },
  View_I134_1643_69_1236: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333334%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I134_1643_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_186_304: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.540983606557376%"),
    minHeight: hp("22.540983606557376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94.39890710382514%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I186_304_69_1284: {
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
  View_I186_304_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_304_69_1286: {
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
  Text_I186_304_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I186_304_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754102%"),
    justifyContent: "flex-start"
  },
  Text_I186_304_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I186_304_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.88001302083333%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_304_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0695312500000114%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I186_304_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.459016393442623%"),
    top: hp("7.923497267759572%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I186_304_69_1227: {
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
  View_I186_304_69_1228: {
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
  View_I186_304_69_1229: {
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
  View_I186_304_69_1230: {
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
  Text_I186_304_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I186_304_69_1231: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_304_69_1232: {
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
  View_I186_304_69_1233: {
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
  Text_I186_304_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I186_304_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_I186_304_69_1236: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.93333333333334%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I186_304_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_134_1644: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.73224043715847%"),
    backgroundColor: "rgba(8, 8, 8, 1)",
    overflow: "hidden"
  },
  View_I134_1644_23_26: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.010928961748634%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I134_1644_88_151: {
    flexGrow: 1,
    width: wp("18.4%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.86666666666666%"),
    top: hp("1.0928961748633883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1644_88_12: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1644_88_13: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6830601092896171%"),
    justifyContent: "flex-start"
  },
  Text_I134_1644_88_13: {
    color: "rgba(65, 135, 44, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I134_1644_88_194: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_1644_23_37: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I134_1644_23_37_17_25: {
    flexGrow: 1,
    width: wp("4.666666666666667%"),
    height: hp("3.2085978919691076%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%"),
    top: hp("0.2732240437158464%")
  },
  TouchableOpacity_I134_1644_136_1754: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("1.0928961748633883%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I134_1644_136_1754_10_1: {
    flexGrow: 1,
    width: wp("2.8159993489583335%"),
    height: hp("2.6229493604983136%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("0.5464480874316942%")
  },
  ImageBackground_I134_1644_136_1754_10_2: {
    width: wp("2.8159993489583335%"),
    height: hp("2.6229493604983136%"),
    top: hp("0%"),
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
