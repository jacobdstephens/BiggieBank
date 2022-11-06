import "@google/model-viewer";
import { formatUnits } from "ethers/lib/utils";
import { useAccount, useBalance, useNetwork } from "wagmi";

const Model = ({ metadata }: { metadata: any }) => {
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { data: balance } = useBalance({
    addressOrName: address,
    chainId: chain?.id,
  })

  const scale = balance ? Math.abs(Math.log(parseFloat(formatUnits(balance.value)))) * .25 : .25;
  if (!metadata) return null;

  console.log('math', scale, balance);

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
      scale={`${scale} ${scale} ${scale}`}
    >
      <form action="https://google.com" slot="hotspot-1" data-position="0.05433714455273719m 1.5152580934978745m 0.030338820705458014m" data-normal="0.13764446796963004m 0.9904508804974316m -0.007813690499380146m" data-visibility-attribute="visible">
        <button type="submit" className="btn btn-primary">
          <div className="HotspotAnnotation">Feed</div>
        </button>
      </form>
    </model-viewer>
  )
};

export default Model;
