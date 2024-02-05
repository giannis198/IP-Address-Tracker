import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

interface InfoCardProps {
  ip: string
  isp: string
  location: string
  timezone: string
  region: string
}

const InfoCard = ({ ip, location, isp, timezone, region }: InfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription className='uppercase'>Ip Address</CardDescription>
        <CardTitle>{ip}</CardTitle>
      </CardHeader>
      <CardHeader>
        <CardDescription className=' uppercase'>Location</CardDescription>
        <CardTitle className='text-xl'>
          {location},{region}
        </CardTitle>
      </CardHeader>
      <CardHeader>
        <CardDescription className='uppercase'>Timezone</CardDescription>
        <CardTitle>UTC {timezone}</CardTitle>
      </CardHeader>
      <CardHeader>
        <CardDescription className='uppercase'>isp</CardDescription>
        <CardTitle>{isp}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default InfoCard
