import React from 'react'
import { Box, TextField, Stack, Button } from '@mui/material'
import { MdSearch } from 'react-icons/md'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { actions } from 'redux/slice/propertyFilterSlice'
import AdornmentWrap from './AdornmentWrap'

const FilterBox = () => {

  const dispatch = useAppDispatch()
  const propertyFilterState = useAppSelector(state => state.propertyFilter)

  const [address, setAddress] = React.useState<string>('')
  const [bedsMin, setBedsMin] = React.useState<number | null>(null)
  const [bedsMax, setBedsmax] = React.useState<number | null>(null)
  const [bathsMin, setBathsMin] = React.useState<number | null>(null)
  const [bathsMax, setbathsMax] = React.useState<number | null>(null)

  React.useEffect(() => {
    setAddress(propertyFilterState.address)
    setBedsMin(propertyFilterState.bedsMin)
    setBedsmax(propertyFilterState.bedsMax)
    setBathsMin(propertyFilterState.bathsMin)
    setbathsMax(propertyFilterState.bathsMax)
  }, [])

  const handleReset = () => {
    setAddress('')
    setBedsMin(null)
    setBedsmax(null)
    setBathsMin(null)
    setbathsMax(null)
    dispatch(actions.reset())
  }

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value)
    dispatch(actions.update({
      address: e.target.value
    }))
  }

  const handleChangeBedsMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBedsMin(parseInt(e.target.value))
    dispatch(actions.update({
      bedsMin: e.target.value
    }))
  }

  const handleChangeBedsdMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBedsmax(parseInt(e.target.value))
    dispatch(actions.update({
      bedsMax: e.target.value
    }))
  }

  const handleChangeBathsMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBathsMin(parseInt(e.target.value))
    dispatch(actions.update({
      bathsMin: e.target.value
    }))
  }

  const handleChangeBathsMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    setbathsMax(parseInt(e.target.value))
    dispatch(actions.update({
      bathsMax: e.target.value
    }))
  }

  return (
    <Stack spacing={2}>
      <Box>Address</Box>
      <TextField
        placeholder="address"
        InputProps={{ startAdornment: <AdornmentWrap><MdSearch /></AdornmentWrap>, }}
        value={address || ''}
        onChange={handleChangeAddress}
      />
      <Box>Beds</Box>
      <TextField
        size="small"
        InputProps={{ startAdornment: <AdornmentWrap>MIN</AdornmentWrap> }}
        value={bedsMin || ''}
        onChange={handleChangeBedsMin}
      />
      <TextField
        size="small"
        InputProps={{ startAdornment: <AdornmentWrap>MAX</AdornmentWrap> }}
        value={bedsMax || ''}
        onChange={handleChangeBedsdMax}
      />
      <Box>Baths</Box>
      <TextField
        size="small"
        InputProps={{ startAdornment: <AdornmentWrap>MIN</AdornmentWrap> }}
        value={bathsMin || ''}
        onChange={handleChangeBathsMin}
      />
      <TextField
        size="small"
        InputProps={{ startAdornment: <AdornmentWrap>MAX</AdornmentWrap> }}
        value={bathsMax || ''}
        onChange={handleChangeBathsMax}
      />
      <Button size="small" variant="outlined" color="inherit" onClick={handleReset}>
        Reset
      </Button>
    </Stack>
  )
}

export default FilterBox