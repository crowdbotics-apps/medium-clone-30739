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
      <View style={styles.View_95_1800}>
        <View style={styles.View_I95_1800_95_1797}>
          <View style={styles.View_I95_1800_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I95_1800_94_1539}
            />
            <View style={styles.View_I95_1800_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a93/97db/df3673e50aa2f56b5957cb93d4336822"
                }}
                style={styles.ImageBackground_I95_1800_94_1543_94_1534}
              />
              <View style={styles.View_I95_1800_94_1543_94_1535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e7/9406/f57291fe8d8636606a7c745fb62cd855"
                  }}
                  style={styles.ImageBackground_I95_1800_94_1543_94_1535_4_7}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I95_1800_95_1794}>
            <View style={styles.View_I95_1800_94_1548}>
              <Text style={styles.Text_I95_1800_94_1548}>
                Someone clapped for Medium App Clone #1
              </Text>
            </View>
            <View style={styles.View_I95_1800_94_1550}>
              <Text style={styles.Text_I95_1800_94_1550}>1 day ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I95_1800_94_1580} />
      </View>
      <View style={styles.View_95_2389}>
        <View style={styles.View_I95_2389_95_1797}>
          <View style={styles.View_I95_2389_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I95_2389_94_1539}
            />
            <View style={styles.View_I95_2389_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a93/97db/df3673e50aa2f56b5957cb93d4336822"
                }}
                style={styles.ImageBackground_I95_2389_94_1543_94_1534}
              />
              <View style={styles.View_I95_2389_94_1543_94_1535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e7/9406/f57291fe8d8636606a7c745fb62cd855"
                  }}
                  style={styles.ImageBackground_I95_2389_94_1543_94_1535_4_7}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I95_2389_95_1794}>
            <View style={styles.View_I95_2389_94_1548}>
              <Text style={styles.Text_I95_2389_94_1548}>
                Someone clapped for Apple’s Fluid Interface Design
              </Text>
            </View>
            <View style={styles.View_I95_2389_94_1550}>
              <Text style={styles.Text_I95_2389_94_1550}>6 days ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I95_2389_94_1580} />
      </View>
      <View style={styles.View_186_56}>
        <View style={styles.View_I186_56_95_1797}>
          <View style={styles.View_I186_56_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I186_56_94_1539}
            />
            <View style={styles.View_I186_56_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a93/97db/df3673e50aa2f56b5957cb93d4336822"
                }}
                style={styles.ImageBackground_I186_56_94_1543_94_1534}
              />
              <View style={styles.View_I186_56_94_1543_94_1535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3e7/9406/f57291fe8d8636606a7c745fb62cd855"
                  }}
                  style={styles.ImageBackground_I186_56_94_1543_94_1535_4_7}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I186_56_95_1794}>
            <View style={styles.View_I186_56_94_1548}>
              <Text style={styles.Text_I186_56_94_1548}>
                Someone clapped for Splash Screen is More Important Than You
                Think
              </Text>
            </View>
            <View style={styles.View_I186_56_94_1550}>
              <Text style={styles.Text_I186_56_94_1550}>24 Sep</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I186_56_94_1580} />
      </View>
      <View style={styles.View_95_2350}>
        <View style={styles.View_I95_2350_95_1797}>
          <View style={styles.View_I95_2350_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I95_2350_94_1539}
            />
            <View style={styles.View_I95_2350_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdd9/dad0/cc6cb3c0db167b14746b53ce0240f29c"
                }}
                style={styles.ImageBackground_I95_2350_94_1543_94_1534}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a149/9d5b/773f0847254acd2db986e5c182cb81e3"
                }}
                style={styles.ImageBackground_I95_2350_94_1543_94_1535}
              />
            </View>
          </View>
          <View style={styles.View_I95_2350_95_1794}>
            <View style={styles.View_I95_2350_94_1548}>
              <Text style={styles.Text_I95_2350_94_1548}>
                Someone responded to Apple’s Fluid Interface Design
              </Text>
            </View>
            <View style={styles.View_I95_2350_94_1550}>
              <Text style={styles.Text_I95_2350_94_1550}>2 days ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I95_2350_94_1580} />
      </View>
      <View style={styles.View_95_2368}>
        <View style={styles.View_I95_2368_95_1797}>
          <View style={styles.View_I95_2368_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I95_2368_94_1539}
            />
            <View style={styles.View_I95_2368_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff8f/a45a/7140622373595bb597948c54bd473d02"
                }}
                style={styles.ImageBackground_I95_2368_94_1543_94_1534}
              />
              <View style={styles.View_I95_2368_94_1543_94_1535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e537/75ef/7d2f637406d008f2e2086555e9749bf3"
                  }}
                  style={styles.ImageBackground_I95_2368_94_1543_94_1535_17_55}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I95_2368_95_1794}>
            <View style={styles.View_I95_2368_94_1548}>
              <Text style={styles.Text_I95_2368_94_1548}>
                Someone highlighted Apple’s Fluid Interface Design
              </Text>
            </View>
            <View style={styles.View_I95_2368_94_1550}>
              <Text style={styles.Text_I95_2368_94_1550}>4 days ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I95_2368_94_1580} />
      </View>
      <View style={styles.View_186_92}>
        <View style={styles.View_I186_92_95_1797}>
          <View style={styles.View_I186_92_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I186_92_94_1539}
            />
            <View style={styles.View_I186_92_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ff8f/a45a/7140622373595bb597948c54bd473d02"
                }}
                style={styles.ImageBackground_I186_92_94_1543_94_1534}
              />
              <View style={styles.View_I186_92_94_1543_94_1535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e537/75ef/7d2f637406d008f2e2086555e9749bf3"
                  }}
                  style={styles.ImageBackground_I186_92_94_1543_94_1535_17_55}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I186_92_95_1794}>
            <View style={styles.View_I186_92_94_1548}>
              <Text style={styles.Text_I186_92_94_1548}>
                Someone highlighted Comparing iOS UI and Custom UI Design
              </Text>
            </View>
            <View style={styles.View_I186_92_94_1550}>
              <Text style={styles.Text_I186_92_94_1550}>22 Sep</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I186_92_94_1580} />
      </View>
      <View style={styles.View_95_1818}>
        <View style={styles.View_I95_1818_95_1797}>
          <View style={styles.View_I95_1818_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I95_1818_94_1539}
            />
            <View style={styles.View_I95_1818_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/789e/8d74/e7efcb02773b1b9af34a40761c5f45ec"
                }}
                style={styles.ImageBackground_I95_1818_94_1543_94_1534}
              />
              <View style={styles.View_I95_1818_94_1543_94_1535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43b2/ca8b/147f2ec584a5f8457d834eb534b98102"
                  }}
                  style={styles.ImageBackground_I95_1818_94_1543_94_1535_11_34}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I95_1818_95_1794}>
            <View style={styles.View_I95_1818_94_1548}>
              <Text style={styles.Text_I95_1818_94_1548}>
                Someone followed you
              </Text>
            </View>
            <View style={styles.View_I95_1818_94_1550}>
              <Text style={styles.Text_I95_1818_94_1550}>1 day ago</Text>
            </View>
          </View>
          <View style={styles.View_I95_1818_94_1571}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43ef/7ec3/4b89a185bd9892145ca1183d995370d2"
              }}
              style={styles.ImageBackground_I95_1818_94_1571_94_1567}
            />
          </View>
        </View>
        <View style={styles.View_I95_1818_94_1580} />
      </View>
      <View style={styles.View_95_2404}>
        <View style={styles.View_I95_2404_95_1797}>
          <View style={styles.View_I95_2404_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I95_2404_94_1539}
            />
            <View style={styles.View_I95_2404_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a93/97db/df3673e50aa2f56b5957cb93d4336822"
                }}
                style={styles.ImageBackground_I95_2404_94_1543_94_1534}
              />
              <View style={styles.View_I95_2404_94_1543_94_1535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43b2/ca8b/147f2ec584a5f8457d834eb534b98102"
                  }}
                  style={styles.ImageBackground_I95_2404_94_1543_94_1535_11_34}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I95_2404_95_1794}>
            <View style={styles.View_I95_2404_94_1548}>
              <Text style={styles.Text_I95_2404_94_1548}>
                Someone followed you
              </Text>
            </View>
            <View style={styles.View_I95_2404_94_1550}>
              <Text style={styles.Text_I95_2404_94_1550}>6 days ago</Text>
            </View>
          </View>
          <View style={styles.View_I95_2404_94_1571}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43ef/7ec3/4b89a185bd9892145ca1183d995370d2"
              }}
              style={styles.ImageBackground_I95_2404_94_1571_94_1567}
            />
          </View>
        </View>
        <View style={styles.View_I95_2404_94_1580} />
      </View>
      <View style={styles.View_186_71}>
        <View style={styles.View_I186_71_95_1797}>
          <View style={styles.View_I186_71_94_1576}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6e7/035b/b6185db1645643b1fcd4e446ca5b2375"
              }}
              style={styles.ImageBackground_I186_71_94_1539}
            />
            <View style={styles.View_I186_71_94_1543}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a93/97db/df3673e50aa2f56b5957cb93d4336822"
                }}
                style={styles.ImageBackground_I186_71_94_1543_94_1534}
              />
              <View style={styles.View_I186_71_94_1543_94_1535}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43b2/ca8b/147f2ec584a5f8457d834eb534b98102"
                  }}
                  style={styles.ImageBackground_I186_71_94_1543_94_1535_11_34}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I186_71_95_1794}>
            <View style={styles.View_I186_71_94_1548}>
              <Text style={styles.Text_I186_71_94_1548}>
                Someone followed you
              </Text>
            </View>
            <View style={styles.View_I186_71_94_1550}>
              <Text style={styles.Text_I186_71_94_1550}>23 Sep</Text>
            </View>
          </View>
          <View style={styles.View_I186_71_94_1571}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43ef/7ec3/4b89a185bd9892145ca1183d995370d2"
              }}
              style={styles.ImageBackground_I186_71_94_1571_94_1567}
            />
          </View>
        </View>
        <View style={styles.View_I186_71_94_1580} />
      </View>
      <View style={styles.View_95_2422}>
        <View style={styles.View_I95_2422_15_22} />
        <View style={styles.View_I95_2422_38_0}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d6d2/cfe0/10cb6e75a29e1b2279800b6924a3afbd"
            }}
            style={styles.TouchableOpacity_I95_2422_16_13}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("1_2"))
            }
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I95_2422_16_9}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("33_278"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc99/5de4/a56b1dcb70324075bc0f39d3c6e1d595"
              }}
              style={styles.ImageBackground_I95_2422_16_9_11_26}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_I95_2422_16_28}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("90_3"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64e3/1056/34e4e2f714a9040df8f699a2e0515802"
              }}
              style={styles.ImageBackground_I95_2422_16_28_11_66}
            />
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0909/ab50/daf097bd09fc3f01f4161b04ddf83ce3"
            }}
            style={styles.ImageBackground_I95_2422_16_0}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/136f/f6fc/057e86097f65889a58e47936f81510db"
            }}
            style={styles.ImageBackground_I95_2422_132_1620}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_I95_2422_15_27}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("33_164"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c889/3201/2132baa97641495f58ef2ad3292025bd"
              }}
              style={styles.ImageBackground_I95_2422_15_27_11_34}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.View_94_1631}>
        <View style={styles.View_I94_1631_23_27}>
          <Text style={styles.Text_I94_1631_23_27}>Activity</Text>
        </View>
        <View style={styles.View_I94_1631_23_26} />
      </View>
      <View style={styles.View_94_1589}>
        <View style={styles.View_I94_1589_14_15}>
          <View style={styles.View_I94_1589_14_16}>
            <Text style={styles.Text_I94_1589_14_16}>9:41 AM</Text>
          </View>
          <View style={styles.View_I94_1589_14_17}>
            <View style={styles.View_I94_1589_14_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a1/3408/3b0c0296ccd84a1d138bb3ee6bdb6dbe"
                }}
                style={styles.ImageBackground_I94_1589_14_19}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/302c/6583/b34897b498d1984256dfff6ff8e11eff"
                }}
                style={styles.ImageBackground_I94_1589_14_22}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I94_1589_14_23}
              />
            </View>
            <View style={styles.View_I94_1589_14_24}>
              <Text style={styles.Text_I94_1589_14_24}>100%</Text>
            </View>
            <View style={styles.View_I94_1589_14_25}>
              <View style={styles.View_I94_1589_14_26}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2191/dc02/5fd629bb6d0db5ab555204d411e66355"
                  }}
                  style={styles.ImageBackground_I94_1589_14_27}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44d/96b9/36c776a0dfb2008548aef612a1352c7e"
                  }}
                  style={styles.ImageBackground_I94_1589_14_30}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/55c9/a6bf/9d35ad219b9fcb38f817383b4a89e477"
                  }}
                  style={styles.ImageBackground_I94_1589_14_31}
                />
              </View>
            </View>
            <View style={styles.View_I94_1589_14_32}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a8c3/25af/3e57917fb09697ef0f78fbad1e341c20"
                }}
                style={styles.ImageBackground_I94_1589_14_33}
              />
            </View>
          </View>
          <View style={styles.View_I94_1589_14_37}>
            <View style={styles.View_I94_1589_14_38}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc4/b3f5/7dc3d29066d931adb161e357c5267bc6"
                }}
                style={styles.ImageBackground_I94_1589_14_39}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52e0/30f9/5dae0cac4491b7d5220165b483ccb6c4"
                }}
                style={styles.ImageBackground_I94_1589_14_40}
              />
            </View>
            <View style={styles.View_I94_1589_14_44}>
              <Text style={styles.Text_I94_1589_14_44}>Figma</Text>
            </View>
            <View style={styles.View_I94_1589_14_45}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd86/8c8e/a03cb81d4e35311d64fc72f488169d1a"
                }}
                style={styles.ImageBackground_I94_1589_14_46}
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
  View_2: { height: hp("149.86338797814207%") },
  View_95_1800: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765028%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I95_1800_95_1797: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_1800_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.4590163934426226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I95_1800_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I95_1800_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.1857923497267766%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I95_1800_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I95_1800_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I95_1800_94_1543_94_1535_4_7: {
    flexGrow: 1,
    width: wp("2.9121424357096357%"),
    height: hp("1.6249181142921656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11764322916666714%"),
    top: hp("0%")
  },
  View_I95_1800_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.4590163934426226%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_1800_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I95_1800_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I95_1800_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759563%"),
    justifyContent: "flex-start"
  },
  Text_I95_1800_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I95_1800_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.163934426229506%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_95_2389: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66.53005464480874%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I95_2389_95_1797: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_2389_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I95_2389_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I95_2389_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I95_2389_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I95_2389_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.546448087431699%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I95_2389_94_1543_94_1535_4_7: {
    flexGrow: 1,
    width: wp("2.9121424357096357%"),
    height: hp("1.6249181142921656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11764322916666714%"),
    top: hp("0%")
  },
  View_I95_2389_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_2389_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I95_2389_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I95_2389_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    justifyContent: "flex-start"
  },
  Text_I95_2389_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I95_2389_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.163934426229517%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_186_56: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("93.5792349726776%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I186_56_95_1797: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_56_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I186_56_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I186_56_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I186_56_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I186_56_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I186_56_94_1543_94_1535_4_7: {
    flexGrow: 1,
    width: wp("2.9121424357096357%"),
    height: hp("1.6249181142921656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.11764322916666714%"),
    top: hp("0%")
  },
  View_I186_56_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_56_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I186_56_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I186_56_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.47540983606558%"),
    justifyContent: "flex-start"
  },
  Text_I186_56_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I186_56_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.715846994535525%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_95_2350: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.92896174863388%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I95_2350_95_1797: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_2350_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.4590163934426172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I95_2350_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I95_2350_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I95_2350_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I95_2350_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.5464480874316919%")
  },
  View_I95_2350_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.4590163934426172%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_2350_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I95_2350_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I95_2350_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759565%"),
    justifyContent: "flex-start"
  },
  Text_I95_2350_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I95_2350_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.16393442622951%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_95_2368: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.229508196721305%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I95_2368_95_1797: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_2368_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.4590163934426315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I95_2368_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I95_2368_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I95_2368_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I95_2368_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I95_2368_94_1543_94_1535_17_55: {
    flexGrow: 1,
    width: wp("3.197997283935547%"),
    height: hp("0.9609948741933686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.28264509524153425%")
  },
  View_I95_2368_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.4590163934426315%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_2368_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I95_2368_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I95_2368_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.923497267759558%"),
    justifyContent: "flex-start"
  },
  Text_I95_2368_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I95_2368_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.16393442622951%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_186_92: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("124.18032786885247%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I186_92_95_1797: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("18.71584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_92_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I186_92_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I186_92_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.1857923497267677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I186_92_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I186_92_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.5464480874317132%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I186_92_94_1543_94_1535_17_55: {
    flexGrow: 1,
    width: wp("3.197997283935547%"),
    height: hp("0.9609948741933686%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.28264613750852163%")
  },
  View_I186_92_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.45901639344261%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_92_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I186_92_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I186_92_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.475409836065552%"),
    justifyContent: "flex-start"
  },
  Text_I186_92_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I186_92_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.71584699453551%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_95_1818: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.18032786885246%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I95_1818_95_1797: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_1818_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I95_1818_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I95_1818_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I95_1818_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I95_1818_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I95_1818_94_1543_94_1535_11_34: {
    flexGrow: 1,
    width: wp("2.0637082417805988%"),
    height: hp("1.1475409314932068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5120117187499993%"),
    top: hp("0.19671851819981967%")
  },
  View_I95_1818_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_1818_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I95_1818_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I95_1818_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453553%"),
    justifyContent: "flex-start"
  },
  Text_I95_1818_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I95_1818_94_1571: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.39999999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I95_1818_94_1571_94_1567: {
    flexGrow: 1,
    width: wp("8.513572184244792%"),
    height: hp("4.361303777642589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0042968750000085265%"),
    top: hp("0.004760033445929679%")
  },
  View_I95_1818_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.612021857923501%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_95_2404: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.83060109289617%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I95_2404_95_1797: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_2404_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I95_2404_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I95_2404_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I95_2404_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I95_2404_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I95_2404_94_1543_94_1535_11_34: {
    flexGrow: 1,
    width: wp("2.0637082417805988%"),
    height: hp("1.1475409314932068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5120117187499993%"),
    top: hp("0.19672164500086353%")
  },
  View_I95_2404_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I95_2404_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I95_2404_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I95_2404_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    justifyContent: "flex-start"
  },
  Text_I95_2404_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I95_2404_94_1571: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.39999999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I95_2404_94_1571_94_1567: {
    flexGrow: 1,
    width: wp("8.513572184244792%"),
    height: hp("4.361303777642589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0042968750000085265%"),
    top: hp("0.004761075712949037%")
  },
  View_I95_2404_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.612021857923509%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_186_71: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("112.43169398907105%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  View_I186_71_95_1797: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.612021857923498%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_71_94_1576: {
    width: wp("12.266666666666666%"),
    height: hp("4.918032786885246%"),
    top: hp("2.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.066666666666667%")
  },
  ImageBackground_I186_71_94_1539: {
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I186_71_94_1543: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.9333333333333345%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I186_71_94_1543_94_1534: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I186_71_94_1543_94_1535: {
    flexGrow: 1,
    width: wp("3.2%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666647%"),
    top: hp("0.5464480874316848%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I186_71_94_1543_94_1535_11_34: {
    flexGrow: 1,
    width: wp("2.0637082417805988%"),
    height: hp("1.1475409314932068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5120117187499993%"),
    top: hp("0.1967133068647513%")
  },
  View_I186_71_95_1794: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2.45901639344261%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I186_71_94_1548: {
    width: wp("52.53333333333333%"),
    minWidth: wp("52.53333333333333%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I186_71_94_1548: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_I186_71_94_1550: {
    width: wp("59.73333333333334%"),
    minWidth: wp("59.73333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453564%"),
    justifyContent: "flex-start"
  },
  Text_I186_71_94_1550: {
    color: "rgba(169, 169, 169, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.14,
    textTransform: "none"
  },
  View_I186_71_94_1571: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("2.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.39999999999999%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I186_71_94_1571_94_1567: {
    flexGrow: 1,
    width: wp("8.513572184244792%"),
    height: hp("4.361303777642589%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0042968750000085265%"),
    top: hp("0.004761075712949037%")
  },
  View_I186_71_94_1580: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.612021857923494%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  View_95_2422: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("143.0327868852459%"),
    backgroundColor: "rgba(38, 38, 38, 1)",
    overflow: "hidden"
  },
  View_I95_2422_15_22: {
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
  View_I95_2422_38_0: {
    flexGrow: 1,
    width: wp("88.8%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("1.297814207650248%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_I95_2422_16_13: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I95_2422_16_9: {
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
  ImageBackground_I95_2422_16_9_11_26: {
    flexGrow: 1,
    width: wp("4.640418497721354%"),
    height: hp("2.773223939489146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833329%"),
    top: hp("0.47541550599814286%")
  },
  TouchableOpacity_I95_2422_16_28: {
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
  ImageBackground_I95_2422_16_28_11_66: {
    flexGrow: 1,
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7999999999999972%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_I95_2422_16_0: {
    width: wp("7.733333333333333%"),
    height: hp("3.9617486338797816%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.800000000000004%")
  },
  ImageBackground_I95_2422_132_1620: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.4%"),
    top: hp("0.06830601092897837%")
  },
  TouchableOpacity_I95_2422_15_27: {
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
  ImageBackground_I95_2422_15_27_11_34: {
    flexGrow: 1,
    width: wp("4.987294514973958%"),
    height: hp("2.773223939489146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2373372395833258%"),
    top: hp("0.47541550599814286%")
  },
  View_94_1631: {
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
  View_I94_1631_23_27: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.6%"),
    top: hp("1.2295081967213117%"),
    justifyContent: "flex-start"
  },
  Text_I94_1631_23_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_I94_1631_23_26: {
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
  View_94_1589: {
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
  View_I94_1589_14_15: {
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
  View_I94_1589_14_16: {
    width: wp("13.066666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("0.4098360655737705%"),
    justifyContent: "flex-start"
  },
  Text_I94_1589_14_16: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I94_1589_14_17: {
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
  View_I94_1589_14_18: {
    width: wp("7.066666666666667%"),
    minWidth: wp("7.066666666666667%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666663%"),
    top: hp("0.20491803278688525%")
  },
  ImageBackground_I94_1589_14_19: {
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
  ImageBackground_I94_1589_14_22: {
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
  ImageBackground_I94_1589_14_23: {
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
  View_I94_1589_14_24: {
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
  Text_I94_1589_14_24: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I94_1589_14_25: {
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
  View_I94_1589_14_26: {
    width: wp("2.666666666666667%"),
    height: hp("1.2472677751968466%"),
    top: hp("0.3415300546448087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%")
  },
  ImageBackground_I94_1589_14_27: {
    width: wp("2.3333333333333335%"),
    height: hp("1.1953551912568305%"),
    top: hp("0.051913235356898846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16533203125000284%")
  },
  ImageBackground_I94_1589_14_30: {
    width: wp("0.563995361328125%"),
    height: hp("0.2994873484627145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I94_1589_14_31: {
    width: wp("0.5653223037719727%"),
    height: hp("0.3005479854312751%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.101334635416677%")
  },
  View_I94_1589_14_32: {
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
  ImageBackground_I94_1589_14_33: {
    width: wp("1.8532292683919271%"),
    height: hp("1.6066327121088413%"),
    top: hp("0.15296727581753755%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8116536458333314%")
  },
  View_I94_1589_14_37: {
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
  View_I94_1589_14_38: {
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
  ImageBackground_I94_1589_14_39: {
    width: wp("0.8%"),
    height: hp("1.366120218579235%"),
    top: hp("0.27322404371584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.133333333333334%")
  },
  ImageBackground_I94_1589_14_40: {
    width: wp("3.2%"),
    height: hp("1.092896174863388%"),
    top: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333334%")
  },
  View_I94_1589_14_44: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I94_1589_14_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.05000000074505806,
    textTransform: "none"
  },
  View_I94_1589_14_45: {
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
  ImageBackground_I94_1589_14_46: {
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
