import getGalleryAlbums from "@/app/api/getGalleryAlbums"

export const revalidate = 10

const Gallery = async () => {
  const items = await getGalleryAlbums()
  
  
  return (
    <main> {items?.length} </main>
  )
}

export default Gallery
