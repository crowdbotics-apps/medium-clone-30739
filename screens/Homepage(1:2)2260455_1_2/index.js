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
        style={styles.TouchableOpacity_33_57}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I33_57_72_908}>
          <View style={styles.View_I33_57_72_909}>
            <View style={styles.View_I33_57_72_895}>
              <Text style={styles.Text_I33_57_72_895}>Medium App Clone #1</Text>
            </View>
          </View>
          <View style={styles.View_I33_57_72_897}>
            <View style={styles.View_I33_57_72_898}>
              <View style={styles.View_I33_57_72_899}>
                <Text style={styles.Text_I33_57_72_899}>
                  23 June . 7 min read{" "}
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
              }}
              style={styles.ImageBackground_I33_57_72_900}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f026/878e/0456ed0802ad36d4374ade92d03a4d64"
            }}
            style={styles.ImageBackground_I33_57_72_905}
          />
        </View>
        <View style={styles.View_I33_57_72_911}>
          <View style={styles.View_I33_57_72_902}>
            <View style={styles.View_I33_57_72_902_27_21} />
            <View style={styles.View_I33_57_72_902_32_3} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_33_67}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I33_67_72_908}>
          <View style={styles.View_I33_67_72_909}>
            <View style={styles.View_I33_67_72_895}>
              <Text style={styles.Text_I33_67_72_895}>Medium App Clone #2</Text>
            </View>
          </View>
          <View style={styles.View_I33_67_72_897}>
            <View style={styles.View_I33_67_72_898}>
              <View style={styles.View_I33_67_72_899}>
                <Text style={styles.Text_I33_67_72_899}>
                  23 June . 7 min read{" "}
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
              }}
              style={styles.ImageBackground_I33_67_72_900}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f026/878e/0456ed0802ad36d4374ade92d03a4d64"
            }}
            style={styles.ImageBackground_I33_67_72_905}
          />
        </View>
        <View style={styles.View_I33_67_72_911}>
          <View style={styles.View_I33_67_72_902}>
            <View style={styles.View_I33_67_72_902_27_21} />
            <View style={styles.View_I33_67_72_902_32_3} />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_33_77}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I33_77_72_908}>
          <View style={styles.View_I33_77_72_909}>
            <View style={styles.View_I33_77_72_895}>
              <Text style={styles.Text_I33_77_72_895}>
                Apple’s Fluid Interface Design
              </Text>
            </View>
          </View>
          <View style={styles.View_I33_77_72_897}>
            <View style={styles.View_I33_77_72_898}>
              <View style={styles.View_I33_77_72_899}>
                <Text style={styles.Text_I33_77_72_899}>
                  23 June . 7 min read{" "}
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
              }}
              style={styles.ImageBackground_I33_77_72_900}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f026/878e/0456ed0802ad36d4374ade92d03a4d64"
            }}
            style={styles.ImageBackground_I33_77_72_905}
          />
        </View>
        <View style={styles.View_I33_77_72_911}>
          <View style={styles.View_I33_77_72_902}>
            <View style={styles.View_I33_77_72_902_27_21} />
            <View style={styles.View_I33_77_72_902_32_3} />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_33_50}>
        <View style={styles.View_I33_50_27_329} />
        <View style={styles.View_I33_50_27_326}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d979/cd2b/1fb41bfd3de3bc3523211dc8b0badfdb"
            }}
            style={styles.ImageBackground_I33_50_27_326_27_303}
          />
        </View>
        <View style={styles.View_I33_50_33_0}>
          <View style={styles.View_I33_50_27_314}>
            <Text style={styles.Text_I33_50_27_314}>Your Daily Read</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_33_94}>
        <View style={styles.View_I33_94_33_88} />
        <View style={styles.View_I33_94_33_89} />
        <View style={styles.View_I33_94_33_90} />
        <View style={styles.View_I33_94_33_87}>
          <Text style={styles.Text_I33_94_33_87}>
            Tune your recommendations
          </Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I33_94_31_75}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("35_421"))
          }
        >
          <View style={styles.View_I33_94_31_75_61_66}>
            <Text style={styles.Text_I33_94_31_75_61_66}>Done for Today</Text>
          </View>
          <View style={styles.View_I33_94_31_75_61_132}>
            <View style={styles.View_I33_94_31_75_61_132_31_19}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d60/7aca/4cbdf3cd334f48f89ba052209da40fd4"
                }}
                style={styles.ImageBackground_I33_94_31_75_61_132_31_20}
              />
            </View>
            <View style={styles.View_I33_94_31_75_61_132_31_22}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e3/8552/61377acb80cd19fd94ce38fe9754b40a"
                }}
                style={styles.ImageBackground_I33_94_31_75_61_132_31_23}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I33_94_33_92} />
      </View>
      <View style={styles.View_33_128}>
        <View style={styles.View_I33_128_69_1284}>
          <View style={styles.View_I33_128_69_1285}>
            <View style={styles.View_I33_128_69_1286}>
              <Text style={styles.Text_I33_128_69_1286}>
                Splash Screen is More Important Than You Think
              </Text>
            </View>
            <View style={styles.View_I33_128_69_1287}>
              <Text style={styles.Text_I33_128_69_1287}>
                What to watch out for on the splash sc...
              </Text>
            </View>
          </View>
          <View style={styles.View_I33_128_69_1288}>
            <View style={styles.View_I33_128_69_1289} />
            <View style={styles.View_I33_128_69_1290} />
          </View>
        </View>
        <View style={styles.View_I33_128_69_1227}>
          <View style={styles.View_I33_128_69_1228}>
            <View style={styles.View_I33_128_69_1229}>
              <View style={styles.View_I33_128_69_1230}>
                <Text style={styles.Text_I33_128_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I33_128_69_1231}>
              <View style={styles.View_I33_128_69_1232}>
                <View style={styles.View_I33_128_69_1233}>
                  <Text style={styles.Text_I33_128_69_1233}>
                    20 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I33_128_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I33_128_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I33_128_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eaf/3554/921d2a610c015f3c29986f42a49b0d94"
              }}
              style={styles.ImageBackground_I33_128_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I33_128_69_1293}>
          <View style={styles.View_I33_128_69_1294} />
        </View>
      </View>
      <View style={styles.View_179_3}>
        <View style={styles.View_I179_3_69_1284}>
          <View style={styles.View_I179_3_69_1285}>
            <View style={styles.View_I179_3_69_1286}>
              <Text style={styles.Text_I179_3_69_1286}>
                Apple’s Fluid Interface Design{" "}
              </Text>
            </View>
            <View style={styles.View_I179_3_69_1287}>
              <Text style={styles.Text_I179_3_69_1287}>
                When we looking at iOS and Android, clearly Apple paid attention
                to smooth...
              </Text>
            </View>
          </View>
          <View style={styles.View_I179_3_69_1288}>
            <View style={styles.View_I179_3_69_1289} />
            <View style={styles.View_I179_3_69_1290} />
          </View>
        </View>
        <View style={styles.View_I179_3_69_1227}>
          <View style={styles.View_I179_3_69_1228}>
            <View style={styles.View_I179_3_69_1229}>
              <View style={styles.View_I179_3_69_1230}>
                <Text style={styles.Text_I179_3_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I179_3_69_1231}>
              <View style={styles.View_I179_3_69_1232}>
                <View style={styles.View_I179_3_69_1233}>
                  <Text style={styles.Text_I179_3_69_1233}>
                    3 September . 5 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I179_3_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I179_3_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8820/1045/96e57b4c710f6d819ac7cde35a4e58e7"
              }}
              style={styles.ImageBackground_I179_3_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7eaf/3554/921d2a610c015f3c29986f42a49b0d94"
              }}
              style={styles.ImageBackground_I179_3_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I179_3_69_1293}>
          <View style={styles.View_I179_3_69_1294} />
        </View>
      </View>
      <View style={styles.View_33_110}>
        <View style={styles.View_I33_110_27_184} />
        <View style={styles.View_I33_110_27_185}>
          <Text style={styles.Text_I33_110_27_185}>
            BASED ON YOUR READING HISTORY
          </Text>
        </View>
      </View>
      <View style={styles.View_179_0}>
        <View style={styles.View_I179_0_27_184} />
        <View style={styles.View_I179_0_27_185}>
          <Text style={styles.Text_I179_0_27_185}>
            BASED ON YOUR READING HISTORY
          </Text>
        </View>
      </View>
      <View style={styles.View_33_143}>
        <View style={styles.View_I33_143_15_22} />
        <View style={styles.View_I33_143_38_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d2/cfe0/10cb6e75a29e1b2279800b6924a3afbd"
            }}
            style={styles.ImageBackground_I33_143_16_13}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I33_143_16_9}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("33_278"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc99/5de4/a56b1dcb70324075bc0f39d3c6e1d595"
              }}
              style={styles.ImageBackground_I33_143_16_9_11_26}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I33_143_16_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("90_3"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e3/1056/34e4e2f714a9040df8f699a2e0515802"
              }}
              style={styles.ImageBackground_I33_143_16_28_11_66}
            />
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9b/5f62/32a6e625858a6dc47f26a3207d52b85f"
            }}
            style={styles.TouchableOpacity_I33_143_16_0}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("94_1588"))
            }
          />
          <View style={styles.View_I33_143_15_27}>
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c889/3201/2132baa97641495f58ef2ad3292025bd"
              }}
              style={styles.TouchableOpacity_I33_143_15_27_11_34}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("33_164"))
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.View_33_39}>
        <View style={styles.View_I33_39_15_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f489/8853/7be2485bdc10b8516bcf73cd06494c8c"
            }}
            style={styles.ImageBackground_I33_39_14_2}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c3f/c6f1/44e61028318b3fca33fe5004e19acb76"
            }}
            style={styles.ImageBackground_I33_39_14_4}
          />
          <View style={styles.View_I33_39_14_6}>
            <View style={styles.View_I33_39_14_6_8_1}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f663/5ff4/84e0b4b85d068c6151092caa8d949752"
                }}
                style={styles.ImageBackground_I33_39_14_6_8_2}
              />
            </View>
          </View>
          <View style={styles.View_I33_39_15_1} />
        </View>
      </View>
      <View style={styles.View_35_422}>
        <View style={styles.View_I35_422_14_15}>
          <View style={styles.View_I35_422_14_16}>
            <Text style={styles.Text_I35_422_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I35_422_14_17}>
            <View style={styles.View_I35_422_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I35_422_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I35_422_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I35_422_14_23}
              />
            </View>
            <View style={styles.View_I35_422_14_24}>
              <Text style={styles.Text_I35_422_14_24}>100%</Text>
            </View>
            <View style={styles.View_I35_422_14_25}>
              <View style={styles.View_I35_422_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I35_422_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I35_422_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I35_422_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I35_422_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I35_422_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I35_422_14_37}>
            <View style={styles.View_I35_422_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I35_422_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I35_422_14_40}
              />
            </View>
            <View style={styles.View_I35_422_14_44}>
              <Text style={styles.Text_I35_422_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I35_422_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I35_422_14_46}
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
  View_2: { height: hp("133.74316939890713%") },
  TouchableOpacity_33_57: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.349726775956285%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_57_72_908: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584703%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_57_72_909: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0.6830601092896167%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_57_72_895: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I33_57_72_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_57_72_897: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.961748633879779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_57_72_898: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_57_72_899: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I33_57_72_899: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I33_57_72_900: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%")
  },
  ImageBackground_I33_57_72_905: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("6.967213114754099%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_I33_57_72_911: {
    flexGrow: 1,
    width: wp("28.26666666666667%"),
    height: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_57_72_902: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.9808743169398895%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_57_72_902_27_21: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I33_57_72_902_32_3: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  TouchableOpacity_33_67: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.693989071038253%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_67_72_908: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_67_72_909: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_67_72_895: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I33_67_72_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_67_72_897: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.961748633879779%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_67_72_898: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_67_72_899: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I33_67_72_899: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I33_67_72_900: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%")
  },
  ImageBackground_I33_67_72_905: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("6.967213114754102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_I33_67_72_911: {
    flexGrow: 1,
    width: wp("28.26666666666667%"),
    height: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_67_72_902: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.9808743169398895%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_67_72_902_27_21: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I33_67_72_902_32_3: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  TouchableOpacity_33_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.03825136612022%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_77_72_908: {
    flexGrow: 1,
    width: wp("71.73333333333333%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_77_72_909: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0.6830601092896202%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_77_72_895: {
    width: wp("62.66666666666667%"),
    minWidth: wp("62.66666666666667%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I33_77_72_895: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_77_72_897: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.961748633879786%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_77_72_898: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_77_72_899: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I33_77_72_899: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I33_77_72_900: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.333333333333336%")
  },
  ImageBackground_I33_77_72_905: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("6.967213114754095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_I33_77_72_911: {
    flexGrow: 1,
    width: wp("28.26666666666667%"),
    height: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_77_72_902: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.9808743169398895%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_77_72_902_27_21: {
    flexGrow: 1,
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I33_77_72_902_32_3: {
    flexGrow: 1,
    width: wp("4.8%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_33_50: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.01639344262295%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_50_27_329: {
    flexGrow: 1,
    width: wp("90.4%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("8.19672131147541%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_50_27_326: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.46666666666667%"),
    top: hp("3.415300546448087%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I33_50_27_326_27_303: {
    flexGrow: 1,
    width: wp("4.681800842285156%"),
    height: hp("2.2882985287025326%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.882758585611974%"),
    top: hp("0.452233403106856%")
  },
  View_I33_50_33_0: {
    flexGrow: 1,
    width: wp("41.6%"),
    height: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_50_27_314: {
    width: wp("41.86666666666667%"),
    minWidth: wp("41.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743163%"),
    justifyContent: "center"
  },
  Text_I33_50_27_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.115,
    textTransform: "none"
  },
  View_33_94: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.38251366120219%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_94_33_88: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.606557377049178%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_94_33_89: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.83606557377049%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_I33_94_33_90: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907092%"),
    backgroundColor: "rgba(25, 25, 25, 1)"
  },
  View_I33_94_33_87: {
    flexGrow: 1,
    width: wp("45.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_I33_94_33_87: {
    color: "rgba(65, 135, 44, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  TouchableOpacity_I33_94_31_75: {
    flexGrow: 1,
    width: wp("36.266666666666666%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    top: hp("2.185792349726775%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_94_31_75_61_66: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.999999999999993%"),
    top: hp("1.0245901639344268%"),
    justifyContent: "center"
  },
  Text_I33_94_31_75_61_66: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I33_94_31_75_61_132: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.133333333333326%"),
    top: hp("0.614754098360649%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_94_31_75_61_132_31_19: {
    flexGrow: 1,
    width: wp("4.229884847005208%"),
    height: hp("2.1669493346917825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0574707031250057%"),
    top: hp("0.4333892155214727%")
  },
  ImageBackground_I33_94_31_75_61_132_31_20: {
    width: wp("4.229884847005208%"),
    height: hp("2.1669493346917825%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I33_94_31_75_61_132_31_22: {
    flexGrow: 1,
    width: wp("2.4170811971028647%"),
    height: hp("0.9277257762971471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9620198567708371%"),
    top: hp("1.0534713828498639%")
  },
  ImageBackground_I33_94_31_75_61_132_31_23: {
    width: wp("2.4170811971028647%"),
    height: hp("0.9277257762971471%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I33_94_33_92: {
    flexGrow: 1,
    width: wp("90.4%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    opacity: 0.699999988079071
  },
  View_33_128: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("75.95628415300546%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_128_69_1284: {
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
  View_I33_128_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.049180327868868%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_128_69_1286: {
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
  Text_I33_128_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I33_128_69_1287: {
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
  Text_I33_128_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_128_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87999674479167%"),
    top: hp("2.049180327868868%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_128_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951904296875%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I33_128_69_1290: {
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
  View_I33_128_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("14.480874316939904%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_128_69_1228: {
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
  View_I33_128_69_1229: {
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
  View_I33_128_69_1230: {
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
  Text_I33_128_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_128_69_1231: {
    width: wp("47.46666666666667%"),
    minWidth: wp("47.46666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.0054644808743234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_128_69_1232: {
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
  View_I33_128_69_1233: {
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
  Text_I33_128_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I33_128_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%")
  },
  View_I33_128_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I33_128_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I33_128_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I33_128_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("22.54098360655739%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_128_69_1294: {
    width: wp("91.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_179_3: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104.23497267759562%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I179_3_69_1284: {
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
  View_I179_3_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_3_69_1286: {
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
  Text_I179_3_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I179_3_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.098360655737707%"),
    justifyContent: "flex-start"
  },
  Text_I179_3_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I179_3_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87999674479167%"),
    top: hp("2.0491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_3_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951904296875%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I179_3_69_1290: {
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
  View_I179_3_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("14.480874316939904%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_3_69_1228: {
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
  View_I179_3_69_1229: {
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
  View_I179_3_69_1230: {
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
  Text_I179_3_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I179_3_69_1231: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.005464480874309%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_3_69_1232: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I179_3_69_1233: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I179_3_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I179_3_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.333333333333336%")
  },
  View_I179_3_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_3_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I179_3_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I179_3_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00042724609375000005%"),
    top: hp("22.54098360655739%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I179_3_69_1294: {
    width: wp("91.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.4%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_33_110: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.881813924820697%"),
    minHeight: hp("6.881813924820697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98.63387978142076%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_110_27_184: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.57099222485485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_110_27_185: {
    flexGrow: 1,
    width: wp("63.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("4.508196721311478%"),
    justifyContent: "flex-start"
  },
  Text_I33_110_27_185: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.49000000000000005,
    textTransform: "uppercase"
  },
  View_179_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.881813924820697%"),
    minHeight: hp("6.881813924820697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I179_0_27_184: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.57099222485485%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I179_0_27_185: {
    flexGrow: 1,
    width: wp("63.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("4.508196721311492%"),
    justifyContent: "flex-start"
  },
  Text_I179_0_27_185: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.49000000000000005,
    textTransform: "uppercase"
  },
  View_33_143: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("126.91256830601093%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    overflow: "hidden"
  },
  View_I33_143_15_22: {
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
  View_I33_143_38_0: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.2978142076502621%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I33_143_16_13: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I33_143_16_9: {
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
  ImageBackground_I33_143_16_9_11_26: {
    flexGrow: 1,
    width: wp("4.640418497721354%"),
    height: hp("2.773223939489146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373331705729171%"),
    top: hp("0.47541550599811444%")
  },
  TouchableOpacity_I33_143_16_28: {
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
  ImageBackground_I33_143_16_28_11_66: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.1366120218579283%")
  },
  TouchableOpacity_I33_143_16_0: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%")
  },
  View_I33_143_15_27: {
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
  TouchableOpacity_I33_143_15_27_11_34: {
    flexGrow: 1,
    width: wp("4.987294514973958%"),
    height: hp("2.773223939489146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.23733317057291%"),
    top: hp("0.47541550599811444%")
  },
  View_33_39: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.73224043715847%"),
    backgroundColor: "rgba(8, 8, 8, 1)",
    overflow: "hidden"
  },
  View_I33_39_15_4: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.683060109289618%")
  },
  ImageBackground_I33_39_14_2: {
    width: wp("27.46666666666667%"),
    height: hp("2.7639540166802745%"),
    top: hp("0.8196721311475406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%")
  },
  ImageBackground_I33_39_14_4: {
    width: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.73333333333333%")
  },
  View_I33_39_14_6: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_39_14_6_8_1: {
    flexGrow: 1,
    width: wp("5.440000406901042%"),
    height: hp("2.786885454355042%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.813334147135417%"),
    top: hp("0.9289600810066592%")
  },
  ImageBackground_I33_39_14_6_8_2: {
    width: wp("5.440000406901042%"),
    height: hp("2.786885454355042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I33_39_15_1: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459017%"),
    backgroundColor: "rgba(33, 33, 33, 1)"
  },
  View_35_422: {
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
  View_I35_422_14_15: {
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
  View_I35_422_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_I35_422_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I35_422_14_17: {
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
  View_I35_422_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.20491803278688525%")
  },
  ImageBackground_I35_422_14_19: {
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
  ImageBackground_I35_422_14_22: {
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
  ImageBackground_I35_422_14_23: {
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
  View_I35_422_14_24: {
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
  Text_I35_422_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I35_422_14_25: {
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
  View_I35_422_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I35_422_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.051913235356898846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.1653340657552178%")
  },
  ImageBackground_I35_422_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I35_422_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1013427734375085%")
  },
  View_I35_422_14_32: {
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
  ImageBackground_I35_422_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15296727581753755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I35_422_14_37: {
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
  View_I35_422_14_38: {
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
  ImageBackground_I35_422_14_39: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I35_422_14_40: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I35_422_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I35_422_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I35_422_14_45: {
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
  ImageBackground_I35_422_14_46: {
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
