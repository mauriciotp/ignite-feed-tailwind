interface AvatarProps {
  src: string
  hasBorder: boolean
}

export function Avatar({ src, hasBorder }: AvatarProps) {
  return (
    <img
      className={`h-12 w-12 rounded-lg ${hasBorder ? 'box-content border-4 border-gray-800 outline-2 outline-green-500' : ''}`}
      src={src}
      alt=""
    />
  )
}
