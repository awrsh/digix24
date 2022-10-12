import React from 'react'
import {Box,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Button, IconButton} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import AddCardBank from '../dialogs/AddCardBank';

export default function BanksList({rows,opendialog}) {
  
  const rowstyle={
    '&:last-child td, &:last-child th': { border: 0 },
    borderTop:"2px solid rgba(203, 228, 235, 1)",
  }
  const headstyle={
    py:"15px",
    fontSize: "14px !important",
    textAlign:"center",
    color: "rgba(164, 166, 180, 1)",
  }
  const cellstyle={
    py:"15px",
    fontSize: "14px !important",
    textAlign:"center"
  }
  const cardbtnstyle={
    backgroundColor:'#e8ebef',
    color: "#000",

    '&:hover': {
      backgroundColor:'#e8ebef',
      color: "#000",
   },
   '& .MuiButton-startIcon':{
    color:"rgba(164, 166, 180, 1)",
    border:"1px dashed rgba(164, 166, 180, 1)",
    boderRadius:10,
   },
   px:"90px",
   py:"50px",
   mb:"100px",
   mt:"10px"
  }
  return (
    <Box className='row maincontent'>
    <TableContainer sx={{px:"15px"}}>
      <Table sx={{ minWidth: 500}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={headstyle}>بانک</TableCell>
            <TableCell sx={headstyle}>شماره‌کارت</TableCell>
            <TableCell sx={headstyle}>شماره‌شبا</TableCell>
            <TableCell sx={headstyle}>وضعیت</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={rowstyle}
            >
              <TableCell sx={cellstyle}>{row.bank}</TableCell>
              <TableCell  sx={cellstyle}>{row.cardnumber}</TableCell>
              <TableCell sx={cellstyle}>{row.sheba}</TableCell>
              <TableCell sx={cellstyle}>
                <IconButton>
                  <Delete/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
     <Box sx={{px:'32px'}}>
        <Button fullWidth sx={cardbtnstyle} startIcon={<Add />} onClick={opendialog}>
          افزودن کارت بانکی جدید 
        </Button>
     </Box>
    </Box>
  )
}
