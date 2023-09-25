import getGalleryAlbums from "@/app/api/getGalleryAlbums"
import Link from "next/link";

export const revalidate= 10

const Gallery = async () => {
  
  const res = await fetch("https://parseapi.back4app.com/classes/galleryTest", {
    method: "GET",
    headers: {
      "X-Parse-Application-Id": "M7ajsoUJdW6shmY2c3zZtGlbvUvh8ejuq62mnkT2",
      "X-Parse-REST-API-Key": "vEa4z74M4ZXql3x3QtujV9sgLnGBcWNULRPh1itf",
      "content-type": "application/json",
    },
    
  });
  const { results } = await res.json();
 // const items = JSON.stringify(params)
  
  
  return (
    <main> 
  <div className="flex flex-col">{results?.map(item=> {
    return (<Link href={`/gallery/${id}`}>
                    {item.title}
                    </Link>)
  })}</div>
  </main>
  )
}

export default Gallery
