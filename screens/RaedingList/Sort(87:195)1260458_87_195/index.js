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
      <View style={styles.View_87_197}>
        <View style={styles.View_I87_197_23_27}>
          <Text style={styles.Text_I87_197_23_27}>Reading list</Text>
        </View>
        <View style={styles.View_I87_197_23_26} />
        <View style={styles.View_I87_197_88_151}>
          <View style={styles.View_I87_197_88_194}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/034e/3cb1/cd6f88a6a354ac0954e1ef49ea3e2019"
              }}
              style={styles.ImageBackground_I87_197_23_37}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_87_198}>
        <View style={styles.View_I87_198_37_15}>
          <View style={styles.View_I87_198_27_195}>
            <Text style={styles.Text_I87_198_27_195}>Saved(14)</Text>
          </View>
          <View style={styles.View_I87_198_27_199} />
        </View>
        <View style={styles.View_I87_198_37_52}>
          <View style={styles.View_I87_198_27_196}>
            <Text style={styles.Text_I87_198_27_196}>Archived</Text>
          </View>
        </View>
        <View style={styles.View_I87_198_37_102}>
          <View style={styles.View_I87_198_27_197}>
            <Text style={styles.Text_I87_198_27_197}>Recently viewed</Text>
          </View>
        </View>
        <View style={styles.View_I87_198_37_164}>
          <View style={styles.View_I87_198_27_198}>
            <Text style={styles.Text_I87_198_27_198}>Highlighted</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_87_199}>
        <View style={styles.View_I87_199_27_191} />
        <View style={styles.View_I87_199_27_192} />
        <View style={styles.View_I87_199_27_190}>
          <Text style={styles.Text_I87_199_27_190}>Past 7 Days</Text>
        </View>
      </View>
      <View style={styles.View_87_200}>
        <View style={styles.View_I87_200_27_191} />
        <View style={styles.View_I87_200_27_192} />
        <View style={styles.View_I87_200_27_190}>
          <Text style={styles.Text_I87_200_27_190}>Past 7 Days</Text>
        </View>
      </View>
      <View style={styles.View_87_201}>
        <View style={styles.View_I87_201_69_1284}>
          <View style={styles.View_I87_201_69_1285}>
            <View style={styles.View_I87_201_69_1286}>
              <Text style={styles.Text_I87_201_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I87_201_69_1287}>
              <Text style={styles.Text_I87_201_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I87_201_69_1288}>
            <View style={styles.View_I87_201_69_1289} />
            <View style={styles.View_I87_201_69_1290} />
          </View>
        </View>
        <View style={styles.View_I87_201_69_1227}>
          <View style={styles.View_I87_201_69_1228}>
            <View style={styles.View_I87_201_69_1229}>
              <View style={styles.View_I87_201_69_1230}>
                <Text style={styles.Text_I87_201_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I87_201_69_1231}>
              <View style={styles.View_I87_201_69_1232}>
                <View style={styles.View_I87_201_69_1233}>
                  <Text style={styles.Text_I87_201_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I87_201_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I87_201_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd25/eae9/a08a0021761f7bbb9e9fea8a096d0817"
              }}
              style={styles.ImageBackground_I87_201_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6613/3197/b34acd0ec144e2d866ab355f9504a803"
              }}
              style={styles.ImageBackground_I87_201_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I87_201_69_1293} />
      </View>
      <View style={styles.View_87_202}>
        <View style={styles.View_I87_202_69_1284}>
          <View style={styles.View_I87_202_69_1285}>
            <View style={styles.View_I87_202_69_1286}>
              <Text style={styles.Text_I87_202_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I87_202_69_1287}>
              <Text style={styles.Text_I87_202_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I87_202_69_1288}>
            <View style={styles.View_I87_202_69_1289} />
            <View style={styles.View_I87_202_69_1290} />
          </View>
        </View>
        <View style={styles.View_I87_202_69_1227}>
          <View style={styles.View_I87_202_69_1228}>
            <View style={styles.View_I87_202_69_1229}>
              <View style={styles.View_I87_202_69_1230}>
                <Text style={styles.Text_I87_202_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I87_202_69_1231}>
              <View style={styles.View_I87_202_69_1232}>
                <View style={styles.View_I87_202_69_1233}>
                  <Text style={styles.Text_I87_202_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I87_202_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I87_202_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd25/eae9/a08a0021761f7bbb9e9fea8a096d0817"
              }}
              style={styles.ImageBackground_I87_202_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6613/3197/b34acd0ec144e2d866ab355f9504a803"
              }}
              style={styles.ImageBackground_I87_202_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I87_202_69_1293}>
          <View style={styles.View_I87_202_69_1294} />
        </View>
      </View>
      <View style={styles.View_87_203}>
        <View style={styles.View_I87_203_69_1284}>
          <View style={styles.View_I87_203_69_1285}>
            <View style={styles.View_I87_203_69_1286}>
              <Text style={styles.Text_I87_203_69_1286}>
                Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I87_203_69_1287}>
              <Text style={styles.Text_I87_203_69_1287}>
                What are the UI Basics in iOS Design?
              </Text>
            </View>
          </View>
          <View style={styles.View_I87_203_69_1288}>
            <View style={styles.View_I87_203_69_1289} />
            <View style={styles.View_I87_203_69_1290} />
          </View>
        </View>
        <View style={styles.View_I87_203_69_1227}>
          <View style={styles.View_I87_203_69_1228}>
            <View style={styles.View_I87_203_69_1229}>
              <View style={styles.View_I87_203_69_1230}>
                <Text style={styles.Text_I87_203_69_1230}>
                  Ali ÇORAK in UX Planet
                </Text>
              </View>
            </View>
            <View style={styles.View_I87_203_69_1231}>
              <View style={styles.View_I87_203_69_1232}>
                <View style={styles.View_I87_203_69_1233}>
                  <Text style={styles.Text_I87_203_69_1233}>
                    17 September . 4 min read{" "}
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/770e/91a1/4ce47b59b1881f6d35bacbba00b06a8d"
                }}
                style={styles.ImageBackground_I87_203_69_1234}
              />
            </View>
          </View>
          <View style={styles.View_I87_203_69_1236}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd25/eae9/a08a0021761f7bbb9e9fea8a096d0817"
              }}
              style={styles.ImageBackground_I87_203_69_1237}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6613/3197/b34acd0ec144e2d866ab355f9504a803"
              }}
              style={styles.ImageBackground_I87_203_69_1238}
            />
          </View>
        </View>
        <View style={styles.View_I87_203_69_1293}>
          <View style={styles.View_I87_203_69_1294} />
        </View>
      </View>
      <View style={styles.View_87_204}>
        <View style={styles.View_I87_204_15_22} />
        <View style={styles.View_I87_204_38_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/683e/5d41/f7e4732f7b694c656bc389a9abb29586"
            }}
            style={styles.ImageBackground_I87_204_16_13}
          />
          <View style={styles.View_I87_204_16_9}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b28/4349/32ea338d7b57c03e68fdd780c3c7a6f9"
              }}
              style={styles.ImageBackground_I87_204_16_9_11_26}
            />
          </View>
          <View style={styles.View_I87_204_16_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e3/1056/34e4e2f714a9040df8f699a2e0515802"
              }}
              style={styles.ImageBackground_I87_204_16_28_11_66}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f9b/5f62/32a6e625858a6dc47f26a3207d52b85f"
            }}
            style={styles.ImageBackground_I87_204_16_0}
          />
          <View style={styles.View_I87_204_15_27}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c889/3201/2132baa97641495f58ef2ad3292025bd"
              }}
              style={styles.ImageBackground_I87_204_15_27_11_34}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_87_1061}>
        <View style={styles.View_87_355}>
          <View style={styles.View_I87_355_73_181} />
          <TouchableOpacity
            style={styles.TouchableOpacity_I87_355_73_153}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("33_278"))
            }
          >
            <View style={styles.View_I87_355_73_219}>
              <View style={styles.View_I87_355_73_219_73_156}>
                <View style={styles.View_I87_355_73_219_73_158}>
                  <Text style={styles.Text_I87_355_73_219_73_158}>Cancel</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_I87_355_73_160}>
            <View style={styles.View_I87_355_73_220}>
              <View style={styles.View_I87_355_73_220_73_162}>
                <View style={styles.View_I87_355_73_220_73_163}>
                  <View style={styles.View_I87_355_73_220_73_164} />
                  <View style={styles.View_I87_355_73_220_73_165}>
                    <Text style={styles.Text_I87_355_73_220_73_165}>
                      Recently added
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I87_355_73_220_73_170}>
                <View style={styles.View_I87_355_73_220_73_171}>
                  <View style={styles.View_I87_355_73_220_73_172} />
                  <View style={styles.View_I87_355_73_220_73_173}>
                    <Text style={styles.Text_I87_355_73_220_73_173}>
                      Recently published
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_I87_355_73_220_73_174}>
                <View style={styles.View_I87_355_73_220_73_175}>
                  <View style={styles.View_I87_355_73_220_73_176} />
                  <View style={styles.View_I87_355_73_220_73_177}>
                    <Text style={styles.Text_I87_355_73_220_73_177}>
                      Shortest reading time
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_87_377}>
          <View style={styles.View_87_378}>
            <View style={styles.View_87_379} />
            <View style={styles.View_87_380}>
              <Text style={styles.Text_87_380}>Sort by:</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_87_196}>
        <View style={styles.View_I87_196_14_15}>
          <View style={styles.View_I87_196_14_16}>
            <Text style={styles.Text_I87_196_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I87_196_14_17}>
            <View style={styles.View_I87_196_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I87_196_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I87_196_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I87_196_14_23}
              />
            </View>
            <View style={styles.View_I87_196_14_24}>
              <Text style={styles.Text_I87_196_14_24}>100%</Text>
            </View>
            <View style={styles.View_I87_196_14_25}>
              <View style={styles.View_I87_196_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I87_196_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I87_196_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I87_196_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I87_196_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I87_196_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I87_196_14_37}>
            <View style={styles.View_I87_196_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I87_196_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I87_196_14_40}
              />
            </View>
            <View style={styles.View_I87_196_14_44}>
              <Text style={styles.Text_I87_196_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I87_196_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I87_196_14_46}
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
  View_2: { height: hp("100%") },
  View_87_197: {
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
  View_I87_197_23_27: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.333333333333336%"),
    top: hp("1.3493253373313343%"),
    justifyContent: "flex-start"
  },
  Text_I87_197_23_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I87_197_23_26: {
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
  View_I87_197_88_151: {
    flexGrow: 1,
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.53333333333333%"),
    top: hp("1.1994002998500757%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_197_88_194: {
    width: wp("7.733333333333333%"),
    minWidth: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I87_197_23_37: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_87_198: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.446776611694154%"),
    minHeight: hp("6.446776611694154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.745127436281859%"),
    backgroundColor: "rgba(18, 18, 18, 1)",
    overflow: "hidden"
  },
  View_I87_198_37_15: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("4.497751124437781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.9490254872563728%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_198_27_195: {
    width: wp("16.53333333333333%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I87_198_27_195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_198_27_199: {
    width: wp("16.53333333333333%"),
    height: hp("0.29985007496251875%"),
    minHeight: hp("0.29985007496251875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.197901049475261%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I87_198_37_52: {
    flexGrow: 1,
    width: wp("15.733333333333333%"),
    height: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("1.9490254872563728%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I87_198_27_196: {
    width: wp("15.733333333333333%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I87_198_27_196: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_198_37_102: {
    flexGrow: 1,
    width: wp("28.000000000000004%"),
    height: hp("6.446776611694154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.266666666666666%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I87_198_27_197: {
    width: wp("25.866666666666667%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666629%"),
    top: hp("1.9490254872563728%"),
    justifyContent: "flex-start"
  },
  Text_I87_198_27_197: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_198_37_164: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("6.446776611694154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.46666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I87_198_27_198: {
    width: wp("18.4%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("1.9490254872563728%"),
    justifyContent: "flex-start"
  },
  Text_I87_198_27_198: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_87_199: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.19190404797601%"),
    backgroundColor: "rgba(25, 25, 25, 1)",
    overflow: "hidden"
  },
  View_I87_199_27_191: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I87_199_27_192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.796101949025488%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I87_199_27_190: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.448275862068968%"),
    justifyContent: "flex-start"
  },
  Text_I87_199_27_190: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_87_200: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.946026986506746%"),
    minHeight: hp("7.946026986506746%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.02548725637181%"),
    backgroundColor: "rgba(25, 25, 25, 1)",
    overflow: "hidden"
  },
  View_I87_200_27_191: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I87_200_27_192: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.796101949025491%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_I87_200_27_190: {
    flexGrow: 1,
    width: wp("25.333333333333336%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.448275862068961%"),
    justifyContent: "flex-start"
  },
  Text_I87_200_27_190: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_87_201: {
    width: wp("100.0008544921875%"),
    height: hp("24.887556221889056%"),
    top: hp("24.137931034482758%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I87_201_69_1284: {
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
  View_I87_201_69_1285: {
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
  View_I87_201_69_1286: {
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
  Text_I87_201_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I87_201_69_1287: {
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
  Text_I87_201_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_201_69_1288: {
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
  View_I87_201_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("10.794602698650674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951497395832%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I87_201_69_1290: {
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
  View_I87_201_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("15.892053973013493%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_201_69_1228: {
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
  View_I87_201_69_1229: {
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
  View_I87_201_69_1230: {
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
  Text_I87_201_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_201_69_1231: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.2983508245877076%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_201_69_1232: {
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
  View_I87_201_69_1233: {
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
  Text_I87_201_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I87_201_69_1234: {
    width: wp("4%"),
    height: hp("2.2488755622188905%"),
    top: hp("0.1499250374812604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_I87_201_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.4992503748125898%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I87_201_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I87_201_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I87_201_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("24.7376311844078%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_87_202: {
    width: wp("100.0008544921875%"),
    height: hp("24.887556221889056%"),
    top: hp("56.97151424287856%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I87_202_69_1284: {
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
  View_I87_202_69_1285: {
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
  View_I87_202_69_1286: {
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
  Text_I87_202_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I87_202_69_1287: {
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
  Text_I87_202_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_202_69_1288: {
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
  View_I87_202_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("10.794602698650674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951497395832%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I87_202_69_1290: {
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
  View_I87_202_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("15.892053973013482%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_202_69_1228: {
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
  View_I87_202_69_1229: {
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
  View_I87_202_69_1230: {
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
  Text_I87_202_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_202_69_1231: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.2983508245877147%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_202_69_1232: {
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
  View_I87_202_69_1233: {
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
  Text_I87_202_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I87_202_69_1234: {
    width: wp("4%"),
    height: hp("2.2488755622188905%"),
    top: hp("0.1499250374812675%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_I87_202_69_1236: {
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
  ImageBackground_I87_202_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I87_202_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I87_202_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("24.737631184407796%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I87_202_69_1294: {
    width: wp("91.2%"),
    height: hp("0.14992503748125938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3999999999999995%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_87_203: {
    width: wp("100.0008544921875%"),
    height: hp("24.887556221889056%"),
    top: hp("81.85907046476761%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I87_203_69_1284: {
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
  View_I87_203_69_1285: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("10.194902548725636%"),
    minHeight: hp("10.194902548725636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.2488755622188847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_203_69_1286: {
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
  Text_I87_203_69_1286: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I87_203_69_1287: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.646176911544245%"),
    justifyContent: "flex-start"
  },
  Text_I87_203_69_1287: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_203_69_1288: {
    width: wp("20.320857747395834%"),
    minWidth: wp("20.320857747395834%"),
    height: hp("11.394302848575713%"),
    minHeight: hp("11.394302848575713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.87999674479167%"),
    top: hp("2.2488755622188847%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_203_69_1289: {
    width: wp("19.251338704427084%"),
    height: hp("10.794602698650674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.06951497395832%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I87_203_69_1290: {
    width: wp("4.812834676106771%"),
    height: hp("2.6986506746626686%"),
    top: hp("8.69565217391306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(18, 18, 18, 1)",
    borderWidth: 2
  },
  View_I87_203_69_1227: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("8.845577211394302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("15.892053973013503%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_203_69_1228: {
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
  View_I87_203_69_1229: {
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
  View_I87_203_69_1230: {
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
  Text_I87_203_69_1230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I87_203_69_1231: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("2.548725637181409%"),
    minHeight: hp("2.548725637181409%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("3.2983508245877147%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_203_69_1232: {
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
  View_I87_203_69_1233: {
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
  Text_I87_203_69_1233: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  ImageBackground_I87_203_69_1234: {
    width: wp("4%"),
    height: hp("2.2488755622188905%"),
    top: hp("0.1499250374812533%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%")
  },
  View_I87_203_69_1236: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("4.3478260869565215%"),
    minHeight: hp("4.3478260869565215%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1.4992503748125898%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I87_203_69_1237: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I87_203_69_1238: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333337%")
  },
  View_I87_203_69_1293: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.14992503748125938%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004231770833333333%"),
    top: hp("24.73763118440779%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I87_203_69_1294: {
    width: wp("91.2%"),
    height: hp("0.14992503748125938%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.3999999999999995%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_87_204: {
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
  View_I87_204_15_22: {
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
  View_I87_204_38_0: {
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
  ImageBackground_I87_204_16_13: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I87_204_16_9: {
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
  ImageBackground_I87_204_16_9_11_26: {
    flexGrow: 1,
    width: wp("4.640418497721354%"),
    height: hp("3.0434781464858394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833329%"),
    top: hp("0.5217362022114003%")
  },
  View_I87_204_16_28: {
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
  ImageBackground_I87_204_16_28_11_66: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    height: hp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.1499250374812533%")
  },
  ImageBackground_I87_204_16_0: {
    width: wp("7.733333333333333%"),
    height: hp("4.3478260869565215%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%")
  },
  View_I87_204_15_27: {
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
  ImageBackground_I87_204_15_27_11_34: {
    flexGrow: 1,
    width: wp("4.987294514973958%"),
    height: hp("3.0434781464858394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833258%"),
    top: hp("0.5217362022114003%")
  },
  View_87_1061: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97.0014992503748%"),
    minHeight: hp("97.0014992503748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.998500749625187%")
  },
  View_87_355: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97.0014992503748%"),
    minHeight: hp("97.0014992503748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I87_355_73_181: {
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
  TouchableOpacity_I87_355_73_153: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("8.770615264572305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("87.25637181409294%")
  },
  View_I87_355_73_219: {
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
  View_I87_355_73_219_73_156: {
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
  View_I87_355_73_219_73_158: {
    flexGrow: 1,
    width: wp("87.20000813802083%"),
    top: hp("2.6311917283545796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.2666666666666675%"),
    justifyContent: "flex-start"
  },
  Text_I87_355_73_219_73_158: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I87_355_73_160: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("25.78669237768811%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("60.26986506746627%")
  },
  View_I87_355_73_220: {
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
  View_I87_355_73_220_73_162: {
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
  View_I87_355_73_220_73_163: {
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_I87_355_73_220_73_164: {
    flexGrow: 1,
    width: wp("95.77164713541667%"),
    height: hp("0.07123418118821448%"),
    minHeight: hp("0.07123418118821448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000016276041666873908%"),
    top: hp("8.548069715142425%"),
    backgroundColor: "rgba(56, 56, 58, 1)"
  },
  View_I87_355_73_220_73_165: {
    flexGrow: 1,
    width: wp("87.66276041666666%"),
    top: hp("2.5644282351011967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.054451497395833%"),
    justifyContent: "flex-start"
  },
  Text_I87_355_73_220_73_165: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 15.005218505859375,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3610991835594177,
    textTransform: "none"
  },
  View_I87_355_73_220_73_170: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00002441406249964473%"),
    top: hp("8.619298749062956%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_355_73_220_73_171: {
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_I87_355_73_220_73_172: {
    flexGrow: 1,
    width: wp("95.77164713541667%"),
    height: hp("0.07123418118821448%"),
    minHeight: hp("0.07123418118821448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00002441406249964473%"),
    top: hp("8.548069715142447%"),
    backgroundColor: "rgba(56, 56, 58, 1)"
  },
  View_I87_355_73_220_73_173: {
    flexGrow: 1,
    width: wp("87.66276041666666%"),
    top: hp("2.5644282351012038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.054451497395833%"),
    justifyContent: "flex-start"
  },
  Text_I87_355_73_220_73_173: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 15.005218505859375,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3610991835594177,
    textTransform: "none"
  },
  View_I87_355_73_220_73_174: {
    flexGrow: 1,
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.00002441406249964473%"),
    top: hp("17.238634100918297%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I87_355_73_220_73_175: {
    width: wp("95.73333333333333%"),
    height: hp("8.548074290491472%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_I87_355_73_220_73_176: {
    flexGrow: 1,
    width: wp("95.77164713541667%"),
    height: hp("0.07123418118821448%"),
    minHeight: hp("0.07123418118821448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00002441406249964473%"),
    top: hp("8.548069715142418%"),
    backgroundColor: "rgba(56, 56, 58, 1)"
  },
  View_I87_355_73_220_73_177: {
    flexGrow: 1,
    width: wp("87.66276041666666%"),
    top: hp("2.5644282351011896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.054451497395833%"),
    justifyContent: "flex-start"
  },
  Text_I87_355_73_220_73_177: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 15.005218505859375,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3610991835594177,
    textTransform: "none"
  },
  View_87_377: {
    width: wp("95.73333333333333%"),
    minWidth: wp("95.73333333333333%"),
    height: hp("6.5967016491754125%"),
    minHeight: hp("6.5967016491754125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("53.67316341829086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_87_378: {
    width: wp("95.73333333333333%"),
    height: hp("6.5967016491754125%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(37, 37, 37, 0.6000000238418579)"
  },
  View_87_379: {
    flexGrow: 1,
    width: wp("95.77164713541667%"),
    height: hp("0.07123418118821448%"),
    minHeight: hp("0.07123418118821448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00003255208333330373%"),
    top: hp("6.583341629966263%"),
    backgroundColor: "rgba(56, 56, 58, 1)"
  },
  View_87_380: {
    flexGrow: 1,
    width: wp("87.66276041666666%"),
    top: hp("1.9790031741941476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.054451497395833%"),
    justifyContent: "flex-start"
  },
  Text_87_380: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3610991835594177,
    textTransform: "none"
  },
  View_87_196: {
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
  View_I87_196_14_15: {
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
  View_I87_196_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.39880059970015%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4497751124437781%"),
    justifyContent: "flex-start"
  },
  Text_I87_196_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I87_196_14_17: {
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
  View_I87_196_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.7241379310344827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.22488755622188905%")
  },
  ImageBackground_I87_196_14_19: {
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
  ImageBackground_I87_196_14_22: {
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
  ImageBackground_I87_196_14_23: {
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
  View_I87_196_14_24: {
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
  Text_I87_196_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I87_196_14_25: {
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
  View_I87_196_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.368815609361457%"),
    top: hp("0.37481259370314846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I87_196_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.3118440779610194%"),
    top: hp("0.05695394490254868%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I87_196_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.3286727722259476%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I87_196_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.32983676961873065%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.10135091145834%")
  },
  View_I87_196_14_32: {
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
  ImageBackground_I87_196_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.7632011173368396%"),
    top: hp("0.16786040573463268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I87_196_14_37: {
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
  View_I87_196_14_38: {
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
  ImageBackground_I87_196_14_39: {
    width: wp("0.8%"),
    height: hp("1.4992503748125936%"),
    top: hp("0.2998500749625187%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I87_196_14_40: {
    width: wp("3.2%"),
    height: hp("1.199400299850075%"),
    top: hp("0.5997001499250376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I87_196_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I87_196_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I87_196_14_45: {
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
  ImageBackground_I87_196_14_46: {
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
