import React from 'react'
import { Box, InputAdornment } from '@mui/material'

const AdornmentWrap = ({ children }: any) => (
  <InputAdornment position="start">
    <Box sx={{ fontFamily: 'monospace' }}>
      {children}
    </Box>
  </InputAdornment>
)

export default AdornmentWrap