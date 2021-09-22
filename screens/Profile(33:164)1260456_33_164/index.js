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
      <TouchableOpacity
        style={styles.TouchableOpacity_33_209}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("89_0"))
        }
      >
        <View style={styles.View_I33_209_36_736}>
          <View style={styles.View_I33_209_27_211}>
            <Text style={styles.Text_I33_209_27_211}>View profile</Text>
          </View>
          <View style={styles.View_I33_209_27_215}>
            <Text style={styles.Text_I33_209_27_215}>Ali ÇORAK</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5acc/42c3/d7f81411ffd41a7f2f416b5fed67e8fa"
          }}
          style={styles.ImageBackground_I33_209_27_217}
        />
        <View style={styles.View_I33_209_27_263} />
      </TouchableOpacity>
      <View style={styles.View_33_215}>
        <View style={styles.View_I33_215_27_286} />
        <View style={styles.View_I33_215_27_287} />
        <View style={styles.View_I33_215_27_288} />
        <View style={styles.View_I33_215_27_290} />
        <View style={styles.View_I33_215_27_292}>
          <Text style={styles.Text_I33_215_27_292}>Become a member</Text>
        </View>
      </View>
      <View style={styles.View_33_224}>
        <View style={styles.View_I33_224_27_267} />
        <View style={styles.View_I33_224_33_1}>
          <View style={styles.View_I33_224_27_266}>
            <Text style={styles.Text_I33_224_27_266}>Series</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_33_228}>
        <View style={styles.View_I33_228_27_267} />
        <View style={styles.View_I33_228_33_1}>
          <View style={styles.View_I33_228_27_266}>
            <Text style={styles.Text_I33_228_27_266}>Stories</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_33_232}>
        <View style={styles.View_I33_232_27_267} />
        <View style={styles.View_I33_232_33_1}>
          <View style={styles.View_I33_232_27_266}>
            <Text style={styles.Text_I33_232_27_266}>Stats</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_33_236}>
        <View style={styles.View_I33_236_27_267} />
        <View style={styles.View_I33_236_33_1}>
          <View style={styles.View_I33_236_27_266}>
            <Text style={styles.Text_I33_236_27_266}>
              Customize your interests
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_33_270}>
        <View style={styles.View_I33_270_27_267} />
        <View style={styles.View_I33_270_33_1}>
          <View style={styles.View_I33_270_27_266}>
            <Text style={styles.Text_I33_270_27_266}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_33_274}>
        <View style={styles.View_I33_274_27_267} />
        <View style={styles.View_I33_274_33_1}>
          <View style={styles.View_I33_274_27_266}>
            <Text style={styles.Text_I33_274_27_266}>Help</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_186_110}>
        <View style={styles.View_I186_110_27_267} />
        <View style={styles.View_I186_110_33_1}>
          <View style={styles.View_I186_110_27_266}>
            <Text style={styles.Text_I186_110_27_266}>Terms of service</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_186_135}>
        <View style={styles.View_I186_135_27_267} />
        <View style={styles.View_I186_135_33_1}>
          <View style={styles.View_I186_135_27_266}>
            <Text style={styles.Text_I186_135_27_266}>Privacy policy</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_33_240}>
        <View style={styles.View_I33_240_27_286} />
        <View style={styles.View_I33_240_27_287} />
        <View style={styles.View_I33_240_27_288} />
        <View style={styles.View_I33_240_27_290} />
        <View style={styles.View_I33_240_27_292}>
          <Text style={styles.Text_I33_240_27_292}>Night mode</Text>
        </View>
        <View style={styles.View_I33_240_27_293}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdf4/fb87/aa686d0aa664b355296bff65959ee9f4"
            }}
            style={styles.ImageBackground_I33_240_27_293_27_272}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3b5/1359/37409498f34f0b54464b9fe931f6b23a"
            }}
            style={styles.ImageBackground_I33_240_27_293_27_273}
          />
        </View>
      </View>
      <View style={styles.View_33_249}>
        <View style={styles.View_I33_249_15_22} />
        <View style={styles.View_I33_249_38_0}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683e/5d41/f7e4732f7b694c656bc389a9abb29586"
            }}
            style={styles.TouchableOpacity_I33_249_16_13}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1_2"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I33_249_16_9}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("33_278"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc99/5de4/a56b1dcb70324075bc0f39d3c6e1d595"
              }}
              style={styles.ImageBackground_I33_249_16_9_11_26}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I33_249_16_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("90_3"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e3/1056/34e4e2f714a9040df8f699a2e0515802"
              }}
              style={styles.ImageBackground_I33_249_16_28_11_66}
            />
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9b/5f62/32a6e625858a6dc47f26a3207d52b85f"
            }}
            style={styles.TouchableOpacity_I33_249_16_0}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("94_1588"))
            }
          />
          <View style={styles.View_I33_249_15_27}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dda0/beaa/7ea7a7861a47d81fe1b2a9b20adab7c3"
              }}
              style={styles.ImageBackground_I33_249_15_27_11_34}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_33_202}>
        <View style={styles.View_I33_202_23_27}>
          <Text style={styles.Text_I33_202_23_27}>You</Text>
        </View>
        <View style={styles.View_I33_202_23_26} />
        <View style={styles.View_I33_202_88_151}>
          <View style={styles.View_I33_202_88_194} />
        </View>
      </View>
      <View style={styles.View_33_165}>
        <View style={styles.View_I33_165_14_15}>
          <View style={styles.View_I33_165_14_16}>
            <Text style={styles.Text_I33_165_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I33_165_14_17}>
            <View style={styles.View_I33_165_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I33_165_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I33_165_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I33_165_14_23}
              />
            </View>
            <View style={styles.View_I33_165_14_24}>
              <Text style={styles.Text_I33_165_14_24}>100%</Text>
            </View>
            <View style={styles.View_I33_165_14_25}>
              <View style={styles.View_I33_165_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I33_165_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I33_165_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I33_165_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I33_165_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I33_165_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I33_165_14_37}>
            <View style={styles.View_I33_165_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I33_165_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I33_165_14_40}
              />
            </View>
            <View style={styles.View_I33_165_14_44}>
              <Text style={styles.Text_I33_165_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I33_165_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I33_165_14_46}
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
  View_2: { height: hp("106.83060109289617%") },
  TouchableOpacity_33_209: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_209_36_736: {
    flexGrow: 1,
    width: wp("72.53333333333333%"),
    height: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.200000000000003%"),
    top: hp("2.7322404371584703%")
  },
  View_I33_209_27_211: {
    width: wp("72.53333333333333%"),
    minWidth: wp("72.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.55191256830601%"),
    justifyContent: "flex-start"
  },
  Text_I33_209_27_211: {
    color: "rgba(65, 135, 44, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_209_27_215: {
    width: wp("72.53333333333333%"),
    minWidth: wp("72.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I33_209_27_215: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I33_209_27_217: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.049180327868852%")
  },
  View_I33_209_27_263: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.748633879781423%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_33_215: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240437%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_215_27_286: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.562841530054644%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  View_I33_215_27_287: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  View_I33_215_27_288: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.426229508196723%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_215_27_290: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584703%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_215_27_292: {
    flexGrow: 1,
    width: wp("33.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.781420765027324%"),
    justifyContent: "flex-start"
  },
  Text_I33_215_27_292: {
    color: "rgba(65, 135, 44, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_224: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.060109289617486%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_224_27_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_224_33_1: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_224_27_266: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I33_224_27_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_228: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.89071038251366%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_228_27_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_228_33_1: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_228_27_266: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109324%"),
    justifyContent: "flex-start"
  },
  Text_I33_228_27_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_232: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.72131147540984%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_232_27_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038246%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_232_33_1: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_232_27_266: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I33_232_27_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_236: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.551912568306015%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_236_27_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038239%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_236_33_1: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_236_27_266: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109182%"),
    justifyContent: "flex-start"
  },
  Text_I33_236_27_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_270: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72.6775956284153%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_270_27_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_270_33_1: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_270_27_266: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I33_270_27_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_274: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79.50819672131148%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_274_27_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038246%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_274_33_1: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_274_27_266: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I33_274_27_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_110: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86.33879781420765%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I186_110_27_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038246%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I186_110_33_1: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I186_110_27_266: {
    width: wp("29.06666666666667%"),
    minWidth: wp("29.06666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I186_110_27_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_186_135: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.16939890710383%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I186_135_27_267: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.69398907103826%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I186_135_33_1: {
    flexGrow: 1,
    width: wp("51.733333333333334%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I186_135_27_266: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.9125683060109253%"),
    justifyContent: "flex-start"
  },
  Text_I186_135_27_266: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_33_240: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.38251366120219%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_240_27_286: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.562841530054648%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  View_I33_240_27_287: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  View_I33_240_27_288: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.42622950819672%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_240_27_290: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_240_27_292: {
    flexGrow: 1,
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.781420765027313%"),
    justifyContent: "flex-start"
  },
  Text_I33_240_27_292: {
    color: "rgba(65, 135, 44, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_240_27_293: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("4.0983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I33_240_27_293_27_272: {
    flexGrow: 1,
    width: wp("13.600000000000001%"),
    height: hp("4.234993522935878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I33_240_27_293_27_273: {
    flexGrow: 1,
    width: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.86666666666666%"),
    top: hp("0.2732240437158566%")
  },
  View_33_249: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    overflow: "hidden"
  },
  View_I33_249_15_22: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_249_38_0: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.2978142076502763%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I33_249_16_13: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I33_249_16_9: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I33_249_16_9_11_26: {
    flexGrow: 1,
    width: wp("4.640418497721354%"),
    height: hp("2.773223939489146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833329%"),
    top: hp("0.47541133693006543%")
  },
  TouchableOpacity_I33_249_16_28: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I33_249_16_28_11_66: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.1366120218579283%")
  },
  TouchableOpacity_I33_249_16_0: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%")
  },
  View_I33_249_15_27: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.06666666666668%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I33_249_15_27_11_34: {
    flexGrow: 1,
    width: wp("4.987294514973958%"),
    height: hp("2.773223939489146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833258%"),
    top: hp("0.47541133693006543%")
  },
  View_33_202: {
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
  View_I33_202_23_27: {
    flexGrow: 1,
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    top: hp("1.2295081967213117%"),
    justifyContent: "flex-start"
  },
  Text_I33_202_23_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I33_202_23_26: {
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
  View_I33_202_88_151: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%"),
    top: hp("1.0928961748633883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_202_88_194: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_33_165: {
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
  View_I33_165_14_15: {
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
  View_I33_165_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_I33_165_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_165_14_17: {
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
  View_I33_165_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.20491803278688525%")
  },
  ImageBackground_I33_165_14_19: {
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
  ImageBackground_I33_165_14_22: {
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
  ImageBackground_I33_165_14_23: {
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
  View_I33_165_14_24: {
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
  Text_I33_165_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_165_14_25: {
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
  View_I33_165_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I33_165_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.051913235356898846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I33_165_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I33_165_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.101334635416677%")
  },
  View_I33_165_14_32: {
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
  ImageBackground_I33_165_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15296727581753755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I33_165_14_37: {
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
  View_I33_165_14_38: {
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
  ImageBackground_I33_165_14_39: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I33_165_14_40: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I33_165_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I33_165_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I33_165_14_45: {
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
  ImageBackground_I33_165_14_46: {
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
