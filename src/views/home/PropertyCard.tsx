import React from 'react'
import Link from 'next/link'
import { Box, Table, TableBody, TableRow, TableCell, ButtonBase } from '@mui/material'
import { Property } from 'redux/types'

type PropertyCardProps = {
  property: Property
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
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
      <Link href={`/property/${property.id}`} passHref>
        <Box component="a" sx={{ textDecoration: 'none' }}>
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
        </Box>
      </Link>
    </ButtonBase>
  )
}

export default PropertyCard