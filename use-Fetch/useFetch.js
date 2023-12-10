import { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        anyError: null,
    })

  const getQuotes = async() => {
      setState({
        ...state,
        isLoading: true,
      })
      const resp = await fetch(url);
      
      const data = await resp.json();
      
      setState({
        data,
        isLoading: false,
        anyError: null,
      })
    }
  
    useEffect( () => {
        getQuotes()
    }, [ url ]);
  
  return {
    data: state.data,
    isLoading: state.isLoading,
    anyError: state.anyError,
  };
}
