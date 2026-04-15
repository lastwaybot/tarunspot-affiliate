import { createClient } from 'next-sanity'

const projectId = '39iprgrx'
const dataset = 'production'
const apiVersion = '2025-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export async function getProducts() {
  try {
    const query = `*[_type == "product"] {
      _id,
      name,
      image,
      link,
      filters[] {
        filterName->{
          _id,
          title
        },
        filterValue
      }
    }`

    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export async function getFilters() {
  try {
    const query = `*[_type == "productFilter"] {
      _id,
      title,
      options
    }`

    return await client.fetch(query)
  } catch (error) {
    console.warn('Could not fetch filters from Sanity. Make sure the productFilter schema is deployed.', error)
    return []
  }
}

export async function getProductsByFilters(selectedFilters) {
  if (!selectedFilters || Object.keys(selectedFilters).length === 0) {
    return getProducts()
  }

  try {
    // Fetch all products
    const allProducts = await getProducts()

    // Filter products client-side based on selected filters
    const filteredProducts = allProducts.filter((product) => {
      // Check if product matches all selected filter criteria
      return Object.entries(selectedFilters).every(([filterTitle, selectedValues]) => {
        // Check if product has any of the selected values for this filter
        return product.filters?.some(
          (filter) =>
            filter.filterName?.title === filterTitle &&
            selectedValues.includes(filter.filterValue)
        )
      })
    })

    return filteredProducts
  } catch (error) {
    console.error('Error filtering products:', error)
    return []
  }
}
