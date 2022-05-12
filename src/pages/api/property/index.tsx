import type { NextApiHandler } from 'next'
import sampleData from 'utils/sampleData'

const propertyListHandler: NextApiHandler = async (request, response) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const propertyList = sampleData.map(d => ({
    id: d.id,
    address: d.address,
    baths: d.baths,
    beds: d.beds,
    livingSqft: d.livingSqft,
    pricePerSqft: d.pricePerSqft,
    price: d.price,
    yearBuilt: d.yearBuilt,
  }))

  response.json(propertyList)
}

export default propertyListHandler