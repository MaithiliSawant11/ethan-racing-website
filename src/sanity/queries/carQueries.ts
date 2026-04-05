export const allCarsQuery = `
  *[_type == "car"] | order(year desc) {
    _id,
    name,
    slug,
    year,
    description,
    image,
    specs
  }
`;