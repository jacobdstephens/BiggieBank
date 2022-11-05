import "@google/model-viewer";

const Model = () => (
    <div id="card">
        <model-viewer
            src="https://nftstorage.link/ipfs/bafybeib2vplq3jnytmh54fyva5ou45c367kbmyebsqc5ri6wg7aynphdci/biggiepiggy.glb"
            ios-src=""
            poster="/piggybank.png"
            alt="A 3D model of a piggy bank"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="fixed"
        >
            <form action="https://google.com" slot="hotspot-1" data-position="0.6848562977786234m 2.816328812935004m 2.5862971373836086m" data-normal="-0.30229463292415343m 0.21061377532517248m 0.9296557387272609m" data-visibility-attribute="visible">
            <button type="submit" className="btn btn-primary">
                <div className="HotspotAnnotation">Oink Boink</div>
            </button>
            </form>
        </model-viewer>
    </div>
);

export default Model;
