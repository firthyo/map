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
  image?: any;
}
const BranchlocatorDialog = ({
  description,
  title,
  contact,
  css,
  renderPath,
  matrix,
  image,
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
        image={image}
      />
    </SBranchDialoogWarpper>
  );
};
export default BranchlocatorDialog;

const SBranchDialoogWarpper = styled.div``;
