interface MapProps {
  lng: number
  lat: number
}

const Map = ({ lng, lat }: MapProps) => {
  return (
    <div>
      Your coordinates is {lat},{lng}
    </div>
  )
}

export default Map
