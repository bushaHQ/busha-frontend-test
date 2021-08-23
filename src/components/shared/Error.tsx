import styled from "styled-components";

interface Props {
  error: string;
}
export default function Error(props: Props) {
  const { error } = props;

  return (
    <ErrorContainer>
      <p>{error}</p>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div``;
