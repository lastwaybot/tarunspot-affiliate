import { createClient } from 'next-sanity'

const projectId = '39iprgrx'
const dataset = 'production'
const apiVersion = '2025-01-01'

console.log('Initializing Sanity client with:', { projectId, dataset, apiVersion })

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
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

    console.log('Fetching products from Sanity...')
    const data = await client.fetch(query)
    console.log('Products fetched successfully:', data.length, 'products')
    return data
  } catch (error) {
    console.error('Error fetching products - Full details:', {
      message: error.message,
      status: error.status,
      body: error.body,
      url: error.url,
      stack: error.stack
    })
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

    console.log('Fetching filters from Sanity...')
    const data = await client.fetch(query)
    console.log('Filters fetched successfully:', data.length, 'filters')
    return data
  } catch (error) {
    console.error('Error fetching filters - Full details:', {
      message: error.message,
      status: error.status,
      body: error.body,
      url: error.url
    })
    return []
  }
}

export async function searchProducts(searchTerm) {
  try {
    const query = `*[_type == "product" && (name match "*${searchTerm}*" || link match "*${searchTerm}*")] {
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

    console.log('Searching products for:', searchTerm)
    const data = await client.fetch(query)
    console.log('Search results:', data.length, 'products')
    return data
  } catch (error) {
    console.error('Error searching products:', error)
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

export async function searchAndFilterProducts(searchTerm, selectedFilters) {
  try {
    let products
    
    if (searchTerm && searchTerm.trim() !== '') {
      products = await searchProducts(searchTerm)
    } else {
      products = await getProducts()
    }

    if (!selectedFilters || Object.keys(selectedFilters).length === 0) {
      return products
    }

    // Apply filters to search results
    const filteredProducts = products.filter((product) => {
      return Object.entries(selectedFilters).every(([filterTitle, selectedValues]) => {
        return product.filters?.some(
          (filter) =>
            filter.filterName?.title === filterTitle &&
            selectedValues.includes(filter.filterValue)
        )
      })
    })

    return filteredProducts
  } catch (error) {
    console.error('Error with search and filter:', error)
    return []
  }
}
