import DialogBg from '../../images/DialogBg.png';
import styled from 'styled-components';

interface DialogInterface {
  title: String;
  description: String;
  contact: String;
  button?: any;
}

const BaseDialog = (dialogContent: DialogInterface) => {
  return (
    <SPopup>
      <img src={DialogBg} alt="organization" />
      <STextWarpper>
        <STitle>{dialogContent.title}</STitle>
        <STextContent>
          <SDetail>{dialogContent.description}</SDetail>
          <SContact>{dialogContent.contact}</SContact>
          <SButtonWrapper>
            {dialogContent.button ?? null}
          </SButtonWrapper>
        </STextContent>
      </STextWarpper>
    </SPopup>
  );
};
export default BaseDialog;

const SPopup = styled.div`
  margin: 20px;
  color: #000000;
  position: absolute;
  font-size: 40px;
  width: 450px;
  height: fit-content;
  z-index: 999;
  background: #ffffff;
  border-radius: 18px 18px 18px 18px;
`;

const STextContent = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  margin: 15px 0px;
  color: #828282;
`;

const STitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  max-width: 300px;
  max-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const STextWarpper = styled.div`
  margin: 25px;
`;
const SDetail = styled.div`
  max-width: 400px;
  max-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SContact = styled.div`
  margin: 10px 0px;
`;
const SButtonWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
