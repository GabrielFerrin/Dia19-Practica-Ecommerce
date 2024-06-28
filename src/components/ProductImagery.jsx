import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ProductImagery() {
  return (
    <Container flexgrow={1} sx={{
      display: 'flex', flexDirection: 'column', paddingY: 12,
      justifyContent: 'center', alignItems: 'center', paddingX: 2,
      gap: 2
    }}>
      <img className="product-image" src="image-product-1.jpg"
        alt="Main product image" height={500} />
      <ImageList sx={{ width: 503, height: 130 }} cols={4} rowHeight={40}
        gap={34}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} position="relative">
            <div className='image-hover'></div>
            <img
              className="product-image"
              src={item.img} alt={item.title} loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}

export default ProductImagery

const itemData = [
  {
    img: 'image-product-1-thumbnail.jpg',
    title: 'Breakfast',
  },
  {
    img: 'image-product-2-thumbnail.jpg',
    title: 'Burger',
  },
  {
    img: 'image-product-3-thumbnail.jpg',
    title: 'Camera',
  },
  {
    img: 'image-product-4-thumbnail.jpg',
    title: 'Coffee',
  }
];
