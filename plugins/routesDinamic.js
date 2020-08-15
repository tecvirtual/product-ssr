export default async function ({ app }) {
  
    const dinamicRoutes = async () => {
        const resForProducts = await app.$axios.get('/rooms')
    
        const routesForProducts = resForProducts.data.map((product) => {
            return {
                route : '/rooms/' + product.id,
                payload: product
            }
        })
    
        const routes = routesForProducts
    
        return routes
    }
    
  }