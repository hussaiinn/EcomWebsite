import React from "react";
import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import CategoriesWise from "@/components/categoriesWise";

const categories = ({products}) => {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        {/* <ProductsGrid products={products} /> */}
        <CategoriesWise products={products}/>
      </Center>
    </>
  );
};

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { _id: -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}

export default categories;
