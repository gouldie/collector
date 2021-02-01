import { Select as BumbagSelect, applyTheme } from 'bumbag'

const CustomSelect = applyTheme(BumbagSelect, {
  styles: {
    base: {
      // fontSize: '0.875rem',
      // height: '2.4rem'
    }
  }
})

export default function Select ({ sort, setSort, options, style = {} }) {
  return (
    <CustomSelect
      size='small'
      value={sort}
      onChange={e => setSort(e.target.value)}
      options={options}
      style={{ minWidth: '140px', ...style }}
      // placeholder='Sort by'
    />
  )
}
