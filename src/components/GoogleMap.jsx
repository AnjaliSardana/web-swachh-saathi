import { GoogleMap } from '@react-google-maps/api'
import { Box, Spinner } from '@chakra-ui/react'
import { useMemo } from 'react'

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '8px'
}

const defaultCenter = {
  lat: 28.6139,  // Default to New Delhi
  lng: 77.2090
}

const options = {
  disableDefaultUI: true,
  zoomControl: true,
}

export default function Map({ isLoaded }) {
  const center = useMemo(() => defaultCenter, [])

  if (!isLoaded) {
    return (
      <Box height="100%" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" />
      </Box>
    )
  }

  return (
    <Box height="100%" width="100%">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={options}
        onLoad={() => {
          console.log('Map loaded successfully')
        }}
        onError={(error) => {
          console.error('Map loading error:', error)
        }}
      />
    </Box>
  )
} 