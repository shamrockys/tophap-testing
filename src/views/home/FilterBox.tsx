import React from 'react'
import { Box, TextField, Stack, Button } from '@mui/material'
import { MdSearch } from 'react-icons/md'
import { debounce } from 'lodash'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { PropertyFilterState } from 'redux/types'
import { initialState } from 'redux/slice/propertyFilterSlice'
import { actions as filterActions } from 'redux/slice/propertyFilterSlice'
import { actions as listActions } from 'redux/slice/propertyListSlice'
import AdornmentWrap from './AdornmentWrap'

const FilterBox: React.FC = () => {

  const dispatch = useAppDispatch()
  const propertyFilterState = useAppSelector(state => state.propertyFilter)

  const [filter, setFilter] = React.useState<PropertyFilterState>(initialState)

  React.useEffect(() => {
    setFilter(propertyFilterState)
  }, [])

  const handleReset = () => {
    setFilter(initialState)
    dispatch(filterActions.reset())
    handleFilterApply(initialState)
  }

  const handleFilterChange = (key: string, value: string | number) => {
    const newFilter = { ...filter, [key]: value }
    setFilter(newFilter)
    dispatch(filterActions.update(newFilter))
    handleFilterApplyDebounce(newFilter)
  }

  const handleFilterApply = (filter: PropertyFilterState) => {
    let searchParams = new URLSearchParams()
    searchParams.set('address', filter.address)
    searchParams.set('bedsMin', filter.bedsMin ? filter.bedsMin.toString() : '')
    searchParams.set('bedsMax', filter.bedsMax ? filter.bedsMax.toString() : '')
    searchParams.set('bathsMin', filter.bathsMin ? filter.bathsMin.toString() : '')
    searchParams.set('bathsMax', filter.bathsMax ? filter.bathsMax.toString() : '')
    dispatch(listActions.filterPropertyList(searchParams.toString()))
  }

  const handleFilterApplyDebounce = React.useCallback(debounce(handleFilterApply, 300), [])

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange('address', e.target.value)
  }

  const handleChangeBedsMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange('bedsMin', parseInt(e.target.value))
  }

  const handleChangeBedsdMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange('bedsMax', parseInt(e.target.value))
  }

  const handleChangeBathsMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange('bathsMin', parseInt(e.target.value))
  }

  const handleChangeBathsMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFilterChange('bathsMax', parseInt(e.target.value))
  }

  return (
    <Stack spacing={2}>
      <Box>Address</Box>
      <TextField
        placeholder="address"
        InputProps={{ startAdornment: <AdornmentWrap><MdSearch /></AdornmentWrap>, }}
        value={filter.address || ''}
        onChange={handleChangeAddress}
      />
      <Box>Beds</Box>
      <TextField
        size="small"
        InputProps={{ startAdornment: <AdornmentWrap>MIN</AdornmentWrap> }}
        value={filter.bedsMin || ''}
        onChange={handleChangeBedsMin}
      />
      <TextField
        size="small"
        InputProps={{ startAdornment: <AdornmentWrap>MAX</AdornmentWrap> }}
        value={filter.bedsMax || ''}
        onChange={handleChangeBedsdMax}
      />
      <Box>Baths</Box>
      <TextField
        size="small"
        InputProps={{ startAdornment: <AdornmentWrap>MIN</AdornmentWrap> }}
        value={filter.bathsMin || ''}
        onChange={handleChangeBathsMin}
      />
      <TextField
        size="small"
        InputProps={{ startAdornment: <AdornmentWrap>MAX</AdornmentWrap> }}
        value={filter.bathsMax || ''}
        onChange={handleChangeBathsMax}
      />
      <Button size="small" variant="outlined" color="inherit" onClick={handleReset}>
        Reset
      </Button>
    </Stack>
  )
}

export default FilterBox