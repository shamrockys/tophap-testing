import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container, Box, Paper, Grid, Table, TableBody, TableRow, TableCell } from '@mui/material'
import { wrapper } from 'redux/store'
import { useAppSelector } from 'redux/hooks'
import { setPropertyItem } from 'redux/slice/propertyItemSlice'
import { PropertyItemState } from 'redux/types'
import sampleData from 'utils/sampleData'

type PageProp = {
  data: PropertyItemState
}

const PropertyDetailPage: NextPage<PageProp> = () => {

  const router = useRouter()
  const propertyId = (router.query && router.query.id)?.toString() || ''
  const propertyItemState = useAppSelector(state => state.propertyItem)
  const property = propertyItemState[propertyId]

  return (
    <Box>
      <Head>
        <title>Property | {property.address.fullAddress}</title>
      </Head>
      <Container>
        <Box my={4} component="h1">
          Property Management
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', height: 80 }}>
          <Link href="/" passHref>
            List
          </Link>
          <Box mx={2}>
            /
          </Box>
          <Box>
            {property.address.fullAddress}
          </Box>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ overflow: 'hidden' }}>
              <Box sx={{ paddingBottom: '60%', position: 'relative' }}>
                <Box
                  component="img"
                  src={property.photo}
                  sx={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1, objectFit: 'cover' }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Table>
              <TableBody sx={{ '& td': { border: 0, whiteSpace: 'nowrap' } }}>
                <TableRow>
                  <TableCell width={30}>Full Address</TableCell>
                  <TableCell>{property.address.fullAddress}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Beds</TableCell>
                  <TableCell>{property.beds}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Baths</TableCell>
                  <TableCell>{property.baths}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>{property.price}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Price per Sqrt</TableCell>
                  <TableCell>{property.pricePerSqft}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Living Sqrt</TableCell>
                  <TableCell>{property.livingSqft}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Year Built</TableCell>
                  <TableCell>{property.yearBuilt}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

PropertyDetailPage.getInitialProps = wrapper.getInitialPageProps(store => async ({ query }) => {

  const propertyId = (query && query.id)?.toString() || ''

  if (store.getState().propertyItem[propertyId] === undefined) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    store.dispatch(setPropertyItem(propertyId, sampleData.find(d => d.id === propertyId)))
  }

  return {}
});


export default PropertyDetailPage