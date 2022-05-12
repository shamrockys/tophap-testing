import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Grid, LinearProgress, IconButton } from '@mui/material'
import { actions } from 'redux/slice/propertyListSlice'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { Property } from 'redux/types'
import PropertyCard from 'views/home/PropertyCard'
import FilterBox from 'views/home/FilterBox'
import { MdFilterList } from 'react-icons/md'

const Home: NextPage = () => {

  const dispatch = useAppDispatch()
  const propertyListState = useAppSelector(state => state.propertyList)
  const propertyFilterState = useAppSelector(state => state.propertyFilter)
  const [filter, setFilter] = React.useState(false)
  const [propertyList, setPropertyList] = React.useState<Property[]>([])

  React.useEffect(() => {
    dispatch(actions.getPropertyList())
  }, [])

  React.useEffect(() => {
    if (propertyListState.initialized) {
      setPropertyList(propertyListState.list.filter(d => {
        const address = (propertyFilterState.address || '').toLowerCase()
        const bedsMin = propertyFilterState.bedsMin || 0
        const bedsMax = propertyFilterState.bedsMax || Number.POSITIVE_INFINITY
        const bathsMin = propertyFilterState.bathsMin || 0
        const bathsMax = propertyFilterState.bathsMax || Number.POSITIVE_INFINITY
        return d.address.fullAddress.toLowerCase().includes(address)
          && d.beds >= bedsMin
          && d.beds <= bedsMax
          && d.baths >= bathsMin
          && d.baths <= bathsMax
      }))
    }
  }, [propertyListState, propertyFilterState])

  const handleToggleFilter = () => {
    setFilter(!filter)
  }

  return (
    <Box>
      <Head>
        <title>Properties</title>
      </Head>
      <Container>
        <Box my={4} component="h1">
          Property Management
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 80 }}>
          <Box>List</Box>
          <IconButton onClick={handleToggleFilter}>
            <MdFilterList />
          </IconButton>
        </Box>
        {propertyListState.initialized ?
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Grid container spacing={4}>
                {propertyList.map(d => (
                  <Grid key={d.id} item xs={12} md={6}>
                    <PropertyCard property={d} />
                  </Grid>
                ))}
              </Grid>
              {filter &&
                <Box sx={{ width: 200, flexShrink: 0, ml: 4 }}>
                  <FilterBox />
                </Box>
              }
            </Box>
          </Box>
          :
          <LinearProgress />
        }
      </Container >
    </Box >
  )
}

export default Home