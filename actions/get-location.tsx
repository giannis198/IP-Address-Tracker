interface getLocationProps {
  ip: string
}

interface LocationInfo {
  country: string
  region: string
  city: string
  lat: number
  lng: number
  postalCode: string
  timezone: string
  geonameId: number
}

interface AsInfo {
  asn: number
  name: string
  route: string
  domain: string
  type: string
}

interface LocationData {
  ip: string
  location: LocationInfo
  as: AsInfo
  isp: string
}

export const getLocation = async ({
  ip
}: getLocationProps): Promise<LocationData> => {
  const key = process.env.NEXT_PUBLIC_API_KEY

  const URL = `
https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${ip}`
  const res = await fetch(URL, { next: { revalidate: 3600 } })

  const data: LocationData = await res.json()

  return data
}
