import React, { useRef, useState, useEffect, FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { bemClass } from '@utils'
import { searchMovie } from '@api/search'
import { tMovie } from '@components/year-section'

import './style.scss'

type searchProps = {
  placeholder?: string
  typography?: 'm' | 'l'
  className?: string
}

type searchHandlerProps = {
  target: {
    value: string
  }
}

const blk = 'search-input'

const SearchInput = ({ placeholder = '', typography = 'm', className = '' }: searchProps) => {
  const location = useLocation()
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('')
  const [searchData, setSearchData] = useState<tMovie[] | []>([])
  const eltRef = useRef<HTMLFormElement>(null)

  const onSuccess = (records: Array<tMovie>) => {
    setSearchData(records)
  }

  const getResults = async (searchValue: string) => {
    const fetchedMovies = await searchMovie({
      query: searchValue,
      page: 1,
    });
    onSuccess(fetchedMovies)
  }

  const onSearchHandler = ({ target: { value } }: searchHandlerProps) => {
    setSearchValue(value)
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()
    searchValue && await getResults(searchValue)
    navigate(`/search/${searchValue}`)
  };

  return (
    <form
      className={bemClass([blk, {}, className])}
      ref={eltRef}
      onSubmit={submitHandler}
    >
      <input
        type="search"
        autoFocus
        className={bemClass([blk, 'control', { [typography]: !!typography }])}
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    </form>
  )
}

export default SearchInput
