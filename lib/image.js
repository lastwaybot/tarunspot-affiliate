import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  if (!source) {
    console.warn('No image source provided')
    return null
  }
  
  try {
    // Handle if source is already a URL string
    if (typeof source === 'string') {
      return source
    }
    
    // Handle image object structure
    if (source._type === 'image' && source.asset) {
      return builder.image(source).width(400).url()
    }
    
    // Fallback for direct asset reference
    if (source.asset) {
      return builder.image(source).width(400).url()
    }
    
    console.warn('Invalid image source structure:', source)
    return null
  } catch (error) {
    console.error('Error building image URL:', error, 'Source:', source)
    return null
  }
}
