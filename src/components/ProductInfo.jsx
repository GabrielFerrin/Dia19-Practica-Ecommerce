import { Container } from "@mui/material"

function ProductInfo() {
  return (
    <Container flexgrow={1} sx={{ display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', padding: 2
     }}>
      <div>ProductInfo</div>
    </Container>
  )
}
export default ProductInfo