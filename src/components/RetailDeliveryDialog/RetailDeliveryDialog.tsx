import styled from 'styled-components';
import BaseDialog from '../BaseDialog/BaseDialog';
import DirectionButton from '../Buttons/DirectionButton';

interface LocationDetail {
  description: String;
  title: String;
  contact: String;
  css?: any;
  renderPath?: Function;
  matrix: any;
  isRetail?: boolean;
  retailData?: any;
}
const RetailDeliveryDialog = ({
  description,
  title,
  contact,
  css,
  renderPath,
  matrix,
  isRetail,
  retailData,
}: LocationDetail) => {
  const renderButton = (
    <DirectionButton
      ButtonText={'Direction'}
      renderPath={renderPath}
    />
  );
  return (
    <SBranchDialoogWarpper>
      <BaseDialog
        description={description}
        title={title}
        contact={contact}
        button={renderButton}
        matrix={matrix}
        css={css}
        isRetail={isRetail}
        retailData={retailData}
      />
    </SBranchDialoogWarpper>
  );
};
export default RetailDeliveryDialog;

const SBranchDialoogWarpper = styled.div``;
