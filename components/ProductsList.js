import { FlatList } from "react-native";

import ProductCard from "./ProductCard";

import { products } from "../products";

const ProductsList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(products) => products.id}
      renderItem={({ item }) => <ProductCard {...item} />}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  );
};

export default ProductsList;
