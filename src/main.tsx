import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-zoom";
import { ArcgisMap, ArcgisZoom } from "@arcgis/map-components-react";
import App from './App.tsx'

import { setAssetPath as setCalciteComponentsAssetPath } from '@esri/calcite-components/dist/components';

setCalciteComponentsAssetPath("https://js.arcgis.com/calcite-components/2.13.2/assets");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <ArcgisMap
          itemId="d5dda743788a4b0688fe48f43ae7beb9"
          onArcgisViewReadyChange={(event: CustomEvent) => {
              console.log("MapView ready", event);
          }}
      >
          <ArcgisZoom position="top-left"></ArcgisZoom>
      </ArcgisMap>

  </StrictMode>,
)
