'use client'
import { ChangeEventHandler, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface inputProps {
  name: string
  label?: string
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}
export default function PasswordInput({
  name,
  label,
  value,
  onChange,
  placeholder,
}: inputProps) {
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className="w-full">
      {!label && (
        <label htmlFor={name} className="block">
          {label}
        </label>
      )}
      <div className="border-2 border-gray-300 rounded-[8px] p-1">
        <input
          type={show ? 'text' : 'password'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-[90%]"
        />
        {show ? (
          <FontAwesomeIcon
            className="text-gray-400"
            icon={faEyeSlash}
            onClick={() => setShow(false)}
          />
        ) : (
          <FontAwesomeIcon
            className="text-gray-400"
            icon={faEye}
            onClick={() => setShow(true)}
          />
        )}
      </div>
    </div>
  )
}
