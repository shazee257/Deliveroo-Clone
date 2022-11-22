import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: 'udvcl5bh',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25',
})

export const urlFor = (source) => {
    return imageUrlBuilder(client).image(source)
}

export default client;