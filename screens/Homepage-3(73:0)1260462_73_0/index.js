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
      <View style={styles.View_73_2}>
        <View style={styles.View_I73_2_15_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f489/8853/7be2485bdc10b8516bcf73cd06494c8c"
            }}
            style={styles.ImageBackground_I73_2_14_2}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c3f/c6f1/44e61028318b3fca33fe5004e19acb76"
            }}
            style={styles.ImageBackground_I73_2_14_4}
          />
          <View style={styles.View_I73_2_14_6}>
            <View style={styles.View_I73_2_14_6_8_1}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f663/5ff4/84e0b4b85d068c6151092caa8d949752"
                }}
                style={styles.ImageBackground_I73_2_14_6_8_2}
              />
            </View>
          </View>
          <View style={styles.View_I73_2_15_1} />
        </View>
      </View>
      <View style={styles.View_73_3}>
        <View style={styles.View_I73_3_69_1284}>
          <View style={styles.View_I73_3_69_1285}>
            <View style={styles.View_I73_3_69_1286}>
              <Text style={styles.Text_I73_3_69_1286}>
                Splash Screen is More Important Than You Think
              </Text>
            </View>
            <View style={styles.View_I73_3_69_1287}>
              <Text style={styles.Text_I73_3_69_1287}>
                What to watch out for on the splash sc...
              </Text>
            </View>
          </View>
          <View style={styles.View_I73_3_69_1288}>
            <View style={styles.View_I73_3_69_1289} />
            <View style={styles.View_I73_3_69_1290} />
          </View>
        </View>
        <View style={styles.View_I73_3_69_1227}>
          <View style={styles.View_I73_3_69_1228}>
            <View style={styles.View_I73_3_69_1229}>
              <View style={styles.View_I73_3_69_1230}>
                <Text style={styles.Text_I73_3_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I73_3_69_1231}>
              <View style={styles.View_I73_3_69_1232}>
                <View style={styles.View_I73_3_69_1233}>
                  <Text style={styles.Text_I73_3_69_1233}>
                    20 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I73_3_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I73_3_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I73_3_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eaf/3554/921d2a610c015f3c29986f42a49b0d94"
              }}
              style={styles.ImageBackground_I73_3_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I73_3_69_1293}>
          <View style={styles.View_I73_3_69_1294} />
        </View>
      </View>
      <View style={styles.View_73_4}>
        <View style={styles.View_I73_4_69_1284}>
          <View style={styles.View_I73_4_69_1285}>
            <View style={styles.View_I73_4_69_1286}>
              <Text style={styles.Text_I73_4_69_1286}>
                Apple’s Fluid Interface Design
              </Text>
            </View>
            <View style={styles.View_I73_4_69_1287}>
              <Text style={styles.Text_I73_4_69_1287}>
                When we looking at iOS and Android, clearly Apple paid attention
                to smooth...
              </Text>
            </View>
          </View>
          <View style={styles.View_I73_4_69_1288}>
            <View style={styles.View_I73_4_69_1289} />
            <View style={styles.View_I73_4_69_1290} />
          </View>
        </View>
        <View style={styles.View_I73_4_69_1227}>
          <View style={styles.View_I73_4_69_1228}>
            <View style={styles.View_I73_4_69_1229}>
              <View style={styles.View_I73_4_69_1230}>
                <Text style={styles.Text_I73_4_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I73_4_69_1231}>
              <View style={styles.View_I73_4_69_1232}>
                <View style={styles.View_I73_4_69_1233}>
                  <Text style={styles.Text_I73_4_69_1233}>
                    3 September . 5 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I73_4_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I73_4_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I73_4_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eaf/3554/921d2a610c015f3c29986f42a49b0d94"
              }}
              style={styles.ImageBackground_I73_4_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I73_4_69_1293}>
          <View style={styles.View_I73_4_69_1294} />
        </View>
      </View>
      <View style={styles.View_73_5}>
        <View style={styles.View_I73_5_69_1284}>
          <View style={styles.View_I73_5_69_1285}>
            <View style={styles.View_I73_5_69_1286}>
              <Text style={styles.Text_I73_5_69_1286}>
                What behind Apple Human Interface Design
              </Text>
            </View>
            <View style={styles.View_I73_5_69_1287}>
              <Text style={styles.Text_I73_5_69_1287}>
                What should we pay attention to while ...
              </Text>
            </View>
          </View>
          <View style={styles.View_I73_5_69_1288}>
            <View style={styles.View_I73_5_69_1289} />
            <View style={styles.View_I73_5_69_1290} />
          </View>
        </View>
        <View style={styles.View_I73_5_69_1227}>
          <View style={styles.View_I73_5_69_1228}>
            <View style={styles.View_I73_5_69_1229}>
              <View style={styles.View_I73_5_69_1230}>
                <Text style={styles.Text_I73_5_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I73_5_69_1231}>
              <View style={styles.View_I73_5_69_1232}>
                <View style={styles.View_I73_5_69_1233}>
                  <Text style={styles.Text_I73_5_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I73_5_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I73_5_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I73_5_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eaf/3554/921d2a610c015f3c29986f42a49b0d94"
              }}
              style={styles.ImageBackground_I73_5_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I73_5_69_1293}>
          <View style={styles.View_I73_5_69_1294} />
        </View>
      </View>
      <View style={styles.View_73_6}>
        <View style={styles.View_I73_6_27_184} />
        <View style={styles.View_I73_6_27_185}>
          <Text style={styles.Text_I73_6_27_185}>FRom your network</Text>
        </View>
      </View>
      <View style={styles.View_73_7}>
        <View style={styles.View_I73_7_27_184} />
        <View style={styles.View_I73_7_27_185}>
          <Text style={styles.Text_I73_7_27_185}>FRom your network</Text>
        </View>
      </View>
      <View style={styles.View_73_8}>
        <View style={styles.View_I73_8_27_184} />
        <View style={styles.View_I73_8_27_185}>
          <Text style={styles.Text_I73_8_27_185}>
            Based on your reading history
          </Text>
        </View>
      </View>
      <View style={styles.View_73_9}>
        <View style={styles.View_I73_9_15_22} />
        <View style={styles.View_I73_9_38_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d2/cfe0/10cb6e75a29e1b2279800b6924a3afbd"
            }}
            style={styles.ImageBackground_I73_9_16_13}
          />
          <View style={styles.View_I73_9_16_9}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc99/5de4/a56b1dcb70324075bc0f39d3c6e1d595"
              }}
              style={styles.ImageBackground_I73_9_16_9_11_26}
            />
          </View>
          <View style={styles.View_I73_9_16_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e3/1056/34e4e2f714a9040df8f699a2e0515802"
              }}
              style={styles.ImageBackground_I73_9_16_28_11_66}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9b/5f62/32a6e625858a6dc47f26a3207d52b85f"
            }}
            style={styles.ImageBackground_I73_9_16_0}
          />
          <View style={styles.View_I73_9_15_27}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c889/3201/2132baa97641495f58ef2ad3292025bd"
              }}
              style={styles.ImageBackground_I73_9_15_27_11_34}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_73_279}>
        <View style={styles.View_I73_279_73_181} />
        <View style={styles.View_I73_279_73_153}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I73_279_73_219}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("35_421"))
            }
          >
            <View style={styles.View_I73_279_73_219_73_156}>
              <View style={styles.View_I73_279_73_219_73_158}>
                <Text style={styles.Text_I73_279_73_219_73_158}>Cancel</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_I73_279_73_160}>
          <View style={styles.View_I73_279_73_220}>
            <View style={styles.View_I73_279_73_220_73_162}>
              <View style={styles.View_I73_279_73_220_73_163}>
                <View style={styles.View_I73_279_73_220_73_164} />
                <View style={styles.View_I73_279_73_220_73_165}>
                  <Text style={styles.Text_I73_279_73_220_73_165}>
                    Dismiss this story
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I73_279_73_220_73_170}>
              <View style={styles.View_I73_279_73_220_73_171}>
                <View style={styles.View_I73_279_73_220_73_172} />
                <View style={styles.View_I73_279_73_220_73_173}>
                  <Text style={styles.Text_I73_279_73_220_73_173}>
                    Mute this author
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I73_279_73_220_73_174}>
              <View style={styles.View_I73_279_73_220_73_175}>
                <View style={styles.View_I73_279_73_220_73_176} />
                <View style={styles.View_I73_279_73_220_73_177}>
                  <Text style={styles.Text_I73_279_73_220_73_177}>
                    Mute this publication
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_73_1}>
        <View style={styles.View_I73_1_14_15}>
          <View style={styles.View_I73_1_14_16}>
            <Text style={styles.Text_I73_1_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I73_1_14_17}>
            <View style={styles.View_I73_1_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I73_1_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I73_1_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I73_1_14_23}
              />
            </View>
            <View style={styles.View_I73_1_14_24}>
              <Text style={styles.Text_I73_1_14_24}>100%</Text>
            </View>
            <View style={styles.View_I73_1_14_25}>
              <View style={styles.View_I73_1_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I73_1_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I73_1_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I73_1_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I73_1_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I73_1_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I73_1_14_37}>
            <View style={styles.View_I73_1_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I73_1_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I73_1_14_40}
              />
            </View>
            <View style={styles.View_I73_1_14_44}>
              <Text style={styles.Text_I73_1_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I73_1_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I73_1_14_46}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_73_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.896551724137931%"),
    minHeight: hp("6.896551724137931%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.998500749625187%"),
    backgroundColor: "rgba(8, 8, 8, 1)",
    overflow: "hidden"
  },
  View_I73_2_15_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.146926536731634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7496251874062971%")
  },
  ImageBackground_I73_2_14_2: {
    width: wp("27.46666666666667%"),
    height: hp("3.0333048578859985%"),
    top: hp("0.8995502248875562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  ImageBackground_I73_2_14_4: {
    width: wp("9.066666666666666%"),
    height: hp("5.097451274362818%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333333%")
  },
  View_I73_2_14_6: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("5.097451274362818%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I73_2_14_6_8_1: {
    flexGrow: 1,
    width: wp("5.440000406901042%"),
    height: hp("3.0584709933851437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.813334147135417%"),
    top: hp("1.0194975754310347%")
  },
  ImageBackground_I73_2_14_6_8_2: {
    width: wp("5.440000406901042%"),
    height: hp("3.0584709933851437%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I73_2_15_1: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.847076461769116%"),
    backgroundColor: "rgba(33, 33, 33, 1)"
  },
  View_73_3: {
    width: wp("100.0008544921875%"),
    height: hp("24.887556221889056%"),
    top: hp("14.992503748125937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_3_69_1284: {
    flexGrow: 1,
    width: wp("100.0008544921875%"),
    height: hp("15.892053973013493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_3_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("10.194902548725636%"),
    minHeight: hp("10.194902548725636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.248875562218892%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_3_69_1286: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("6.296851574212893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I73_3_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I73_3_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.646176911544227%"),
    justifyContent: "flex-start"
  },
  Text_I73_3_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I73_3_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("11.394302848575713%"),
    minHeight: hp("11.394302848575713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87999674479167%"),
    top: hp("2.248875562218892%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_3_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("10.794602698650674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951904296875%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I73_3_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.6986506746626686%"),
    top: hp("8.695652173913043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I73_3_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("15.892053973013496%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_3_69_1228: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("5.847076461769116%"),
    minHeight: hp("5.847076461769116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_3_69_1229: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_3_69_1230: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I73_3_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I73_3_69_1231: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.298350824587704%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_3_69_1232: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_3_69_1233: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I73_3_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I73_3_69_1234: {
    width: wp("4%"),
    height: hp("2.2488755622188905%"),
    top: hp("0.1499250374812533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%")
  },
  View_I73_3_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.4992503748125863%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I73_3_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I73_3_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I73_3_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("24.7376311844078%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_3_69_1294: {
    width: wp("91.2%"),
    height: hp("0.14992503748125938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_73_4: {
    width: wp("100.0008544921875%"),
    height: hp("24.887556221889056%"),
    top: hp("44.97751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_4_69_1284: {
    flexGrow: 1,
    width: wp("100.0008544921875%"),
    height: hp("15.892053973013493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_4_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("9.5952023988006%"),
    minHeight: hp("9.5952023988006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.248875562218899%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_4_69_1286: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("3.1484257871064467%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I73_4_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I73_4_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.497751124437777%"),
    justifyContent: "flex-start"
  },
  Text_I73_4_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I73_4_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("11.394302848575713%"),
    minHeight: hp("11.394302848575713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87999674479167%"),
    top: hp("2.248875562218899%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_4_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("10.794602698650674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951904296875%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I73_4_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.6986506746626686%"),
    top: hp("8.69565217391304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I73_4_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("15.892053973013503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_4_69_1228: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("5.847076461769116%"),
    minHeight: hp("5.847076461769116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_4_69_1229: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_4_69_1230: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I73_4_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I73_4_69_1231: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.2983508245877005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_4_69_1232: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_4_69_1233: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I73_4_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I73_4_69_1234: {
    width: wp("4%"),
    height: hp("2.2488755622188905%"),
    top: hp("0.1499250374812533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%")
  },
  View_I73_4_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.4992503748125827%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I73_4_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I73_4_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I73_4_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("24.73763118440779%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_4_69_1294: {
    width: wp("91.2%"),
    height: hp("0.14992503748125938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_73_5: {
    width: wp("100.0008544921875%"),
    height: hp("24.887556221889056%"),
    top: hp("74.96251874062968%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_5_69_1284: {
    flexGrow: 1,
    width: wp("100.0008544921875%"),
    height: hp("15.892053973013493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_5_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("10.194902548725636%"),
    minHeight: hp("10.194902548725636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.248875562218899%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_5_69_1286: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("6.296851574212893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I73_5_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I73_5_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.646176911544231%"),
    justifyContent: "flex-start"
  },
  Text_I73_5_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I73_5_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("11.394302848575713%"),
    minHeight: hp("11.394302848575713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87999674479167%"),
    top: hp("2.248875562218899%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_5_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("10.794602698650674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951904296875%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I73_5_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.6986506746626686%"),
    top: hp("8.695652173913047%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I73_5_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("15.892053973013503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_5_69_1228: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("5.847076461769116%"),
    minHeight: hp("5.847076461769116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_5_69_1229: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_5_69_1230: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I73_5_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I73_5_69_1231: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.2983508245877005%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_5_69_1232: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_5_69_1233: {
    width: wp("41.333333333333336%"),
    minWidth: wp("41.333333333333336%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I73_5_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I73_5_69_1234: {
    width: wp("4%"),
    height: hp("2.2488755622188905%"),
    top: hp("0.1499250374812533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%")
  },
  View_I73_5_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.499250374812604%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I73_5_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I73_5_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I73_5_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("24.737631184407803%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_5_69_1294: {
    width: wp("91.2%"),
    height: hp("0.14992503748125938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_73_6: {
    width: wp("100%"),
    height: hp("6.296851574212893%"),
    top: hp("9.89505247376312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I73_6_27_184: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_6_27_185: {
    flexGrow: 1,
    width: wp("40.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.7481259370314817%"),
    justifyContent: "flex-start"
  },
  Text_I73_6_27_185: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.49000000000000005,
    textTransform: "uppercase"
  },
  View_73_7: {
    width: wp("100%"),
    height: hp("6.296851574212893%"),
    top: hp("69.86506746626686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I73_7_27_184: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_7_27_185: {
    flexGrow: 1,
    width: wp("40.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.7481259370314888%"),
    justifyContent: "flex-start"
  },
  Text_I73_7_27_185: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.49000000000000005,
    textTransform: "uppercase"
  },
  View_73_8: {
    width: wp("100%"),
    height: hp("6.296851574212893%"),
    top: hp("39.88005997001499%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I73_8_27_184: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.097451274362818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_8_27_185: {
    flexGrow: 1,
    width: wp("63.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.7481259370314888%"),
    justifyContent: "flex-start"
  },
  Text_I73_8_27_185: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.49000000000000005,
    textTransform: "uppercase"
  },
  View_73_9: {
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
  View_I73_9_15_22: {
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
  View_I73_9_38_0: {
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
  ImageBackground_I73_9_16_13: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I73_9_16_9: {
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
  ImageBackground_I73_9_16_9_11_26: {
    flexGrow: 1,
    width: wp("4.640418497721354%"),
    height: hp("3.0434781464858394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373331705729171%"),
    top: hp("0.5217362022114003%")
  },
  View_I73_9_16_28: {
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
  ImageBackground_I73_9_16_28_11_66: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    height: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.1499250374812533%")
  },
  ImageBackground_I73_9_16_0: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%")
  },
  View_I73_9_15_27: {
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
  ImageBackground_I73_9_15_27_11_34: {
    flexGrow: 1,
    width: wp("4.987294514973958%"),
    height: hp("3.0434781464858394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.23733317057291%"),
    top: hp("0.5217362022114003%")
  },
  View_73_279: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("97.0014992503748%"),
    minHeight: hp("97.0014992503748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.848575712143928%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I73_279_73_181: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I73_279_73_153: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("8.770615264572305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("87.25637181409296%")
  },
  TouchableOpacity_I73_279_73_219: {
    width: wp("95.73333333333333%"),
    minWidth: wp("95.73333333333333%"),
    height: hp("8.770617552246826%"),
    minHeight: hp("8.770617552246826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_279_73_219_73_156: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("8.770617552246826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_I73_279_73_219_73_158: {
    flexGrow: 1,
    width: wp("87.20000813802083%"),
    top: hp("2.6311917283545654%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    justifyContent: "flex-start"
  },
  Text_I73_279_73_219_73_158: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I73_279_73_160: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("25.78669237768811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("60.26986506746627%")
  },
  View_I73_279_73_220: {
    width: wp("95.73333333333333%"),
    minWidth: wp("95.73333333333333%"),
    height: hp("25.78669237768811%"),
    minHeight: hp("25.78669237768811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I73_279_73_220_73_162: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_279_73_220_73_163: {
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_I73_279_73_220_73_164: {
    flexGrow: 1,
    width: wp("95.77164713541667%"),
    height: hp("0.07123418118821448%"),
    minHeight: hp("0.07123418118821448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000016276041666873908%"),
    top: hp("8.548069715142432%"),
    backgroundColor: "rgba(56, 56, 58, 1)"
  },
  View_I73_279_73_220_73_165: {
    flexGrow: 1,
    width: wp("87.66276041666666%"),
    top: hp("2.5644282351012038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.054451497395833%"),
    justifyContent: "flex-start"
  },
  Text_I73_279_73_220_73_165: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 15.005218505859375,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3610991835594177,
    textTransform: "none"
  },
  View_I73_279_73_220_73_170: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000020345052083481363%"),
    top: hp("8.619298749062963%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_279_73_220_73_171: {
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_I73_279_73_220_73_172: {
    flexGrow: 1,
    width: wp("95.77164713541667%"),
    height: hp("0.07123418118821448%"),
    minHeight: hp("0.07123418118821448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000016276041666873908%"),
    top: hp("8.548069715142432%"),
    backgroundColor: "rgba(56, 56, 58, 1)"
  },
  View_I73_279_73_220_73_173: {
    flexGrow: 1,
    width: wp("87.66276041666666%"),
    top: hp("2.5644282351012038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.05445556640625%"),
    justifyContent: "flex-start"
  },
  Text_I73_279_73_220_73_173: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 15.005218505859375,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3610991835594177,
    textTransform: "none"
  },
  View_I73_279_73_220_73_174: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.000020345052083481363%"),
    top: hp("17.23863410091829%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I73_279_73_220_73_175: {
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_I73_279_73_220_73_176: {
    flexGrow: 1,
    width: wp("95.77164713541667%"),
    height: hp("0.07123418118821448%"),
    minHeight: hp("0.07123418118821448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000016276041666873908%"),
    top: hp("8.548069715142432%"),
    backgroundColor: "rgba(56, 56, 58, 1)"
  },
  View_I73_279_73_220_73_177: {
    flexGrow: 1,
    width: wp("87.66276041666666%"),
    top: hp("2.5644282351011896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.05445556640625%"),
    justifyContent: "flex-start"
  },
  Text_I73_279_73_220_73_177: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 15.005218505859375,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3610991835594177,
    textTransform: "none"
  },
  View_73_1: {
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
  View_I73_1_14_15: {
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
  View_I73_1_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4497751124437781%"),
    justifyContent: "flex-start"
  },
  Text_I73_1_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I73_1_14_17: {
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
  View_I73_1_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.7241379310344827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.22488755622188905%")
  },
  ImageBackground_I73_1_14_19: {
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
  ImageBackground_I73_1_14_22: {
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
  ImageBackground_I73_1_14_23: {
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
  View_I73_1_14_24: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    top: hp("0.044984831802848624%"),
    justifyContent: "flex-start"
  },
  Text_I73_1_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I73_1_14_25: {
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
  View_I73_1_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.368815609361457%"),
    top: hp("0.37481259370314846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I73_1_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.3118440779610194%"),
    top: hp("0.05697224629872566%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1653340657552178%")
  },
  ImageBackground_I73_1_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.3286727722259476%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I73_1_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.32983676961873065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1013427734375085%")
  },
  View_I73_1_14_32: {
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
  ImageBackground_I73_1_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.7632011173368396%"),
    top: hp("0.16787870713080966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I73_1_14_37: {
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
  View_I73_1_14_38: {
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
  ImageBackground_I73_1_14_39: {
    width: wp("0.8%"),
    height: hp("1.4992503748125936%"),
    top: hp("0.2998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I73_1_14_40: {
    width: wp("3.2%"),
    height: hp("1.199400299850075%"),
    top: hp("0.5997001499250376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I73_1_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I73_1_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I73_1_14_45: {
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
  ImageBackground_I73_1_14_46: {
    width: wp("3.8%"),
    height: hp("1.4992503748125936%"),
    top: hp("0.2998500749625187%"),
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
