import { getUserIp } from '@/actions/get-usersIp'
import { getLocation } from '@/actions/get-location'
import TestCard from '@/components/TestCard'

const HomePage = async () => {
  const ip = await getUserIp()

  const data = await getLocation(ip)
  const { city, region, timezone, lng, lat } = data.location
  const { isp } = data

  // const handleSubmit = (values: { ip: string }) => {
  //   // setIp(values.ip)
  //   console.log(values)
  // }

  return (
    <section className='relative'>
      <div className='background-image h-[19.5rem] w-full' />
      {/* <div className='container absolute left-1/2 top-0 z-50 -translate-x-1/2 space-y-10'> */}
      {/* <LocationInput />
        <InfoCard
          region={region}
          ip={ip.ip}
          location={city}
          timezone={timezone}
          isp={isp}
        /> */}
      <TestCard
        ip={ip.ip}
        region={region}
        location={city}
        timezone={timezone}
        isp={isp}
        lat={lat}
        lng={lng}
      />
      {/* </div> */}
      {/* <div className='relative z-0'>
        <Map lng={lng} lat={lat} />
      </div> */}
    </section>
  )
}

export default HomePage
