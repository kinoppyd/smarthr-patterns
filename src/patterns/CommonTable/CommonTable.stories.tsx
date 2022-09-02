import { Story } from '@storybook/react'
import { ComponentProps } from 'react'

import { CommonTable } from './CommonTable'

const Template: Story<ComponentProps<typeof CommonTable>> = (props) => (
  <div style={{ padding: '32px' }}>
    <CommonTable {...props} />
  </div>
)

export const Default = Template.bind({})
Default.storyName = '基本'
Default.args = {
  title: 'よくあるテーブルのタイトル',
  description:
    'よくあるテーブルの説明テキストです。よくあるテーブルの説明テキストです。よくあるテーブルの説明テキストです。よくあるテーブルの説明テキストです。よくあるテーブルの説明テキストです。',
  pagination: {
    currentPage: 1,
    limitValue: 25,
    totalCount: 100,
    totalPages: 4,
  },
  searchValue: '',
}

export const InitialState = Template.bind({})
InitialState.storyName = '初期状態'
InitialState.args = {
  ...Default.args,
  pagination: {
    currentPage: 0,
    limitValue: 0,
    totalCount: 0,
    totalPages: 0,
  },
  searchValue: '',
}

export const NoSearchResult = Template.bind({})
NoSearchResult.storyName = '検索結果なし'
NoSearchResult.args = {
  ...Default.args,
  pagination: {
    currentPage: 0,
    limitValue: 0,
    totalCount: 0,
    totalPages: 0,
  },
  searchValue: 'あああ',
}

export const LessThanOnePage = Template.bind({})
LessThanOnePage.storyName = '1ページ未満'
LessThanOnePage.args = {
  ...Default.args,
  pagination: {
    currentPage: 1,
    limitValue: 3,
    totalCount: 3,
    totalPages: 1,
  },
  searchValue: 'あああ',
}

export const NoDescription = Template.bind({})
NoDescription.storyName = 'テーブルの説明なし'
NoDescription.args = {
  ...Default.args,
  description: '',
}

export default {
  title: 'よくあるテーブル',
}
