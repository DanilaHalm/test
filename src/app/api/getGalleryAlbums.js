const getGalleryAlbums = async () => {
  const res = await fetch("https://parseapi.back4app.com/classes/galleryTest", {
    method: "GET",
    headers: {
      "X-Parse-Application-Id": "M7ajsoUJdW6shmY2c3zZtGlbvUvh8ejuq62mnkT2",
      "X-Parse-REST-API-Key": "vEa4z74M4ZXql3x3QtujV9sgLnGBcWNULRPh1itf",
      "content-type": "application/json",
    },
    next: { revalidate : 10},
  });
  const { results } = await res.json();
  return results;
};

export default getGalleryAlbums;
