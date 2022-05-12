import type { NextApiHandler } from 'next'
import sampleData from 'utils/sampleData'

const propertyQuery: NextApiHandler = async (request, response) => {

  const address = (request.query.address ?? '').toString()
  const bedsMin = parseInt((request.query.bedsMin ?? '').toString()) || 0
  const bedsMax = parseInt((request.query.bedsMax ?? '').toString()) || Number.POSITIVE_INFINITY
  const bathsMin = parseInt((request.query.bathsMin ?? '').toString()) || 0
  const bathsMax = parseInt((request.query.bathsMax ?? '').toString()) || Number.POSITIVE_INFINITY

  const propertyList = sampleData.filter(d =>
    d.address.fullAddress.toLowerCase().includes(address)
    && d.beds >= bedsMin
    && d.beds <= bedsMax
    && d.baths >= bathsMin
    && d.baths <= bathsMax
  )

  response.json(propertyList)
}

export default propertyQuery