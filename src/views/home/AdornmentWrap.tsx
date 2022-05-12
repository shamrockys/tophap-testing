import React from 'react'
import { Box, InputAdornment } from '@mui/material'

type Props = {
  children: React.ReactNode
}

const AdornmentWrap: React.FC<Props> = ({ children }) => (
  <InputAdornment position="start">
    <Box sx={{ fontFamily: 'monospace' }}>
      {children}
    </Box>
  </InputAdornment>
)

export default AdornmentWrap