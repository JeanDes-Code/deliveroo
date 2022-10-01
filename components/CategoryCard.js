import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 bg-gray-100 p-4 rounded-sm"
      />
      <Text className="text-white absolute bottom-1 left-1 font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
