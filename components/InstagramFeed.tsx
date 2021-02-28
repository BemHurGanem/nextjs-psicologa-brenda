import Image from 'next/image'


export function InstagramFeed({ instagramPosts }) {

    return (
        <>
            <div className="w-11/12 lg:w-9/12 mt-9 md:mt-5 xxl:mt-0 xxl:w-3/5 mb-16 md:items-center flex flex-col md:flex-row">
                <a target="blank" href="https://www.instagram.com/brendafernandapsi/">
                    <h4 className="section-title font-extrabold nav-link"> Me siga no Instagram</h4>
                </a>
                <span className="colored-line hidden md:flex md:ml-3"></span>
            </div>

            <div className="w-11/12 lg:w-9/12  xxl:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8  font-medium color-primary mb-3 md:mb-20">


                {instagramPosts.map(({ node }, i) => {
                    return (

                        <div className="instagram-card mb-0" key={i}>
                            <a
                                href={`https://www.instagram.com/p/${node.shortcode}`}
                                key={i}
                                aria-label="view image on Instagram"
                            >

                                <img
                                    src={node.thumbnail_src}
                                    alt={
                                        node.edge_media_to_caption.edges[0].node.text
                                            .replace(/(#\w+)+/g, "")
                                            .trim()
                                    }
                                 /> 
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )

}