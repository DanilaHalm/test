import getGalleryAlbums from "@/app/api/getGalleryAlbums"

const Gallery = async () => {
  const items = await getGalleryAlbums()
  
  
  return (
    <main> {items?.length} </main>
  )
}
