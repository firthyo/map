import styled from 'styled-components';
import BaseDialog from '../BaseDialog/BaseDialog';
import DirectionButton from '../Buttons/DirectionButton';

const BrancglocatorDialog = () => {
  const renderButton = <DirectionButton ButtonText={'Direction'} />;
  return (
    <SBranchDialoogWarpper>
      <BaseDialog
        description={'Shoes shop'}
        title={'Shopping name'}
        contact={'+66 888 4848'}
        button={renderButton}
      />
    </SBranchDialoogWarpper>
  );
};
export default BrancglocatorDialog;

const SBranchDialoogWarpper = styled.div``;
