import Gallery from "react-image-gallery"

import { Loader } from "./Loader";


function ProductGallery({ images }) {

    return (
        <div>
            {
                !images ? <Loader loaderHeight={5} loaderWidth={5} /> :
                    <Gallery
                        items={images.map((image: any) => ({
                            original: image,
                            thumbnail: image,
                        }))}
                    />
            }
        </div>



    )
}

export default ProductGallery