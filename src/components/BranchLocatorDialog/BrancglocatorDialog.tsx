import styled from 'styled-components';
import BaseDialog from '../BaseDialog/BaseDialog';
import DirectionButton from '../Buttons/DirectionButton';

interface LocationDetail {
  description: String;
  title: String;
  contact: String;
  renderPath: Function;
}
const BrancglocatorDialog = ({
  description,
  title,
  contact,
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
      />
    </SBranchDialoogWarpper>
  );
};
export default BrancglocatorDialog;

const SBranchDialoogWarpper = styled.div``;
