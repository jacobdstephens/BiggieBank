import "@google/model-viewer";

const Model = () => (
  <div id="card">
    <model-viewer
      src="https://nftstorage.link/ipfs/bafybeidtdgvrv6raa2stm6wkns7y7r3srcvtwyidw2a4kvatiwkp5tz77a/piggy.glb"
      ios-src=""
      poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
      alt="A 3D model of a piggy bank"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="fixed"
    >
      <button className="Hotspot" slot="hotspot-1" data-position="0.6848562977786234m 2.816328812935004m 2.5862971373836086m" data-normal="-0.30229463292415343m 0.21061377532517248m 0.9296557387272609m" data-visibility-attribute="visible">
        <span className="HotspotAnnotation">Oink Boink</span>
      </button>
    </model-viewer>
  </div>
);

export default Model;
