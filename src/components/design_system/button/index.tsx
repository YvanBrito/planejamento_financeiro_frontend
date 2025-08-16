'use client'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler } from 'react'

interface btnProps {
  type?: 'submit' | 'reset' | 'button'
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'light' | 'link'
  disabled?: boolean
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
}

export default function Button({
  type,
  variant,
  disabled,
  loading,
  onClick,
  children,
}: btnProps) {
  const classColors =
    disabled || loading
      ? {
          primary: 'text-white bg-cyan-300',
          secondary: 'text-white bg-gray-200',
          danger: 'text-white bg-red-200',
          warning: 'bg-yellow-200',
          light: 'bg-gray-100',
        }
      : {
          primary:
            'text-white bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800',
          secondary:
            'text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700',
          danger: 'text-white bg-red-600 hover:bg-red-700 active:bg-red-800',
          warning: 'bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600',
          light: 'bg-gray-300 hover:bg-gray-400 active:bg-gray-500',
          link: 'bg-transparent underline',
        }

  return (
    <button
      className={`${classColors[variant || 'primary']} ${
        disabled || loading
          ? 'hover:cursor-not-allowed'
          : 'hover:cursor-pointer'
      }
        px-3 py-1 rounded-[6px]`}
      type={type ? type : 'button'}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <FontAwesomeIcon className="text-gray-400" icon={faSpinner} spin />
      ) : (
        children
      )}
    </button>
  )
}
