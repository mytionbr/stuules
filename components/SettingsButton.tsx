import { Octicons } from '@expo/vector-icons'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../constants/theme'

const SettingsButton = () => {
    return (
        <TouchableOpacity
            style={{
                width: 60,
                height: 60,
                backgroundColor: COLORS.lightBlue,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Octicons name="settings" size={30} color={COLORS.white} />
        </TouchableOpacity>
    )
}

export default SettingsButton
