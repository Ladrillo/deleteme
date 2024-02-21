import React from 'react'
import { useGetOrdersQuery } from '../state/pizzaApi'
import { selectSizeFilter } from '../state/filtersSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function OrderList() {
  const dispatch = useDispatch()
  const currentFilter = useSelector(st => st.filters.size)
  const { data: orders } = useGetOrdersQuery()
  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          orders && orders.filter(ord => currentFilter === 'All' || currentFilter === ord.size)
            .map(ord => {
              const { id, customer, size, toppings } = ord
              return (
                <li key={id}>
                  <div>
                    {customer} ordered a size {size} with {
                      toppings?.length || 'no'
                    } topping{toppings && toppings.length === 1 ? '' : 's'}
                  </div>
                </li>
              )
            })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const onClick = () => dispatch(selectSizeFilter(size))
            const className = `button-filter${size === currentFilter ? ' active' : ''}`
            return <button
              data-testid={`filterBtn${size}`}
              className={className}
              onClick={Function.prototype}
              key={size}>{size}</button>
          })
        }
      </div>
    </div>
  )
}
