import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react'

interface inputProps {
  name: string
  label?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  type?: HTMLInputTypeAttribute
}
export default function Input({
  name,
  label,
  value,
  onChange,
  placeholder,
  type,
}: inputProps) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="block">
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-2 border-gray-300 rounded-[8px] p-1"
      />
    </div>
  )
}
