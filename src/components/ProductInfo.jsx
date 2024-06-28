import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";

function ProductInfo() {
  const [qty, setQty] = useState(0)
  const media1010px = useMediaQuery('(max-width:1010px)');
  return (
    <Container flexgrow={1} sx={{
      display: 'flex', flexDirection: 'column', gap: 4,
      justifyContent: 'center', padding: 2
    }}>
      <Typography variant="caption" gutterBottom
        sx={{
          display: 'block', marginLeft: .3, fontFamily: 'Montserrat',
          fontWeight: 700, letterSpacing: 2, fontSize: 14, color: '#787C85',
          marginBottom: -1.7
        }}>
        SNEAKER COMPANY
      </Typography>
      <Typography variant="h3" gutterBottom
        sx={{ fontWeight: 800, fontFamily: 'Montserrat', fontSize: 36 }}>
        Fall Limited Edition Sneakers
      </Typography>
      <Typography variant="body1" gutterBottom
        sx={{
          fontFamily: 'Montserrat', fontWeight: 500, color: '#8C9093',
          fontSize: 15
        }}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything
        the weather can offer.
      </Typography>
      <Container disableGutters sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Typography variant="h3"
          sx={{
            fontWeight: 700, fontFamily: 'Montserrat', fontSize: 32,
            letterSpacing: 1.7
          }}>
          $125.00
        </Typography>
        <Typography variant="h3" sx={{
          height: 30, borderRadius: 2, color: 'white',
          fontWeight: 500, bgcolor: '#202126', fontSize: 14,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: 'fit-content', paddingX: 1.6
        }}>
          50%
        </Typography>
        <Typography variant="h3" gutterBottom sx={{
          textDecoration: 'line-through',
          fontFamily: 'Montserrat', fontWeight: 700, color: '#787C85', width: 220,
          fontSize: 16
        }}>
          $250.00
        </Typography>
      </Container>
      <Container disableGutters sx={{ display: 'flex', gap: 2, width: '100%',
          ...(media1010px && { flexDirection: 'column', width: '100%' })
       }}>
        <Container disableGutters sx={{
          bgcolor: '#F7F8FD',
          borderRadius: 2, height: 55, display: 'flex',
          justifyContent: 'space-between', alignItems: 'center',
          flexGrow: 1, fontWeight: 800, fontFamily: 'Montserrat',
        }}>
          <Box onClick={() => setQty(qty > 0 ? qty - 1 : 0)} sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 55, height: 55, cursor: 'pointer', ':hover img': { opacity: '.5' },
            ':active': { backgroundColor: '#E2E2E2' }, borderRadius: 2
          }}>
            <img className="qty-icon" src="minus.svg" alt="Minus sign" height={14}
              style={{ transition: 'all 0.2s ease-in-out' }} />
          </Box>
          {qty} {media1010px}
          <Box onClick={() => setQty(qty + 1)} sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 55, height: 55, cursor: 'pointer', ':hover img': { opacity: '.5' },
            ':active': { backgroundColor: '#E2E2E2' }, borderRadius: 2,
            transition: 'all 0.2s ease-in-out'
          }}>
            <img className="qty-icon" src="plus.svg" alt="Plus sign" height={14} />
          </Box>
        </Container>
        <Button variant="contained" startIcon={<ShoppingCartIcon />}
          sx={{
            height: 55, borderRadius: 2, width: '140%',
            textTransform: 'none', fontWeight: 800, fontFamily: 'Montserrat',
            ...(media1010px && { width: '100%' })
          }}>
          Add to cart
        </Button>
      </Container>
    </Container>
  )
}

export default ProductInfo
