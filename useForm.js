import { useState } from 'react'

export const useForm = (initialValue = {}) => {
  const [form, setForm] = useState(initialValue);

  const onInputChange  = ({target}) => {
    const { name, value} = target;
    setForm({
        ...form,
        [ name ]: value
    });
  }

  const onReset = () => {
    setForm(initialValue)
  }
  
    return{
        ...form,
        form,
        onInputChange,
        onReset
    }
}
