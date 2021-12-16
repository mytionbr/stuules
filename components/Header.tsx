import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { images } from '../constants'
import { COLORS, FONTS, SIZES } from '../constants/theme'

const Header = () => {
    return (
        <View
            style={{
              height: 110,
              width: SIZES.width,
              backgroundColor: COLORS.white,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.padding,
              paddingTop: SIZES.padding     
            }}
          >
            <View>
              <Text style={{ ...FONTS.h2, color: COLORS.gray }}>Olá,</Text>
              <View style={{ flexDirection: "row", alignItems:"center" }}>
                <Text style={{ ...FONTS.h1, color: COLORS.black, marginRight: 10 }}>Luiz</Text>
                <FontAwesome
                  name="hand-peace-o"
                  size={30}
                  color={COLORS.orange}
                />
              </View>
            </View>

            <TouchableOpacity>
              <Image
                source={images.manFace}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </TouchableOpacity>
          </View>
    )
}

export default Header
