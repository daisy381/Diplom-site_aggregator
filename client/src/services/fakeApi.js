import items from '../data/mockData.json'

export const fakeApi = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(items)
    }, 2000)
  })
}
