import {
    View as RNView,
    Text as RNText,
    TouchableOpacity as RNTouchableOpacity,
    Image as RNImage
} from 'react-native';
import React from 'react';

import { styled } from 'nativewind';

const View = styled(RNView);
const Text = styled(RNText);
const Image = styled(RNImage);
const TouchableOpacity = styled(RNTouchableOpacity);

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className='relative mr-2'>
            <Image className="w-20 h-20 rounded"
                source={{ uri: imgUrl }} />
            <Text
                className='absolute bottom-1 left-1 text-white font-bold'>
                {title}</Text>
        </TouchableOpacity >
    )
}

export default CategoryCard