'use client'

import { Suspense, useState } from 'react'
import InfoCard from './InfoCard'
import LocationInput from './LocationInput'
import Map from './Map'
import { getLocation } from '@/actions/get-location'

interface TestCardProps {
  ip: string
  isp: string
  location: string
  timezone: string
  region: string
  lng: number
  lat: number
}

const TestCard = ({
  ip,
  isp,
  location,
  timezone,
  region,
  lng,
  lat
}: TestCardProps) => {
  const [Ip, setIp] = useState(ip)
  const [Isp, setIsp] = useState(isp)
  const [Location, setLocation] = useState(location)
  const [Timezone, setTimezone] = useState(timezone)
  const [Region, setRegion] = useState(region)
  const [Lng, setLng] = useState(lng)
  const [Lat, setLat] = useState(lat)

  const handleSubmit = async (values: { ip: string }) => {
    const data = await getLocation(values)
    const { city, region, timezone, lng, lat } = data.location
    const { isp } = data
    setIp(values.ip)
    setIsp(isp)
    setLat(lat)
    setLng(lng)
    setLocation(city)
    setTimezone(timezone)
    setRegion(region)
    setIp(values.ip)
  }

  return (
    <>
      <div className='container absolute left-1/2 top-0 z-10 -translate-x-1/2 space-y-10'>
        <LocationInput onSubmit={handleSubmit} />
        <InfoCard
          region={Region}
          ip={Ip}
          location={Location}
          timezone={Timezone}
          isp={Isp}
        />
      </div>
      <div className='relative z-0'>
        <Suspense fallback={<div>Loading...</div>}>
          <Map lng={Lng} lat={Lat} />
        </Suspense>
      </div>
    </>
  )
}

export default TestCard
