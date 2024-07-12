import Center from "@/components/Center";
import styled from "styled-components";
import Button from "@/components/Button";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { redirect } from "next/dist/server/api-utils";
// import featuredImage from  "@/public/featuredImage";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order: 2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img {
      max-width: 100%;
    }
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function goToCart() {
    // addProduct(product._id);
    // res.redirect('/cart')
    window.location.href = "/cart";
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
<<<<<<< HEAD
              <Title>Patheria Medical</Title>
=======
              <Title>Bombay Hardware</Title>
>>>>>>> a259a12dfa7a42a3cb2551d8dd5f28de8972f876
              <Desc>Alote, Madhya Pradesh</Desc>
              <ButtonsWrapper>
                <ButtonLink
                  href={
                    "https://www.google.com/search?sca_esv=c2efddc75740eaea&sca_upv=1&sxsrf=ACQVn09wYtQYKsqT901SBSTvUlQhDcJ3Cw%3A1712186046511&q=BOMBAY%20HARDWARE%20STORES&ludocid=8366703044778124068&lsig=AB86z5UXuhikok0yAramBuadQ2Xw&kgs=bca767474fbc1d78&shndl=30&shem=lnole%2Clsp&source=sh%2Fx%2Floc%2Fact%2Fm1%2F2"
                  }
                  outline={1}
                  white={1}
                >
                  Location
                </ButtonLink>
                <Button white onClick={goToCart}>
                  <CartIcon />
                  Go to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="/../public/eugen-str-CrhsIRY3JWY-unsplash-removebg-preview.png"
              alt=""
            />
          </Column>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
