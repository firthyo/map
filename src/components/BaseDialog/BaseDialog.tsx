import DialogBg from '../../images/DialogBg.png';
import styled from 'styled-components';

interface DialogInterface {
  title: String;
  description: String;
  contact: String;
  css?: any;
  button?: any;
  matrix: any;
  image?: any;
}

const BaseDialog = (dialogContent: DialogInterface) => {
  return (
    <SPopup style={dialogContent.css}>
      <img
        style={{ width: '380px' }}
        src={DialogBg}
        alt="organization"
      />
      <STextWarpper>
        <STitle>{dialogContent.title}</STitle>
        <STextContent>
          <SDetail>{dialogContent.description}</SDetail>
          <SContact>{dialogContent.contact}</SContact>
          {dialogContent.matrix && (
            <>
              <SContact>
                Distance : {dialogContent?.matrix?.distance?.text}
              </SContact>
              <SContact>
                Duration : {dialogContent?.matrix?.duration?.text}
              </SContact>
            </>
          )}

          <SImageWarpper>
            {dialogContent.image
              ? dialogContent.image.map((img: any, i: number) => {
                  // renderImg(img);
                  return (
                    <SImage key={i}>
                      <img
                        style={{ width: '70px', height: '80px' }}
                        src={img}
                        alt="kkk"
                      />
                    </SImage>
                  );
                })
              : null}
          </SImageWarpper>
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
  width: 380px;
  height: fit-content;
  z-index: 5;
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
  max-width: 380px;
  max-height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const SContact = styled.div`
  margin: 10px 0px;
`;
const SImageWarpper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 5px;
  width: fit-content;
`;
const SImage = styled.div`
  margin: 0px 5px;
  width: fit-content;
`;
const SButtonWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;
