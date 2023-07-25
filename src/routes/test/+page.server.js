/** 
 * +page.server.js
 * Request on Server Side (Not exposed at client)
*/
export let load = (input) => {
    console.log('page.server.js', input)
    return { data: 1 }
}
