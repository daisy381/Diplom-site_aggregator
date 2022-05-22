import {useState} from "react";

export const usePagination = (limit = 9, items = []) => {
  const [itemsPerPage, setItemsPerPage] = useState(limit)
  const [currentPage, setCurrentPage] = useState(1)

  const lastItemIndex = currentPage * itemsPerPage
  const firsItemIndex = lastItemIndex - itemsPerPage
  const roundedLastPageNumber = Math.ceil(items.data?.length / itemsPerPage)
  const currentItems = items.data?.slice(firsItemIndex, lastItemIndex)  || [];

  const paginate = (page) => {
    if (page > roundedLastPageNumber || page === 0) {
      setCurrentPage(1)
    } else {
      setCurrentPage(page)
    }
  }

  const pageNumbers = []
  for (let i = 1; i <= roundedLastPageNumber; i += 1) {
    pageNumbers.push(i)
  }

  return {paginate, currentItems, itemsPerPage, pageNumbers, currentPage}
}
