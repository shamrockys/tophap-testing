import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Container, Grid, LinearProgress, IconButton } from '@mui/material'
import { actions } from 'redux/slice/propertyListSlice'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import PropertyCard from 'views/home/PropertyCard'
import FilterBox from 'views/home/FilterBox'
import { MdFilterList } from 'react-icons/md'

const Home: NextPage = () => {

  const dispatch = useAppDispatch()
  const propertyListState = useAppSelector(state => state.propertyList)
  const [filter, setFilter] = React.useState(false)

  React.useEffect(() => {
    if (!propertyListState.initialized) {
      dispatch(actions.getPropertyList())
    }
  }, [])

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
                {propertyListState.list.map(d => (
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