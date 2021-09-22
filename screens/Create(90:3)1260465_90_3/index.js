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
      <View style={styles.View_91_105}>
        <View style={styles.View_I91_105_14_15}>
          <View style={styles.View_I91_105_14_16}>
            <Text style={styles.Text_I91_105_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I91_105_14_17}>
            <View style={styles.View_I91_105_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I91_105_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I91_105_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I91_105_14_23}
              />
            </View>
            <View style={styles.View_I91_105_14_24}>
              <Text style={styles.Text_I91_105_14_24}>100%</Text>
            </View>
            <View style={styles.View_I91_105_14_25}>
              <View style={styles.View_I91_105_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I91_105_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I91_105_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I91_105_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I91_105_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I91_105_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I91_105_14_37}>
            <View style={styles.View_I91_105_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I91_105_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I91_105_14_40}
              />
            </View>
            <View style={styles.View_I91_105_14_44}>
              <Text style={styles.Text_I91_105_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I91_105_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I91_105_14_46}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_91_141}>
        <View style={styles.View_I91_141_23_27}>
          <Text style={styles.Text_I91_141_23_27}>Create</Text>
        </View>
        <View style={styles.View_I91_141_23_26} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43a2/c643/fad12dfa682a43aa72b843aaf0617d7a"
        }}
        style={styles.ImageBackground_90_1}
      />
      <View style={styles.View_91_155}>
        <View style={styles.View_I91_155_15_22} />
        <View style={styles.View_I91_155_38_0}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683e/5d41/f7e4732f7b694c656bc389a9abb29586"
            }}
            style={styles.TouchableOpacity_I91_155_16_13}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1_2"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I91_155_16_9}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("33_278"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc99/5de4/a56b1dcb70324075bc0f39d3c6e1d595"
              }}
              style={styles.ImageBackground_I91_155_16_9_11_26}
            />
          </TouchableOpacity>
          <View style={styles.View_I91_155_16_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2781/7812/b79d5643be1f2eb4295d0a7a0d81298e"
              }}
              style={styles.ImageBackground_I91_155_16_28_11_66}
            />
          </View>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9b/5f62/32a6e625858a6dc47f26a3207d52b85f"
            }}
            style={styles.TouchableOpacity_I91_155_16_0}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("94_1588"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I91_155_15_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("33_164"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c889/3201/2132baa97641495f58ef2ad3292025bd"
              }}
              style={styles.ImageBackground_I91_155_15_27_11_34}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_91_98}>
        <View style={styles.View_I91_98_91_83}>
          <View style={styles.View_I91_98_91_1}>
            <View style={styles.View_I91_98_91_0}>
              <Text style={styles.Text_I91_98_91_0}>Write a story</Text>
            </View>
          </View>
          <View style={styles.View_I91_98_91_3}>
            <View style={styles.View_I91_98_91_2}>
              <Text style={styles.Text_I91_98_91_2}>
                Medium Stories are the easiest way to share your ideas with the
                world.
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8351/94bd/45d27f13bfda719da242b993b0b3890c"
          }}
          style={styles.ImageBackground_I91_98_91_4}
        />
      </View>
      <View style={styles.View_91_176}>
        <View style={styles.View_I91_176_91_83}>
          <View style={styles.View_I91_176_91_1}>
            <View style={styles.View_I91_176_91_0}>
              <Text style={styles.Text_I91_176_91_0}>Create a series</Text>
            </View>
          </View>
          <View style={styles.View_I91_176_91_3}>
            <View style={styles.View_I91_176_91_2}>
              <Text style={styles.Text_I91_176_91_2}>
                Medium Series are mobile stories that can be added to over time
                and unfold card by card with the tap of a finger.
              </Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8351/94bd/45d27f13bfda719da242b993b0b3890c"
          }}
          style={styles.ImageBackground_I91_176_91_4}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(18, 18, 18, 1)" },
  View_2: { height: hp("100%") },
  View_91_105: {
    width: wp("100.00000813802083%"),
    minWidth: wp("100.00000813802083%"),
    height: hp("2.9985010355845025%"),
    minHeight: hp("2.9985010355845025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(8, 8, 8, 1)"
  },
  View_I91_105_14_15: {
    flexGrow: 1,
    width: wp("100.00000813802083%"),
    height: hp("2.9985010355845025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I91_105_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4497751124437781%"),
    justifyContent: "flex-start"
  },
  Text_I91_105_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I91_105_14_17: {
    width: wp("24.133333333333333%"),
    minWidth: wp("24.133333333333333%"),
    height: hp("2.44377628080491%"),
    minHeight: hp("2.44377628080491%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.4%"),
    top: hp("0.4497751124437781%")
  },
  View_I91_105_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.7241379310344827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.22488755622188905%")
  },
  ImageBackground_I91_105_14_19: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("1.7241379310344827%"),
    minHeight: hp("1.7241379310344827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I91_105_14_22: {
    width: wp("0.4%"),
    minWidth: wp("0.4%"),
    height: hp("0.7346762352618856%"),
    minHeight: hp("0.7346762352618856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666657%"),
    top: hp("0.4947233414542729%")
  },
  ImageBackground_I91_105_14_23: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("1.1244377811094453%"),
    minHeight: hp("1.1244377811094453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.2998500749625187%")
  },
  View_I91_105_14_24: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0.044975681104760135%"),
    justifyContent: "flex-start"
  },
  Text_I91_105_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I91_105_14_25: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("2.0989505247376314%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I91_105_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.368815609361457%"),
    top: hp("0.37481259370314846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I91_105_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.3118440779610194%"),
    top: hp("0.05697224629872566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I91_105_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.3286727722259476%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I91_105_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.32983676961873065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.10135091145834%")
  },
  View_I91_105_14_32: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("2.0989505247376314%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I91_105_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.7632011173368396%"),
    top: hp("0.16787413178176536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I91_105_14_37: {
    width: wp("20.8%"),
    minWidth: wp("20.8%"),
    height: hp("2.39880059970015%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666667%"),
    top: hp("0.4497751124437781%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I91_105_14_38: {
    width: wp("5.6000000000000005%"),
    minWidth: wp("5.6000000000000005%"),
    height: hp("2.0989505247376314%"),
    minHeight: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I91_105_14_39: {
    width: wp("0.8%"),
    height: hp("1.4992503748125936%"),
    top: hp("0.2998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I91_105_14_40: {
    width: wp("3.2%"),
    height: hp("1.199400299850075%"),
    top: hp("0.5997001499250376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I91_105_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I91_105_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I91_105_14_45: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2.0989505247376314%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I91_105_14_46: {
    width: wp("3.8%"),
    height: hp("1.4992503748125936%"),
    top: hp("0.2998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_91_141: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.746626686656672%"),
    minHeight: hp("6.746626686656672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.998500749625187%"),
    backgroundColor: "rgba(8, 8, 8, 1)",
    overflow: "hidden"
  },
  View_I91_141_23_27: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("1.3493253373313343%"),
    justifyContent: "flex-start"
  },
  Text_I91_141_23_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I91_141_23_26: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.596701649175413%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  ImageBackground_90_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.58920539730135%"),
    minHeight: hp("21.58920539730135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.745127436281859%")
  },
  View_91_155: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.496251874062969%"),
    minHeight: hp("7.496251874062969%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("92.50374812593704%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    overflow: "hidden"
  },
  View_I91_155_15_22: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I91_155_38_0: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.424287856071956%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I91_155_16_13: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I91_155_16_9: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I91_155_16_9_11_26: {
    flexGrow: 1,
    width: wp("4.640418497721354%"),
    height: hp("3.0434781464858394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833329%"),
    top: hp("0.5217407775604386%")
  },
  View_I91_155_16_28: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I91_155_16_28_11_66: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    height: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.1499250374812533%")
  },
  TouchableOpacity_I91_155_16_0: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%")
  },
  TouchableOpacity_I91_155_15_27: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666668%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I91_155_15_27_11_34: {
    flexGrow: 1,
    width: wp("4.987294514973958%"),
    height: hp("3.0434781464858394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833258%"),
    top: hp("0.5217407775604386%")
  },
  View_91_98: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("20.239880059970012%"),
    minHeight: hp("20.239880059970012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("37.48125937031484%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I91_98_91_83: {
    flexGrow: 1,
    width: wp("90.66666666666666%"),
    height: hp("20.239880059970012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I91_98_91_1: {
    width: wp("67.2%"),
    minWidth: wp("67.2%"),
    height: hp("4.0479760119940025%"),
    minHeight: hp("4.0479760119940025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("3.7481259370314888%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I91_98_91_0: {
    width: wp("67.2%"),
    minWidth: wp("67.2%"),
    minHeight: hp("4.0479760119940025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I91_98_91_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.115,
    textTransform: "none"
  },
  View_I91_98_91_3: {
    width: wp("67.73333333333333%"),
    minWidth: wp("67.73333333333333%"),
    height: hp("7.19640179910045%"),
    minHeight: hp("7.19640179910045%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("9.295352323838088%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I91_98_91_2: {
    width: wp("67.73333333333333%"),
    minWidth: wp("67.73333333333333%"),
    minHeight: hp("5.697151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7496251874062949%"),
    justifyContent: "center"
  },
  Text_I91_98_91_2: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I91_98_91_4: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("4.497751124437784%")
  },
  View_91_176: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("20.239880059970012%"),
    minHeight: hp("20.239880059970012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("61.019490254872565%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I91_176_91_83: {
    flexGrow: 1,
    width: wp("90.66666666666666%"),
    height: hp("23.088455772113946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I91_176_91_1: {
    width: wp("67.2%"),
    minWidth: wp("67.2%"),
    height: hp("4.0479760119940025%"),
    minHeight: hp("4.0479760119940025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("3.7481259370314746%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I91_176_91_0: {
    width: wp("67.2%"),
    minWidth: wp("67.2%"),
    minHeight: hp("4.0479760119940025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I91_176_91_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.115,
    textTransform: "none"
  },
  View_I91_176_91_3: {
    width: wp("67.73333333333333%"),
    minWidth: wp("67.73333333333333%"),
    height: hp("10.044977511244378%"),
    minHeight: hp("10.044977511244378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%"),
    top: hp("9.295352323838074%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I91_176_91_2: {
    width: wp("67.73333333333333%"),
    minWidth: wp("67.73333333333333%"),
    minHeight: hp("8.545727136431784%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7496251874063091%"),
    justifyContent: "center"
  },
  Text_I91_176_91_2: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I91_176_91_4: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2.2488755622188905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000001%"),
    top: hp("4.497751124437784%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
