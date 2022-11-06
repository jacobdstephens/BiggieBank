import "@google/model-viewer";

const Model = () => (
  <model-viewer class="w-full h-full"
    src="https://nftstorage.link/ipfs/bafybeigwyc2xvazidi5opqg6qnd3k6ufkxlt7xvrc3mob7n43tklalwymq/biggiepiggy.glb"
    ios-src=""
    poster="https://nftstorage.link/ipfs/bafybeigwyc2xvazidi5opqg6qnd3k6ufkxlt7xvrc3mob7n43tklalwymq/piggybank.png"
    alt="A 3D model of a piggy bank"
    shadow-intensity="1"
    camera-controls
    auto-rotate
    ar
    ar-modes="webxr scene-viewer quick-look"
    ar-scale="fixed"
    scale=".25 .25 .25"
  >
    <form action="https://google.com" slot="hotspot-1" data-position="0.05433714455273719m 1.5152580934978745m 0.030338820705458014m" data-normal="0.13764446796963004m 0.9904508804974316m -0.007813690499380146m" data-visibility-attribute="visible">
      <button type="submit" className="btn btn-primary">
        <div className="HotspotAnnotation">Feed</div>
      </button>
    </form>
  </model-viewer>
);

export default Model;
