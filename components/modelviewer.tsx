import "@google/model-viewer";

const Model = ({ metadata }: { metadata: any }) => {
  if (!metadata) return null;

  return (
    <model-viewer class="w-full h-full"
      src={metadata.animation_url}
      ios-src=""
      poster={metadata.image}
      alt="A 3D model of a piggy bank"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="fixed"
      scale=".25 .25 .25"
    >
      <form action="https://google.com" slot="hotspot-1" data-position="0.05433714455273719m .375m 0.030338820705458014m" data-normal="0.13764446796963004m 0.9904508804974316m -0.007813690499380146m" data-visibility-attribute="visible">
        <button type="submit" className="btn btn-primary">
          <div className="HotspotAnnotation">Feed</div>
        </button>
      </form>
    </model-viewer>
  )
};

export default Model;
