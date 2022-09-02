import { Button, Cluster, FaCloudDownloadAltIcon, FaSearchIcon, FilterDropdown, Input, Pagination } from 'smarthr-ui'
import styled, { css } from 'styled-components'
import { PageCounter } from './PageCounter'

type Props = {
  searchValue: string
  pagination: { totalPages: number; currentPage: number; totalCount: number; limitValue: number }
}

export const TemporaryOperationArea: React.FC<Props> = (props) => {
  const {
    searchValue,
    pagination: { totalPages, currentPage, totalCount, limitValue },
  } = props

  return (
    <HeaderCluster justify="space-between" align="center">
      <form role="search" onSubmit={(e) => e.preventDefault()}>
        <Cluster align="center" gap={1}>
          <Cluster gap={0.5}>
            <label>
              <Input
                prefix={<FaSearchIcon size={14} alt="検索" color="TEXT_GREY" />}
                placeholder="オブジェクト名"
                value={searchValue}
              />
            </label>
            <Button variant="secondary" type="submit">
              検索
            </Button>
          </Cluster>
          <FilterDropdown onApply={() => null}>絞り込みの中身</FilterDropdown>
          <Button variant="secondary" type="submit" prefix={<FaCloudDownloadAltIcon />}>
            ダウンロード
          </Button>
        </Cluster>
      </form>
      {totalCount > 0 && (
        <Cluster gap={1} align="center">
          <PageCounter start={1 + (currentPage - 1) * limitValue} end={currentPage * limitValue} total={totalCount} />
          <Pagination current={currentPage} total={totalPages} withoutNumbers onClick={() => null} />
        </Cluster>
      )}
    </HeaderCluster>
  )
}

const HeaderCluster = styled(Cluster)`
  ${({ theme: { space } }) => css`
    padding: ${space(1)};
  `}
`
