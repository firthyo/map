import styled from 'styled-components';
interface IProductDialog {
  productSelected: any;
  selectedPoint?: any;
}
const ProductDialog = ({
  productSelected,
  selectedPoint,
}: IProductDialog) => {
  return (
    <SContainer>
      <SInfo>
        <SImg src={productSelected.image} />
        <SDetail>
          <div className="name">{productSelected.name}</div>
        </SDetail>
      </SInfo>
    </SContainer>
  );
};
export default ProductDialog;
const SInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
const SDetail = styled.div`
  & > div {
    line-height: 24px;
    &.price {
      font-weight: bolder;
      font-size: 20px;
    }
    &.out {
      color: red;
    }
    &.stock {
      color: green;
    }
  }
`;
const SImg = styled.img`
  height: 100px;
  margin-right: 40px;
`;
const SContainer = styled.div`
  position: absolute;
  z-index: 10;
  margin: 75px 20px;
  width: 380px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 18px;
`;
