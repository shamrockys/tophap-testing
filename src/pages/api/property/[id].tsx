import type { NextApiHandler } from 'next'
import sampleData from 'utils/sampleData'

const propertyDetailHandler: NextApiHandler = async (request, response) => {
  const { id } = request.query

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const property = sampleData.find(d => d.id === id)

  response.json(property)
}

export default propertyDetailHandler