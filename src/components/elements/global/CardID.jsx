import React from 'react'
import { Typography, Table, TableRow, TableCell, TableContainer,Box, IconButton} from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
export default function CardID() {
  const rowstyle={
    borderTop:"2px solid rgba(203, 228, 235, 1)",
  }
  const borderstyle={
    border:"2px solid rgba(203, 228, 235, 1)"
  }
  return (
    <TableContainer sx={{border:"2px solid rgba(203, 228, 235, 1)",borderRadius:"10px"}}>
      <Table >
        <TableRow sx={rowstyle}>
          <TableCell sx={borderstyle}>
            <Typography variant="p" component="div">
                مبدا        
            </Typography>
          </TableCell>
          <TableCell sx={borderstyle} className="d-flex justify-content-between">
              <Typography variant="p" component="div">
                حسین اسدزاده
              </Typography>
              <Typography variant="p" component="div">
                  IR00000000000000000000000
              </Typography>
          </TableCell>
        </TableRow>
        <TableRow sx={rowstyle}>
          <TableCell sx={borderstyle}>
            <Typography variant="p" component="div">
              مقصد        
            </Typography>
          </TableCell>
          <TableCell sx={borderstyle}>
                <Box className='d-flex justify-content-between'>
                  <Typography variant="p" component="div">
                      حسین اسدزاده
                      </Typography>
                    <Typography variant="p" component="div">
                        IR00000000000000000000000
                    </Typography>
                    </Box>
                    <Box className='d-flex justify-content-between'>
                      <Box className="d-flex" sx={{py:"2%"}}>
                      <Typography variant="p" component="div" style={{color:'#1ed184',fontSize:'12px'}}>
                          شناسه واریز
                      </Typography>
                      <InfoOutlined/>
                      </Box>
                      <Box sx={{py:"2%"}}>
                      <Typography variant="p" component="div" style={{color:'#1ed184',fontSize:'12px'}}>
                        9900082134458828
                      </Typography>
                      </Box>
                      
                </Box>
          </TableCell>
        </TableRow>
       </Table>
      </TableContainer>

  // <table class="table table-bordered table-striped" style={cardstyle}>
  //       <tbody>
  //           <tr>
  //           <td>مبدا</td>
  //           <td>
  //             <div className='d-flex justify-content-between'>
  //              <Typography variant="p" component="div">
  //               حسین اسدزاده
  //              </Typography>
  //              <Typography variant="p" component="div">
  //                 IR00000000000000000000000
  //              </Typography>
  //             </div>
  //           </td>
  //           </tr>
  //           <tr>
  //           <td>مقصد</td>
  //           <td>
  //             <div className='d-flex justify-content-between'>
  //              <Typography variant="p" component="div">
  //               حسین اسدزاده
  //              </Typography>
  //              <Typography variant="p" component="div">
  //                 IR00000000000000000000000
  //              </Typography>
  //             </div>
  //             <div className='d-flex justify-content-between'>
  //              <Typography variant="p" component="div" style={{color:'#1ed184',fontSize:'12px'}}>
  //                   شناسه واریز
  //              </Typography>
  //              <Typography variant="p" component="div" style={{color:'#1ed184',fontSize:'12px'}}>
  //                 9900082134458828
  //              </Typography>
  //             </div>
  //           </td>
  //           </tr>
  //       </tbody>
  //       </table>      
  )
}
