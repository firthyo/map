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
}
const BrancglocatorDialog = ({
  description,
  title,
  contact,
  css,
  renderPath,
  matrix,
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
      />
    </SBranchDialoogWarpper>
  );
};
export default BrancglocatorDialog;

const SBranchDialoogWarpper = styled.div``;
