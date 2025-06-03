const Loading = () => {
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center bg-black/65 pointer-events-none overflow-hidden'>
      <div className='w-12 h-12 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin'></div>
    </div>
  )
}

export default Loading
