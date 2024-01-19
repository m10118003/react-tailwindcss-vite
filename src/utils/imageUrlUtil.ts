export function getImageUrl(shape: { imageId: string }) {
  return "https://i.imgur.com/" + shape.imageId + ".png";
}

export function getImgUrl(imageId: string, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export function getImgUrlOptionalSize(imageId: string, size: string) {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}

export function getScientistsImgUrl(person: { imageId: string }) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export default { getImageUrl, getImgUrl, getImgUrlOptionalSize, getScientistsImgUrl }