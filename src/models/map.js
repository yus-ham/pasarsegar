import L from 'leaflet'
import tileServers from '../utils/tile-servers'

export const createMap = (mapDiv) => {
  const tileLayerId = 'osm.standard'
  const {url, attribution} = tileServers[tileLayerId]

  const leafletMap = L.map(mapDiv, {
      svgSprite: false,
      zoomControl: true,
      center: [-6.9024812, 107.61881],
      zoom: 12,
  })

  L.tileLayer(url, {
      attribution,
      maxZoom: 18,
      id: tileLayerId,
  }).addTo(leafletMap)

  return leafletMap
}
