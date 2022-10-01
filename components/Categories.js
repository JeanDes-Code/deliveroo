import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing01"
      />

      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing02"
      />

      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing03"
      />

      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing03"
      />

      <CategoryCard
        imgUrl="https://links.papareact.com/gn7"
        title="Testing03"
      />
    </ScrollView>
  );
};

export default Categories;
