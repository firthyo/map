import styled from 'styled-components';
import Direction from '../../asset/icons/Direction.png';
interface ButtonInterface {
  ButtonText: String;
  renderPath: Function;
}

const DirectionButton = ({
  ButtonText,
  renderPath,
}: ButtonInterface) => {
  return (
    <SButtonWrapper onClick={() => renderPath()}>
      <SContentWarpper>
        <SImgWarpper>
          <img src={Direction} alt="organization" />
        </SImgWarpper>
        <STextWarpper>{ButtonText}</STextWarpper>
      </SContentWarpper>
    </SButtonWrapper>
  );
};
export default DirectionButton;

const SButtonWrapper = styled.div`
  background-color: #404040;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-radius: 14px;
  margin: auto;
`;
const STextWarpper = styled.div`
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  /* margin: auto; */
`;
const SImgWarpper = styled.div`
  text-align: center;
  padding-top: 2px;
  margin-right: 5px;
  /* margin: auto; */
`;

const SContentWarpper = styled.div`
  margin: auto;
  width: fit-content;
  display: flex;
  flex-direction: row;
`;
