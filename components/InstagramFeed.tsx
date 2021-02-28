import Image from 'next/image'


export function InstagramFeed({ instagramPosts }) {

    return (
        <>
            <div className="w-11/12 lg:w-9/12  xxl:w-3/5 mb-4 md:mb-9 xxl:mb-16 items-center flex">
                <a target="blank" href="https://www.instagram.com/brendafernandapsi/"><h4 className="section-title font-extrabold nav-link"> Me siga no Instagram</h4></a>
                <span className="colored-line ml-3"></span>
            </div>

            <div className="w-11/12 lg:w-9/12  xxl:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-8  font-medium color-primary mb-3 md:mb-20">


                {instagramPosts.map(({ node }, i) => {
                    return (

                        <div className="instagram-card  mb-16 md:mb-0" key={i}>
                            <a
                                href={`https://www.instagram.com/p/${node.shortcode}`}
                                key={i}
                                aria-label="view image on Instagram"
                            >
                                <Image src={node.thumbnail_src}
                                    alt={
                                        node.edge_media_to_caption.edges[0].node.text
                                            .replace(/(#\w+)+/g, "")
                                            .trim()
                                    }
                                    width={640} height={640}></Image>
                                {/* <img
                                    src={node.thumbnail_src}
                                    alt={
                                        node.edge_media_to_caption.edges[0].node.text
                                            .replace(/(#\w+)+/g, "")
                                            .trim()
                                    } */}
                                {/* /> */}
                            </a>
                        </div>
                    )
                })}
            </div>
        </>
    )

}