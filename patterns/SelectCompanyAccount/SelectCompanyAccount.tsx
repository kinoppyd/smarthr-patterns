import { useState } from 'react'
import { Base, Button, Heading, RadioButton, Stack } from 'smarthr-ui'
import styled, { css } from 'styled-components'

const companyList = [...Array(4).fill(0)].map((_, id) => {
  return { id, name: `株式会社スマートエイチアール${id}` }
})

export const SelectCompanyAccount = () => {
  const [selectedId, setSelectedId] = useState<number>(0)

  return (
    <Wrapper>
      <Heading type="sectionTitle">&#x7B;機能名&#x7D;を利用する企業アカウントを選択してください。</Heading>
      <CompanyList>
        {companyList.map(({ id, name }) => (
          <CompanyItem onClick={() => setSelectedId(id)} key={id}>
            <RadioButton name="companyAccount" checked={id === selectedId}>
              {name}
            </RadioButton>
          </CompanyItem>
        ))}
      </CompanyList>
      <div>
        <SubmitButton>次へ</SubmitButton>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(Stack).attrs({ gap: 1.5 })`
  ${({ theme: { space } }) => css`
    margin-inline: auto;
    padding: ${space(3)} ${space(1.5)};
    max-width: 40em;
  `}
`

const CompanyList = styled(Stack).attrs({ as: 'ul' })``

const CompanyItem = styled(Base).attrs({ forwardedAs: 'li' })`
  ${({ theme: { leading, shadow, space } }) => css`
    cursor: pointer;
    padding: ${space(1)};
    line-height: ${leading.NONE};

    :focus-within {
      ${shadow.focusIndicatorStyles}
    }

    .smarthr-ui-RadioButton-radioButton:focus + span {
      box-shadow: revert;
    }

    .smarthr-ui-RadioButton-label {
      /* 視覚的な調整 */
      margin-inline-start: ${space(0.75)};
    }
  `}
`

const SubmitButton = styled(Button).attrs({ variant: 'primary' })`
  padding-inline: 3em;
`
