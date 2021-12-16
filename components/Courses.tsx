import React from 'react'
import { Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import CourseList from './CourseList'
import CoursesTabs from './CoursesTabs'

const Courses = () => {
    return (
        <View
            style={{paddingVertical: SIZES.padding}}
        >
            <Text
                style={{
                    ...FONTS.h2,
                    color:COLORS.black,
                    marginBottom: SIZES.radius
                }}
            >
                Cursos
            </Text>
            <CoursesTabs />
            <CourseList />
        </View>
    )
}


export default Courses
