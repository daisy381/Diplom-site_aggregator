import items from '../mockData.json'

export const fakeApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(items)
    }, 2000)
  })
}
