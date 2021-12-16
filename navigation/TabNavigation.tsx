import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../constants/theme'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

const SIZE = 30

const Box = ({icon, label} : {icon: any,label: string})=>{
    return (
        <TouchableOpacity
            style={{
                borderRadius: 50,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 7,
                backgroundColor: COLORS.lightBlue
            }}
        >
            {icon}
            <Text
                style={{
                    ...FONTS.body5,
                    color: COLORS.white,
                    marginLeft: 2,
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    )
}


const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarStyle:{
                    flexDirection: 'row',
                    borderTopRightRadius: SIZES.radius,
                    borderTopLeftRadius: SIZES.radius,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    position: 'absolute',
                    height: 80,
                    width: SIZES.width,
                    right: 0,
                    bottom: 0
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.white,
                tabBarInactiveTintColor: COLORS.lightBlue,

              }}
           
        >
             <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused,color})=>{
                        if(focused){
                            return (
                                <Box 
                                    label='Home'
                                    icon={
                                        <Entypo name="home" size={SIZE} color={color} />
                                    }
                                />
                            )
                        } else {
                            return (
                                <Entypo name="home" size={SIZE} color={color} />
                            )
                        }
                    }
                }}
            />
            <Tab.Screen 
                name='Courses'
                component={Home}
                options={{
                    tabBarIcon: ({focused,color})=>{
                        if(focused){
                            return (
                                <Box 
                                    label='Cursos'
                                    icon={
                                        <Entypo name="open-book"  size={SIZE} color={color}  />
                                    }
                                />
                            )
                        } else {
                            return (
                                <Entypo name="open-book"  size={SIZE} color={color}  />
                            )
                        }
                    }
                }}
            />
            <Tab.Screen 
                name='Notifications'
                component={Home}
                options={{
                    tabBarIcon: ({focused,color})=>{
                        if(focused){
                            return (
                                <Box 
                                    label='Notificação'
                                    icon={
                                        <Feather name="bell" size={SIZE} color={color}  />
                                    }
                                />
                            )
                        } else {
                            return (
                                <Feather name="bell" size={SIZE} color={color}  />
                            )
                        }
                    }
                }}
            />
            <Tab.Screen 
                name='User'
                component={Home}
                options={{
                    tabBarIcon: ({focused,color})=>{
                        if(focused){
                            return (
                                <Box 
                                    label='Usuário'
                                    icon={
                                        <AntDesign name="user" size={SIZE} color={color} />
                                    }
                                />
                            )
                        } else {
                            return (
                                <AntDesign name="user" size={SIZE} color={color} />
                            )
                        }
                    }
                }}
            />
           
        </Tab.Navigator>
    )
}

export default TabNavigation
