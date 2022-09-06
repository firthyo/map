import styled from 'styled-components';
import BaseDialog from '../BaseDialog/BaseDialog';
import DirectionButton from '../Buttons/DirectionButton';

interface LocationDetail {
  description: String;
  title: String;
  contact: String;
  css?: any;
  renderPath?: Function;
}
const BrancglocatorDialog = ({
  description,
  title,
  contact,
  css,
  renderPath,
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
        css={css}
      />
    </SBranchDialoogWarpper>
  );
};
export default BrancglocatorDialog;

const SBranchDialoogWarpper = styled.div``;
