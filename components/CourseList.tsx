import { FontAwesome, Ionicons } from '@expo/vector-icons'
import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { images } from '../constants'
import { COLORS, FONTS, SIZES } from '../constants/theme'

type course = {
    id: string;
    name: string;
    teacher: string;
    files: number;
    time: string;
    color: string;
    img: any;
}

const courses : course[] = [
    {
        id: '1',
        name: 'Digital Design Thinking',
        teacher: 'Julho',
        files: 14,
        time: '50',
        color: COLORS.lightBlue,
        img: images.typing,
    },
    {
        id: '2',
        name: 'Marketing Digital e SEO',
        teacher: 'Fernanda',
        files: 14,
        time: '200',
        color: COLORS.orange,
        img: images.search,
    },
    {
        id: '3',
        name: 'Desenvolvimento web',
        teacher: 'Henrique',
        files: 14,
        time: '120',
        color: COLORS.purple,
        img: images.thinking,
    },
    {
        id: '4',
        name: 'Animação 3D',
        teacher: 'Henrique',
        files: 12,
        time: '150',
        color: COLORS.green,
        img: images.explore,
    },
    
]

const IconBox = ({icon} : {icon:any})=>{
    return (
        <View style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.white,
            marginRight: 5
        }}>
            {icon}
        </View>
    )
}

const CourseList = () => {
    function renderCourses (course: course, index: number){
        return (
            <TouchableOpacity
                style={{
                    height: 270,
                    width: 200,
                    borderRadius: SIZES.radius,
                    backgroundColor: course.color,
                    marginRight: SIZES.padding,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal:SIZES.radius,
                    paddingBottom: SIZES.radius
                }}
            >
                <Image 
                    source={course.img}
                    resizeMode='contain'
                    style={{
                        height: 180,
                        width: 180                      
                    }}
                />
                <Text style={{
                    ...FONTS.h3,
                    color: COLORS.white,
                }}>
                    {course.name}
                </Text>
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.white
                }}>
                    Criado por {course.teacher[0].toUpperCase() + course.teacher.slice(1, course.teacher.length )}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width:"100%"
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            
                        }}
                    >
                      <IconBox 
                        icon={
                            <FontAwesome name="files-o" size={15} color={COLORS.orange} />
                        }
                      />
                      <Text style={{
                          ...FONTS.h5,
                          color: COLORS.white
                      }}>
                          {course.files} Arquivos
                      </Text>
                      </View>
                      <View
                         style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            
                        }}
                      >
                        <IconBox 
                            icon={
                                <Ionicons name="md-time-sharp" size={15} color={COLORS.lightBlue} />
                            }
                        />
                         <Text style={{
                          ...FONTS.h5,
                          color: COLORS.white
                      }}>
                          {course.time} min
                      </Text>
                      </View>
                      
                    
                </View>
            </TouchableOpacity>
        )
    }
    
    return (
        <View style={{
            height: 270, marginTop: SIZES.base
        }}>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={courses}
                keyExtractor={(item)=> item.id.toString()}
                renderItem={({item, index}) => renderCourses(item,index)}
            />
        </View>
    )
}

export default CourseList