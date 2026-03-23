import React from "react";
import Images from "./Images";
import productImg from "/src/assets/productImg.png";
import Container from "./Container";

const Products = () => {
  return (
    <>
      <div className="">
        <Container>
          <Images className={"mb-10"} imgSrc={productImg} />
        </Container>
      </div>
    </>
  );
};

export default Products;
