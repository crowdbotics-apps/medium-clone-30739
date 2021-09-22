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
      <View style={styles.View_33_330}>
        <View style={styles.View_I33_330_27_191} />
        <View style={styles.View_I33_330_27_192} />
        <View style={styles.View_I33_330_27_190}>
          <Text style={styles.Text_I33_330_27_190}>Past 7 Days</Text>
        </View>
      </View>
      <View style={styles.View_33_367}>
        <View style={styles.View_I33_367_27_191} />
        <View style={styles.View_I33_367_27_192} />
        <View style={styles.View_I33_367_27_190}>
          <Text style={styles.Text_I33_367_27_190}>Older</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_33_349}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I33_349_69_1284}>
          <View style={styles.View_I33_349_69_1285}>
            <View style={styles.View_I33_349_69_1286}>
              <Text style={styles.Text_I33_349_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I33_349_69_1287}>
              <Text style={styles.Text_I33_349_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I33_349_69_1288}>
            <View style={styles.View_I33_349_69_1289} />
            <View style={styles.View_I33_349_69_1290} />
          </View>
        </View>
        <View style={styles.View_I33_349_69_1227}>
          <View style={styles.View_I33_349_69_1228}>
            <View style={styles.View_I33_349_69_1229}>
              <View style={styles.View_I33_349_69_1230}>
                <Text style={styles.Text_I33_349_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I33_349_69_1231}>
              <View style={styles.View_I33_349_69_1232}>
                <View style={styles.View_I33_349_69_1233}>
                  <Text style={styles.Text_I33_349_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I33_349_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I33_349_69_1236}>
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd25/eae9/a08a0021761f7bbb9e9fea8a096d0817"
              }}
              style={styles.TouchableOpacity_I33_349_69_1237}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("87_195"))
              }
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6613/3197/b34acd0ec144e2d866ab355f9504a803"
              }}
              style={styles.ImageBackground_I33_349_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I33_349_69_1293} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_33_371}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I33_371_69_1284}>
          <View style={styles.View_I33_371_69_1285}>
            <View style={styles.View_I33_371_69_1286}>
              <Text style={styles.Text_I33_371_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I33_371_69_1287}>
              <Text style={styles.Text_I33_371_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I33_371_69_1288}>
            <View style={styles.View_I33_371_69_1289} />
            <View style={styles.View_I33_371_69_1290} />
          </View>
        </View>
        <View style={styles.View_I33_371_69_1227}>
          <View style={styles.View_I33_371_69_1228}>
            <View style={styles.View_I33_371_69_1229}>
              <View style={styles.View_I33_371_69_1230}>
                <Text style={styles.Text_I33_371_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I33_371_69_1231}>
              <View style={styles.View_I33_371_69_1232}>
                <View style={styles.View_I33_371_69_1233}>
                  <Text style={styles.Text_I33_371_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I33_371_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I33_371_69_1236}>
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd25/eae9/a08a0021761f7bbb9e9fea8a096d0817"
              }}
              style={styles.TouchableOpacity_I33_371_69_1237}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("87_195"))
              }
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6613/3197/b34acd0ec144e2d866ab355f9504a803"
              }}
              style={styles.ImageBackground_I33_371_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I33_371_69_1293}>
          <View style={styles.View_I33_371_69_1294} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_33_387}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I33_387_69_1284}>
          <View style={styles.View_I33_387_69_1285}>
            <View style={styles.View_I33_387_69_1286}>
              <Text style={styles.Text_I33_387_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I33_387_69_1287}>
              <Text style={styles.Text_I33_387_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I33_387_69_1288}>
            <View style={styles.View_I33_387_69_1289} />
            <View style={styles.View_I33_387_69_1290} />
          </View>
        </View>
        <View style={styles.View_I33_387_69_1227}>
          <View style={styles.View_I33_387_69_1228}>
            <View style={styles.View_I33_387_69_1229}>
              <View style={styles.View_I33_387_69_1230}>
                <Text style={styles.Text_I33_387_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I33_387_69_1231}>
              <View style={styles.View_I33_387_69_1232}>
                <View style={styles.View_I33_387_69_1233}>
                  <Text style={styles.Text_I33_387_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I33_387_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I33_387_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd25/eae9/a08a0021761f7bbb9e9fea8a096d0817"
              }}
              style={styles.ImageBackground_I33_387_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6613/3197/b34acd0ec144e2d866ab355f9504a803"
              }}
              style={styles.ImageBackground_I33_387_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I33_387_69_1293}>
          <View style={styles.View_I33_387_69_1294} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_186_27}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("165_1807"))
        }
      >
        <View style={styles.View_I186_27_69_1284}>
          <View style={styles.View_I186_27_69_1285}>
            <View style={styles.View_I186_27_69_1286}>
              <Text style={styles.Text_I186_27_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I186_27_69_1287}>
              <Text style={styles.Text_I186_27_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I186_27_69_1288}>
            <View style={styles.View_I186_27_69_1289} />
            <View style={styles.View_I186_27_69_1290} />
          </View>
        </View>
        <View style={styles.View_I186_27_69_1227}>
          <View style={styles.View_I186_27_69_1228}>
            <View style={styles.View_I186_27_69_1229}>
              <View style={styles.View_I186_27_69_1230}>
                <Text style={styles.Text_I186_27_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I186_27_69_1231}>
              <View style={styles.View_I186_27_69_1232}>
                <View style={styles.View_I186_27_69_1233}>
                  <Text style={styles.Text_I186_27_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I186_27_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I186_27_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd25/eae9/a08a0021761f7bbb9e9fea8a096d0817"
              }}
              style={styles.ImageBackground_I186_27_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6613/3197/b34acd0ec144e2d866ab355f9504a803"
              }}
              style={styles.ImageBackground_I186_27_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I186_27_69_1293}>
          <View style={styles.View_I186_27_69_1294} />
        </View>
      </TouchableOpacity>
      <View style={styles.View_33_323}>
        <View style={styles.View_I33_323_37_15}>
          <View style={styles.View_I33_323_27_195}>
            <Text style={styles.Text_I33_323_27_195}>Saved(14)</Text>
          </View>
          <View style={styles.View_I33_323_27_199} />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I33_323_37_52}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("35_546"))
          }
        >
          <View style={styles.View_I33_323_27_196}>
            <Text style={styles.Text_I33_323_27_196}>Archived</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I33_323_37_102}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("35_681"))
          }
        >
          <View style={styles.View_I33_323_27_197}>
            <Text style={styles.Text_I33_323_27_197}>Recently viewed</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I33_323_37_164}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("201_67"))
          }
        >
          <View style={styles.View_I33_323_27_198}>
            <Text style={styles.Text_I33_323_27_198}>Highlighted</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_33_316}>
        <View style={styles.View_I33_316_23_27}>
          <Text style={styles.Text_I33_316_23_27}>Reading list</Text>
        </View>
        <View style={styles.View_I33_316_23_26} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I33_316_88_151}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("87_195"))
          }
        >
          <View style={styles.View_I33_316_88_194}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/034e/3cb1/cd6f88a6a354ac0954e1ef49ea3e2019"
              }}
              style={styles.ImageBackground_I33_316_23_37}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_33_279}>
        <View style={styles.View_I33_279_14_15}>
          <View style={styles.View_I33_279_14_16}>
            <Text style={styles.Text_I33_279_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I33_279_14_17}>
            <View style={styles.View_I33_279_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I33_279_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I33_279_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I33_279_14_23}
              />
            </View>
            <View style={styles.View_I33_279_14_24}>
              <Text style={styles.Text_I33_279_14_24}>100%</Text>
            </View>
            <View style={styles.View_I33_279_14_25}>
              <View style={styles.View_I33_279_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I33_279_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I33_279_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I33_279_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I33_279_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I33_279_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I33_279_14_37}>
            <View style={styles.View_I33_279_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I33_279_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I33_279_14_40}
              />
            </View>
            <View style={styles.View_I33_279_14_44}>
              <Text style={styles.Text_I33_279_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I33_279_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I33_279_14_46}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_33_403}>
        <View style={styles.View_I33_403_15_22} />
        <View style={styles.View_I33_403_38_0}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683e/5d41/f7e4732f7b694c656bc389a9abb29586"
            }}
            style={styles.TouchableOpacity_I33_403_16_13}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1_2"))
            }
          />
          <View style={styles.View_I33_403_16_9}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b28/4349/32ea338d7b57c03e68fdd780c3c7a6f9"
              }}
              style={styles.ImageBackground_I33_403_16_9_11_26}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_I33_403_16_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("90_3"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e3/1056/34e4e2f714a9040df8f699a2e0515802"
              }}
              style={styles.ImageBackground_I33_403_16_28_11_66}
            />
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9b/5f62/32a6e625858a6dc47f26a3207d52b85f"
            }}
            style={styles.TouchableOpacity_I33_403_16_0}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("94_1588"))
            }
          />
          <View style={styles.View_I33_403_15_27}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c889/3201/2132baa97641495f58ef2ad3292025bd"
              }}
              style={styles.ImageBackground_I33_403_15_27_11_34}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(18, 18, 18, 1)" },
  View_2: { height: hp("126.77595628415301%") },
  View_33_330: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.754098360655737%"),
    backgroundColor: "rgba(25, 25, 25, 1)",
    overflow: "hidden"
  },
  View_I33_330_27_191: {
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
  View_I33_330_27_192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.103825136612022%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I33_330_27_190: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.142076502732243%"),
    justifyContent: "flex-start"
  },
  Text_I33_330_27_190: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_33_367: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.240437158469945%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.67213114754098%"),
    backgroundColor: "rgba(25, 25, 25, 1)",
    overflow: "hidden"
  },
  View_I33_367_27_191: {
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
  View_I33_367_27_192: {
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
  View_I33_367_27_190: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.1420765027322375%"),
    justifyContent: "flex-start"
  },
  Text_I33_367_27_190: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  TouchableOpacity_33_349: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.994535519125684%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_349_69_1284: {
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
  View_I33_349_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.04918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_349_69_1286: {
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
  Text_I33_349_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I33_349_69_1287: {
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
  Text_I33_349_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_349_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87999674479167%"),
    top: hp("2.04918032786885%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_349_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951497395832%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I33_349_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.459016393442623%"),
    top: hp("7.9234972677595685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I33_349_69_1227: {
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
  View_I33_349_69_1228: {
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
  View_I33_349_69_1229: {
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
  View_I33_349_69_1230: {
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
  Text_I33_349_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_349_69_1231: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_349_69_1232: {
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
  View_I33_349_69_1233: {
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
  Text_I33_349_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I33_349_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_I33_349_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.3661202185792334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I33_349_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I33_349_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I33_349_69_1293: {
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
  TouchableOpacity_33_371: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.91256830601093%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_371_69_1284: {
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
  View_I33_371_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.0491803278688465%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_371_69_1286: {
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
  Text_I33_371_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I33_371_69_1287: {
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
  Text_I33_371_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_371_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87999674479167%"),
    top: hp("2.0491803278688465%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_371_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951497395832%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I33_371_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.459016393442623%"),
    top: hp("7.923497267759565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I33_371_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("14.480874316939882%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_371_69_1228: {
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
  View_I33_371_69_1229: {
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
  View_I33_371_69_1230: {
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
  Text_I33_371_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_371_69_1231: {
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
  View_I33_371_69_1232: {
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
  View_I33_371_69_1233: {
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
  Text_I33_371_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I33_371_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_I33_371_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I33_371_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I33_371_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I33_371_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("22.54098360655737%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_371_69_1294: {
    width: wp("91.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3999999999999995%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  TouchableOpacity_33_387: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74.59016393442623%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I33_387_69_1284: {
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
  View_I33_387_69_1285: {
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
  View_I33_387_69_1286: {
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
  Text_I33_387_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I33_387_69_1287: {
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
  Text_I33_387_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_387_69_1288: {
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
  View_I33_387_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951497395832%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I33_387_69_1290: {
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
  View_I33_387_69_1227: {
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
  View_I33_387_69_1228: {
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
  View_I33_387_69_1229: {
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
  View_I33_387_69_1230: {
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
  Text_I33_387_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_387_69_1231: {
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
  View_I33_387_69_1232: {
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
  View_I33_387_69_1233: {
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
  Text_I33_387_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I33_387_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579141%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_I33_387_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.3661202185792405%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I33_387_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I33_387_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I33_387_69_1293: {
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
  View_I33_387_69_1294: {
    width: wp("91.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3999999999999995%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  TouchableOpacity_186_27: {
    width: wp("100.0008544921875%"),
    minWidth: wp("100.0008544921875%"),
    height: hp("22.6775956284153%"),
    minHeight: hp("22.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97.26775956284153%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I186_27_69_1284: {
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
  View_I186_27_69_1285: {
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
  View_I186_27_69_1286: {
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
  Text_I186_27_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I186_27_69_1287: {
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
  Text_I186_27_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I186_27_69_1288: {
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
  View_I186_27_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951497395832%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I186_27_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.459016393442623%"),
    top: hp("7.923497267759544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I186_27_69_1227: {
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
  View_I186_27_69_1228: {
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
  View_I186_27_69_1229: {
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
  View_I186_27_69_1230: {
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
  Text_I186_27_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I186_27_69_1231: {
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
  View_I186_27_69_1232: {
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
  View_I186_27_69_1233: {
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
  Text_I186_27_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I186_27_69_1234: {
    width: wp("4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_I186_27_69_1236: {
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
  ImageBackground_I186_27_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I186_27_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I186_27_69_1293: {
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
  View_I186_27_69_1294: {
    width: wp("91.2%"),
    height: hp("0.1366120218579235%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3999999999999995%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_33_323: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I33_323_37_15: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.775956284153004%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I33_323_27_195: {
    width: wp("16.53333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I33_323_27_195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I33_323_27_199: {
    width: wp("16.53333333333333%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218577%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I33_323_37_52: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("1.775956284153004%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I33_323_27_196: {
    width: wp("15.733333333333333%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I33_323_27_196: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  TouchableOpacity_I33_323_37_102: {
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
  View_I33_323_27_197: {
    width: wp("25.866666666666667%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_I33_323_27_197: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  TouchableOpacity_I33_323_37_164: {
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
  View_I33_323_27_198: {
    width: wp("18.4%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("1.775956284153004%"),
    justifyContent: "flex-start"
  },
  Text_I33_323_27_198: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_33_316: {
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
  View_I33_316_23_27: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("1.2295081967213117%"),
    justifyContent: "flex-start"
  },
  Text_I33_316_23_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I33_316_23_26: {
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
  TouchableOpacity_I33_316_88_151: {
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
  View_I33_316_88_194: {
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
  ImageBackground_I33_316_23_37: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_33_279: {
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
  View_I33_279_14_15: {
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
  View_I33_279_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_I33_279_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_279_14_17: {
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
  View_I33_279_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.20491803278688525%")
  },
  ImageBackground_I33_279_14_19: {
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
  ImageBackground_I33_279_14_22: {
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
  ImageBackground_I33_279_14_23: {
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
  View_I33_279_14_24: {
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
  Text_I33_279_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I33_279_14_25: {
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
  View_I33_279_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I33_279_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.051913235356898846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I33_279_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I33_279_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.10135091145834%")
  },
  View_I33_279_14_32: {
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
  ImageBackground_I33_279_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15296727581753755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I33_279_14_37: {
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
  View_I33_279_14_38: {
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
  ImageBackground_I33_279_14_39: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I33_279_14_40: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I33_279_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I33_279_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I33_279_14_45: {
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
  ImageBackground_I33_279_14_46: {
    width: wp("3.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_33_403: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("119.94535519125684%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    overflow: "hidden"
  },
  View_I33_403_15_22: {
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
  View_I33_403_38_0: {
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
  TouchableOpacity_I33_403_16_13: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I33_403_16_9: {
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
  ImageBackground_I33_403_16_9_11_26: {
    flexGrow: 1,
    width: wp("4.640418497721354%"),
    height: hp("2.773223939489146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833329%"),
    top: hp("0.47541550599812865%")
  },
  TouchableOpacity_I33_403_16_28: {
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
  ImageBackground_I33_403_16_28_11_66: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.1366120218579141%")
  },
  TouchableOpacity_I33_403_16_0: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%")
  },
  View_I33_403_15_27: {
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
  ImageBackground_I33_403_15_27_11_34: {
    flexGrow: 1,
    width: wp("4.987294514973958%"),
    height: hp("2.773223939489146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833258%"),
    top: hp("0.47541550599812865%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
