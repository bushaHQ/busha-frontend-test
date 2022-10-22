import styled from 'styled-components'
import { colors, weights, sizes } from '../../styles/common'
import { ReactComponent as Logo } from '../../assets/svgs/Logo.svg'
import { FlexWrapper } from '../../components/ui/Wrapper'
import { Text } from '../../components/ui/Text'

const TopNavContainer = styled(FlexWrapper)`
  justify-content: space-between;
  background-color: ${colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  min-height: 5.6rem;
  padding: 1.6rem 16rem;

  .initials {
    background: rgba(154, 165, 177, 0.3);
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
  }
`

const TopNav = () => {
  const username: String = 'Oluwatobi Akindunjoye'
  return (
    <TopNavContainer>
      <figure>
        <Logo />
      </figure>
      <FlexWrapper alignItems="center">
        <FlexWrapper
          className="mr-2 initials"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontWeight={weights.medium}
            fontSize={sizes.sm}
            lineHeight={sizes.sm}
            color={colors.grey60}
          >
            {username.charAt(0)}
          </Text>
        </FlexWrapper>
        <Text
          fontWeight={weights.medium}
          fontSize={sizes.sm}
          lineHeight={sizes.sm}
          color={colors.grey60}
        >
          {username}
        </Text>
      </FlexWrapper>
    </TopNavContainer>
  )
}

export default TopNav
