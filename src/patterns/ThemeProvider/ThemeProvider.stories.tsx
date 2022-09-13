import { Story } from '@storybook/react'
import { ReactElement } from 'react'
import styled, { css } from 'styled-components'
import { action } from '@storybook/addon-actions'
import {
  AppNavi,
  Button,
  CheckBox,
  Cluster,
  FloatArea,
  Heading,
  Input,
  RadioButton,
  Stack,
  TabBar,
  TabItem,
  Text,
  createTheme,
  Base as shrBase,
  Header as shrHeader,
} from 'smarthr-ui'

import { Theme } from './Theme'

type StoryProps = {
  logo?: ReactElement
  MAIN?: string
  BRAND?: string
  TEXT_BLACK?: string
}

const Template: Story<StoryProps> = ({ logo, BRAND, MAIN, TEXT_BLACK }) => {
  const theme = createTheme({
    color: {
      BRAND,
      MAIN,
      TEXT_BLACK,
    },
  })
  return (
    <Theme theme={theme}>
      <Header logo={logo} />
      <AppNavi label="スマパタ" buttons={[{ children: 'ダッシュボード', current: true }, { children: '設定' }]}></AppNavi>
      <Container>
        <Stack>
          <Heading tag="h1">ThemeProvider の利用例</Heading>
          <p>
            人事評価機能を管理者として利用するアカウントに権限を付与します。詳しくは、人事評価機能の権限を管理するを参照してください。
          </p>
        </Stack>

        <TabBar>
          <TabItem id="tab1" onClick={action('clicked Tab1')} selected>
            基本
          </TabItem>
          <TabItem id="tab2" onClick={action('clicked Tab1')}>
            家族
          </TabItem>
        </TabBar>

        <Stack>
          <Heading type="sectionTitle" tag="h2">
            SmartHR管理者以外の方
          </Heading>
          <Base>
            <Stack gap={2}>
              <LabelGroup>
                <Heading type="blockTitle" tag="h3">
                  評価テンプレート名
                </Heading>
                <Input />
              </LabelGroup>
              <FieldsetGroup>
                <Legend>添付書類</Legend>
                <CheckBox defaultChecked>デフォルトの色を復元</CheckBox>
              </FieldsetGroup>
              <FieldsetGroup>
                <Legend>公文書の有無</Legend>
                <Cluster>
                  <RadioButton defaultChecked name="sample-radio">
                    あり
                  </RadioButton>
                  <RadioButton name="sample-radio">なし</RadioButton>
                </Cluster>
              </FieldsetGroup>
              {/* Buttonのstretch防止用div */}
            </Stack>
          </Base>
        </Stack>

        <FloatArea
          primaryButton={<Button variant="primary">保存</Button>}
          secondaryButton={<Button>元に戻す</Button>}
          bottom={24}
        />
      </Container>
    </Theme>
  )
}

const Header = styled(shrHeader)`
  .smarthr-ui-Header-logo {
    display: flex;
  }
`

const Container = styled(Stack).attrs({ gap: 1.5 })`
  ${({ theme: { space } }) => css`
    margin-inline: auto;
    padding: ${space(2)} ${space(1.5)};
    max-width: 80em;
  `}
`

const Base = styled(shrBase)`
  ${({ theme: { space } }) => css`
    padding: ${space(1.5)};
  `}
`

const LabelGroup = styled(Stack).attrs({ as: 'label', gap: 0.5 })`
  cursor: pointer;
`

const FieldsetGroup = styled(Stack).attrs({ as: 'fieldset', gap: 0.5 })`
  border: unset;
  margin: unset;
  padding: unset;
`

const Legend = styled(Text).attrs({ forwardedAs: 'legend', weight: 'bold', leading: 'TIGHT' })``

export const Default = Template.bind({})
Default.storyName = 'SmartHR'

export const Nstock = Template.bind({})
Nstock.args = {
  MAIN: 'hsl(220, 33%, 1%)',
  BRAND: 'hsl(220, 33%, 1%)',
  TEXT_BLACK: 'hsl(220, 25%, 8%)',
  logo: (
    <svg width="144" height="40" fill="white" aria-label="Nstock">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.997 8.533c4.049-.004 8.048-.181 12-.533v12.103l-24-3.658V8c3.952.36 7.952.537 12 .533Zm32.913 2.464v11.308l-7.177-11.308h-3.87v17.64h3.873V17.695l7.175 10.942h3.865v-17.64H56.91Zm69.123 10.03 5.777 7.61h-4.744l-4.641-6.418v6.418h-3.882V11.583h3.871v8.598l4.356-5.916h4.415l-5.152 6.762Zm-38.637 4.172a7.77 7.77 0 0 0 2.732 2.774 7.064 7.064 0 0 0 7.346 0 7.774 7.774 0 0 0 2.732-2.774 7.374 7.374 0 0 0 0-7.496 7.784 7.784 0 0 0-2.733-2.776 7.064 7.064 0 0 0-7.345 0 7.775 7.775 0 0 0-2.732 2.776 7.37 7.37 0 0 0 0 7.496Zm9.963-3.748c0 1.045-.356 2.06-1.01 2.875a3.443 3.443 0 0 1-5.096 0 4.594 4.594 0 0 1 0-5.75 3.445 3.445 0 0 1 5.096 0 4.594 4.594 0 0 1 1.01 2.875Zm-33.248 5.171a4.967 4.967 0 0 0 2.09 1.747c.98.439 2.044.655 3.117.634 1.821 0 3.234-.424 4.24-1.273a4.166 4.166 0 0 0 1.523-3.349 3.573 3.573 0 0 0-.712-2.296 4.553 4.553 0 0 0-1.674-1.326 20.472 20.472 0 0 0-2.478-.887 11.09 11.09 0 0 1-2.063-.776 1.073 1.073 0 0 1-.639-.971 1.003 1.003 0 0 1 .427-.838c.371-.24.81-.353 1.25-.323 1.139 0 1.775.558 1.91 1.674h3.822a5.113 5.113 0 0 0-.837-2.408 4.854 4.854 0 0 0-1.978-1.705 6.567 6.567 0 0 0-2.92-.623 7.286 7.286 0 0 0-2.988.559 4.363 4.363 0 0 0-1.906 1.551 3.936 3.936 0 0 0-.656 2.233 3.447 3.447 0 0 0 .684 2.213 4.552 4.552 0 0 0 1.638 1.311c.788.359 1.602.66 2.433.902.738.205 1.454.486 2.135.837a1.213 1.213 0 0 1 .68 1.1 1.145 1.145 0 0 1-.496.943 2.277 2.277 0 0 1-1.395.38 2.409 2.409 0 0 1-1.552-.492 1.768 1.768 0 0 1-.667-1.312h-3.787c.029.89.306 1.754.799 2.495Zm20.59-1.33c-.222.074-.454.109-.687.102a1.81 1.81 0 0 1-1.993-2.028v-5.69h2.68v-3.41h-2.68v-2.683h-3.87v2.682h-1.493v3.41h1.492v6.087c0 1.615.456 2.892 1.368 3.831a4.691 4.691 0 0 0 3.528 1.41 8.754 8.754 0 0 0 1.654-.176v-3.536Zm27.929-1.15c.209-.278.381-.582.51-.905l3.433 1.31c-.219.51-.491.995-.812 1.447a7.202 7.202 0 0 1-2.42 2.172 6.555 6.555 0 0 1-3.273.837 6.991 6.991 0 0 1-3.673-1.013 7.776 7.776 0 0 1-2.732-2.774 7.375 7.375 0 0 1 0-7.496 7.786 7.786 0 0 1 2.732-2.777 6.991 6.991 0 0 1 3.673-1.03 6.585 6.585 0 0 1 3.273.838 7.227 7.227 0 0 1 2.42 2.17c.319.455.591.94.812 1.45l-3.438 1.32a4.006 4.006 0 0 0-.505-.91 3.364 3.364 0 0 0-1.024-.916 2.933 2.933 0 0 0-1.538-.393 3.277 3.277 0 0 0-2.548 1.116 4.594 4.594 0 0 0 0 5.749 3.276 3.276 0 0 0 2.548 1.116 2.91 2.91 0 0 0 1.538-.396c.401-.23.75-.542 1.024-.915ZM12 32c3.951-.354 7.951-.531 12-.533 4.048-.002 8.048.176 12 .533v-8.459l-24-3.655V32Z"
      />
    </svg>
  ),
}

export const AirVisa = Template.bind({})
AirVisa.args = {
  BRAND: '#ff2501',
  MAIN: '#1376a0',
  logo: (
    <svg width="139" height="40" fill="white" aria-label="AIRVISA">
      <path d="M23.151 10.745c-.39.09-.784.16-1.185.213l-1.39 3.768.553 1.504 2.022-5.485ZM23.346 22.243l5.255-14.24c-.48.408-.989.78-1.52 1.115l-4.29 11.626.555 1.499Z" />
      <path d="m18.637 19.974-.273.738.555 1.503.272-.738.555-1.503.272-.738.01-.027.273-.738.272.738.01.027.274.738-.272.738.554 1.503.273-.738.701-1.904 1.98-5.366 1.6-4.34c-.424.199-.86.374-1.303.525l-2.709 7.34-.087.237-.185.502-.272-.738-.01-.027-.27-.738-.556-1.501-.272-.738-1.392-3.768a12.82 12.82 0 0 1-1.187-.214l2.023 5.485.273.738-.272.737-.01.027-.273.738-.272-.738-2.708-7.34c-.443-.152-.878-.327-1.303-.526l3.457 9.368.272.738Z" />
      <path d="m23.072 22.98-.553-1.503-.271-.737-.01-.028-.557 1.503.01.028.272.738-.272.737-.01.028-.272.738-.272-.738-.01-.028-.27-.737-.556-1.504-.273-.737-.554 1.503.272.738-.243.658-.03.08v.004l-.008.023-.272.738-.272-.738-.01-.028-.273-.737-.556-1.504-.272-.737-4.29-11.627A13.182 13.182 0 0 1 12 8l5.255 14.24.272.738-.272.738-.283.765.555 1.503.283-.765.272-.738.272.738.01.027.272.738-.008.022-.264.716-.282.765.504 1.367.051.136.283-.765.257-.7.455-1.23.114-.311.057-.154.215-.586.01-.026.273-.74.272.738.01.028.274.743-.273.738.555 1.503.273-.738.554-1.503.272-.738.01-.027.273-.738.272.738.279.765.555-1.503-.282-.766-.273-.737Z" />
      <path d="m21.682 28.228.282.766.555-1.504-.282-.765-.555 1.503ZM20.855 28.994l-.554-1.504-.272-.737-.01-.028-.556 1.503.01.028.273.738-.272.737-.283.765.555 1.504.283-.765.272-.738.272.738.282.765.555-1.503-.283-.765-.272-.738ZM115.513 28.157h-2.653l7.022-15.618 7.021 15.618h-2.715l-1.265-2.958h-6.164l-1.246 2.958Zm2.147-5.05h4.367l-2.184-5.115-2.183 5.115ZM104.487 28.41c-1.693 0-3.388-.59-4.695-1.415l.877-2.367c1.185.824 2.613 1.333 3.9 1.333 1.694 0 2.47-.866 2.47-1.817 0-.993-.531-1.585-3.123-2.578-2.797-1.056-3.757-2.43-3.757-4.206 0-2.24 1.756-4.31 4.818-4.31 1.531 0 3.042.464 3.96 1.013l-.816 2.326c-.838-.486-2.103-.994-3.206-.994-1.51 0-2.204.867-2.204 1.902 0 .951.773 1.543 2.797 2.303 3.204 1.29 4.121 2.6 4.121 4.543.002 2.64-1.938 4.267-5.142 4.267ZM92.643 13.302h2.53v14.855h-2.53V13.302ZM81.772 23.446l5.547-12.763h2.67l-7.813 17.665-.409.969-8.261-18.634h2.746l5.52 12.763ZM61.893 13.302h4.592c3.817 0 5.737 2.177 5.737 5.282 0 2.05-.817 3.678-2.613 4.544l3.673 5.029h-2.96l-3.04-4.374c-.429.043-.859.064-1.289.063h-1.57v4.31h-2.53V13.303Zm2.53 2.41v5.811h1.879c2.368 0 3.184-1.31 3.184-2.933 0-1.623-.796-2.878-3.184-2.878h-1.878ZM54.37 13.302h2.53v14.855h-2.53V13.302ZM39.254 28.157h-2.653l7.024-15.618 7.019 15.618H47.93l-1.266-2.958H40.5l-1.245 2.958Zm2.147-5.05h4.368l-2.187-5.115-2.181 5.115Z" />
    </svg>
  ),
}
AirVisa.storyName = 'AIRVISA'

export default {
  title: 'テーマ',
  argTypes: {
    BRAND: {
      control: 'color',
    },
    MAIN: {
      control: 'color',
    },
    TEXT_BLACK: {
      control: 'color',
    },
  },
}
