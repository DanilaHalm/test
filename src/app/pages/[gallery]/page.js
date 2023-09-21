

const Gallery = ({params,data}) => {
  
  //const res = await fetch("https://parseapi.back4app.com/classes/galleryTest", {
   // method: "GET",
  //  headers: {
     // "X-Parse-Application-Id": "M7ajsoUJdW6shmY2c3zZtGlbvUvh8ejuq62mnkT2",
    //  "X-Parse-REST-API-Key": "vEa4z74M4ZXql3x3QtujV9sgLnGBcWNULRPh1itf",
   //   "content-type": "application/json",
   // },
  //  next: { revalidate : 10 }
  //});
  //const { results } = await res.json();
  
  const x = JSON.stringify(params)
  const s = JSON.stringify(data)
  
  return (
    <main> 
  <div>
    {x}
    </div>
    <div>{s}</div>
  </main>
  )
}

export default Gallery
