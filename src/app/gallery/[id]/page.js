import getGalleryAlbums from "@/app/api/getGalleryAlbums"
import { notFound } from 'next/navigation'
export const revalidate= 10

//export async function generateStaticParams() {
//  const results = await getGalleryAlbums();
//  return results.map((item)=>({
//    id : item.objectId
//  }))
//}

const GalleryItem = async ({params}) => {
  const {id} = params
  const res = await fetch(`https://parseapi.back4app.com/classes/galleryTest`, {
    method: "GET",
    headers: {
      "X-Parse-Application-Id": "M7ajsoUJdW6shmY2c3zZtGlbvUvh8ejuq62mnkT2",
      "X-Parse-REST-API-Key": "vEa4z74M4ZXql3x3QtujV9sgLnGBcWNULRPh1itf",
      "content-type": "application/json",
    },
    
  });
  const  {results} = await res.json();
  const item = results.find(it=> it.objectId === id)
 // const items = JSON.stringify(params)
  const idExists = results.map(item=> item.objectId).includes(id)
  if(!idExists){
    notFound()
  }
  return (
    <main> 
  <div>{item.title}</div>
  </main>
  )
}

export default GalleryItem
