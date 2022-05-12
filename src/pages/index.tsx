import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Box, Container, Grid, Table, TableBody, TableRow, TableCell, ButtonBase, LinearProgress } from '@mui/material'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { actions } from 'redux/slice/propertyListSlice'

const Home: NextPage = () => {

  const dispatch = useAppDispatch()
  const propertyState = useAppSelector(state => state.propertyList)

  React.useEffect(() => {
    dispatch(actions.getPropertyList())
  }, [])

  return (
    <Box>
      <Head>
        <title>Properties</title>
      </Head>
      <Container>
        <Box my={4} component="h1">
          Property Management
        </Box>
        <Box my={4}>
          List
        </Box>
        {propertyState.loading ?
          <Grid container spacing={4}>
            {propertyState.list.map(d => (
              <Grid key={d.id} item xs={12} md={6}>
                <ButtonBase
                  component="div"
                  sx={{
                    display: 'block',
                    width: 1,
                    p: 2,
                    border: '1px solid #eee',
                    borderRadius: 2,
                    transition: 'all .2s',
                    cursor: 'pointer',
                    '&:hover': {
                      border: '1px solid #333',
                      backgroundColor: '#f9f9f9'
                    }
                  }}
                >
                  <Link href={`/property/${d.id}`} passHref>
                    <Box component="a" sx={{ textDecoration: 'none' }}>
                      <Table>
                        <TableBody sx={{ '& td': { border: 0, whiteSpace: 'nowrap' } }}>
                          <TableRow>
                            <TableCell width={30}>Full Address</TableCell>
                            <TableCell>{d.address.fullAddress}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Beds</TableCell>
                            <TableCell>{d.beds}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Baths</TableCell>
                            <TableCell>{d.baths}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Price</TableCell>
                            <TableCell>{d.price}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Price per Sqrt</TableCell>
                            <TableCell>{d.pricePerSqft}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Living Sqrt</TableCell>
                            <TableCell>{d.livingSqft}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Year Built</TableCell>
                            <TableCell>{d.yearBuilt}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </Box>
                  </Link>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
          :
          <LinearProgress />
        }
      </Container >
    </Box >
  )
}

export default Home