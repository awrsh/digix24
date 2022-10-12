import { Add, SouthWest, NorthEast, East, Menu } from '@mui/icons-material'
import { Box, Card, CardContent, IconButton, List, ListItem, ListItemIcon, Typography, ListItemText, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import { ReactComponent as Tether } from '../../../img/logos/tether.svg';
import Svg from '../../utils/Svgs';
import svgBg from '../../../img/icons/cart-bg.svg'
export default function WalletInfo({ infos, opendialogw }) {
  const cardstyle = {
    borderRadius: '8px',
    width: "100%",
    height: "210px"
  }
  const listbtnstyle = {
    border: "1px solid #CBE4EB",
    borderRadius: 2,
    color: "rgba(164, 166, 180, 1)",
    width: "36px",
    height: "36px",
    mx: "3px",
    my: "10px",
    fontSize: "12px",
  }
  const listbtntextstyle = {
    fontSize: "12px",
    '& .MuiListItemText-secondary': {
      color: "#1ed184"
    }
  }

  return (
    <Box className="row" >
      <Box className="col-lg-5 col-12" sx={{ px: "2.5%", py: "32px" }}>
        <Card sx={cardstyle} className="bg-card-img">
          <CardContent>
            <Box sx={{ color: "#fff", px: "5%", pb: "40px" }}>
              <Typography variant='p' sx={{ py: 2 }} fontSize={14} component="div">
                موجودی کل حساب شما
              </Typography>
              <Typography variant="p" fontSize={20} component="div">
                ۸۷۳,۰۸۳,۳۰۰ تومان
              </Typography>

            </Box>
            <Box className="d-flex align-items-end" dir="ltr">
              <IconButton sx={{ border: "1px solid #fff", borderRadius: 2, mx: 1, color: "#fff" }} fontSize="large">
                <NorthEast />
              </IconButton>
              <IconButton onClick={opendialogw} sx={{ border: "1px solid #fff", borderRadius: 2, color: "#fff" }} fontSize="large">
                <SouthWest />
              </IconButton>
              <IconButton sx={{ border: "1px dashed #fff", borderRadius: 2, mx: 1, color: "#fff" }} fontSize="large">
                <Add />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box className="col-lg-7 col-12">
        <List>
          {infos.map((item, idx) => (
            <ListItem key={idx} sx={{ px: "12%" }}>
              <ListItemIcon>
                <Svg Component={Tether} sx={{ height: "30px", width: "30px" }} />
              </ListItemIcon>
              <ListItemText id={idx} primary={item.name} />
              <ButtonGroup
                disableElevation
                size="small"
                variant="contained"
                aria-label="Disabled elevation buttons"
              >
                <Box>
                  <ListItemText id={idx} sx={listbtntextstyle} primary={item.number} secondary={item.percend} />
                </Box>
                <IconButton sx={listbtnstyle}>
                  <NorthEast />
                </IconButton>
                <IconButton sx={listbtnstyle}>
                  <SouthWest />
                </IconButton>
                <IconButton sx={listbtnstyle}>
                  <East />
                </IconButton>
                <IconButton sx={listbtnstyle}>
                  <Menu />
                </IconButton>
              </ButtonGroup>


            </ListItem>

          ))}

        </List>
      </Box>
    </Box>
  )
}
