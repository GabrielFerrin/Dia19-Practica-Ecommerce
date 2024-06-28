import Container from "@mui/material/Container"
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import { useState } from 'react';

function ProductImagery() {
  const [mainPhoto, setMainPhoto] = useState('image-product-1.jpg')
  const [tempPhoto, setTempPhoto] = useState('')
  const handleHover = (e, bigImg) => {
    if (e.target.className === 'image-hover') {
      setTempPhoto(mainPhoto)
      setMainPhoto(bigImg)
    }
  }
  const handleBlur = (e) => {
    if (e.target.className === 'image-hover') {
      setMainPhoto(tempPhoto)
    }
  }
  const handelClick = (bigImg) => {
    setMainPhoto(bigImg)
    setTempPhoto(bigImg)
  }

  return (
    <>
      <Container flexgrow={1} sx={{
        display: { xs: 'flex', md: 'none' }, flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', padding: { xs: 0, md: 2 }
      }}>
        <img className="product-image-small" src={mainPhoto}
          alt="Main product image" width='100%' />
      </Container>
      <Container flexgrow={1} sx={{
        display: { xs: 'none', md: 'flex' }, flexDirection: 'column', paddingY: 12,
        justifyContent: 'center', alignItems: 'center', paddingX: 2,
        gap: 2
      }}>
        <img className="product-image" src={mainPhoto}
          alt="Main product image" height={500} />
        <ImageList sx={{ width: 503, height: 130 }} cols={4} rowHeight={40}
          gap={34}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} position="relative">
              <div className='image-hover' onClick={() => handelClick(item.bigImg)}
                onMouseEnter={(e) => handleHover(e, item.bigImg)}
                onMouseLeave={(e) => handleBlur(e)}>
              </div>
              <img
                className="product-image"
                src={item.img} alt={item.title} loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  )
}

export default ProductImagery

const itemData = [
  {
    img: 'image-product-1-thumbnail.jpg',
    bigImg: 'image-product-1.jpg',
    title: 'Breakfast',
  },
  {
    img: 'image-product-2-thumbnail.jpg',
    bigImg: 'image-product-2.jpg',
    title: 'Burger',
  },
  {
    img: 'image-product-3-thumbnail.jpg',
    bigImg: 'image-product-3.jpg',
    title: 'Camera',
  },
  {
    img: 'image-product-4-thumbnail.jpg',
    bigImg: 'image-product-4.jpg',
    title: 'Coffee',
  }
];
