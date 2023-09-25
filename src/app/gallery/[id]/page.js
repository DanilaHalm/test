import getGalleryAlbums from "@/app/api/getGalleryAlbums"

export const revalidate= 10

export const generateStaticParams= async () {
  const results = await getGalleryAlbums();
  return results.map(item=>{
    id : item.objectId
  })
}

const GalleryItem = async ({params}) => {
  const {id} = params
  const res = await fetch(`https://parseapi.back4app.com/classes/galleryTest/${id}`, {
    method: "GET",
    headers: {
      "X-Parse-Application-Id": "M7ajsoUJdW6shmY2c3zZtGlbvUvh8ejuq62mnkT2",
      "X-Parse-REST-API-Key": "vEa4z74M4ZXql3x3QtujV9sgLnGBcWNULRPh1itf",
      "content-type": "application/json",
    },
    
  });
  const  result = await res.json();
  
 // const items = JSON.stringify(params)
  
  
  return (
    <main> 
  <div>{result?.title}</div>
  </main>
  )
}

export default GalleryItem
