import styled from 'styled-components';
import BaseDialog from '../BaseDialog/BaseDialog';
import DirectionButton from '../Buttons/DirectionButton';

interface LocationDetail {
  description: String;
  title: String;
  contact: String;
}
const BrancglocatorDialog = (location: LocationDetail) => {
  const renderButton = <DirectionButton ButtonText={'Direction'} />;
  return (
    <SBranchDialoogWarpper>
      <BaseDialog
        description={location.description}
        title={location.title}
        contact={location.contact}
        button={renderButton}
      />
    </SBranchDialoogWarpper>
  );
};
export default BrancglocatorDialog;

const SBranchDialoogWarpper = styled.div``;
