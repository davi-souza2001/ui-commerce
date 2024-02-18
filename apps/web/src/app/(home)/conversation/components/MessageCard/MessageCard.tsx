type MessageCardProps = {
  message?: string
}

export const MessageCard = ({ message }: MessageCardProps) => {
  return (
    <div className="w-full h-16 flex items-center justify-start">
      <div className="bg-yellow-500 p-2">
        <p>{message}</p>
      </div>
    </div>
  )
}
