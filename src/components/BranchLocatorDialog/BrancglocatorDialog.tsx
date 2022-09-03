import styled from 'styled-components';
import BaseDialog from '../BaseDialog/BaseDialog';

const BrancglocatorDialog = () => {
  return (
    <SBranchDialoogWarpper>
      <BaseDialog
        description={'Shoes shop'}
        title={'Shopping name'}
        contact={'+66 888 4848'}
      />
    </SBranchDialoogWarpper>
  );
};
export default BrancglocatorDialog;

const SBranchDialoogWarpper = styled.div``;
