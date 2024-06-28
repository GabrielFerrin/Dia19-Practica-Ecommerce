import Container from '@mui/material/Container'
import MyAppBar from './components/AppBar'
import ProductImagery from './components/ProductImagery'
import ProductInfo from './components/ProductInfo'

function App() {

  return (
    <div className='app'>
      <MyAppBar />
      <Container disableGutters sx={{ 
        display: 'flex', flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'center', alignItems: 'center', padding: { xs: 0, md: 2 },
        gap: 2, flexGrow: 1
      }}>
        <ProductImagery />
        <ProductInfo />
      </Container>
    </div>
  )
}

export default App
