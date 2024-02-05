import LocationInput from '@/components/LocationInput'
import React from 'react'
import InfoCard from '@/components/InfoCard'
import Map from '@/components/Map'
import { getUserIp } from '@/actions/get-usersIp'
import { getLocation } from '@/actions/get-location'

const HomePage = async () => {
  const ip = await getUserIp()
  const data = await getLocation(ip)
  const location = data.location.city
  const region = data.location.region
  const timezone = data.location.timezone
  const isp = data.isp
  const lng = data.location.lng
  const lat = data.location.lat

  return (
    <section className='relative'>
      <div className='background-image h-[19.5rem] w-full' />
      <div className='container absolute left-0 top-0 grid gap-10'>
        <LocationInput />
        <InfoCard
          region={region}
          ip={ip.ip}
          location={location}
          timezone={timezone}
          isp={isp}
        />
      </div>
      <Map lng={lng} lat={lat} />
    </section>
  )
}

export default HomePage
