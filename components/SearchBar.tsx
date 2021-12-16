import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View,TextInput } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants/theme'

const SearchBar = () => {
    return (
        <View
            style={{
                width: 230,
                height: 60,
                backgroundColor: COLORS.white,
                opacity: 0.6,
                padding: SIZES.base,
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: SIZES.radius
            }}
        >
            <TextInput 
                placeholder='Buscar'
                style={{
                    backgroundColor: 'transparent',
                    ...FONTS.body3,
                    flex: 1
                }} />
            <Ionicons name="search" size={24} color={COLORS.black} />
        </View>
    )
}

export default SearchBar