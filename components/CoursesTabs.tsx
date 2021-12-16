import { Entypo, FontAwesome5, Fontisto, } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES } from '../constants/theme'

type tab = {
    active: boolean,
    handleClick: Function,
    title: string,
    color: string,
    icon:  any ,
    _id: string
}

const TABS = [
    {
        _id: '1',
        title: 'Todos',
        color: COLORS.lightBlue,
        icon: <Fontisto name="fire" />,
        active: false
    },
    {
        _id: '2',
        title: 'Popular',
        color: COLORS.orange,
        icon: <Entypo name="picasa"  />,
        active: false
    },
    {
        _id: '3',
        title: 'Novo',
        color: COLORS.purple,
        icon: <FontAwesome5 name="star" />,
        active: false
    },
    {
        _id: '4',
        title: 'Favorito',
        color: COLORS.green,
        icon: <Fontisto name="favorite" size={24} color="black" />,
        active: false
    },
]


const Tab = (props: tab)=>{
    
    return (
        <TouchableOpacity
            style={{
                width: 150,
                height: 60,
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                backgroundColor: props.active ? props.color : COLORS.white,
                borderRadius: SIZES.padding,
                marginBottom: 10,
                paddingHorizontal: 5
            }}
            onPress={()=>props.handleClick()}
        >   
            <View 
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: props.active ? COLORS.white : props.color,
                    justifyContent: 'center',
                    alignItems: 'center',
                   
                }}
            >
                    {props.icon}
            </View>
            <Text
                style={{
                    ...FONTS.body4,
                    color: props.active ? COLORS.white : COLORS.black,
                    marginLeft: 10
                }}
            >
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const CoursesTabs = () => {
    const [selected, setSelected ] = React.useState('1');

    const handleClick = (id: string)=>{
        setSelected(id);
    }
    
    return (
        <View
            style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
             <Tab 
                active={selected === TABS[0]._id}
                handleClick={()=>handleClick(TABS[0]._id)}
                color={TABS[0].color}
                title={TABS[0].title}
                icon={<Fontisto name="fire" size={24} color={selected === TABS[0]._id ? TABS[0].color : COLORS.white} />}
                _id={TABS[0]._id}
                />
                <Tab 
                active={selected === TABS[1]._id}
                handleClick={()=>handleClick(TABS[1]._id)}
                color={TABS[1].color}
                title={TABS[1].title}
                icon={<Entypo name="picasa" size={24} color={selected === TABS[1]._id ? TABS[1].color : COLORS.white} />}
                _id={TABS[1]._id}
                />
                <Tab 
                active={selected === TABS[2]._id}
                handleClick={()=>handleClick(TABS[2]._id)}
                color={TABS[2].color}
                title={TABS[2].title}
                icon={<FontAwesome5 name="star" size={24} color={selected === TABS[2]._id ? TABS[2].color : COLORS.white} />}
                _id={TABS[2]._id}
                />
                <Tab 
                active={selected === TABS[3]._id}
                handleClick={()=>handleClick(TABS[3]._id)}
                color={TABS[3].color}
                title={TABS[3].title}
                icon={<Fontisto name="favorite" size={24} color={selected === TABS[3]._id ? TABS[3].color : COLORS.white} />}
                _id={TABS[3]._id}
                />
        </View>
    )
}

export default CoursesTabs