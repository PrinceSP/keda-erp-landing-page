const Partner = () => {
  const images = [
    "/illustrations/airbnb.svg",
    "/illustrations/hubspot.svg",
    "/illustrations/google.svg",
    "/illustrations/microsoft.svg",
    "/illustrations/airbnb.svg",
    "/illustrations/walmart.svg",
    "/illustrations/fedex.svg"
  ]

  function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.random() * (i + 1) | 0;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
  return (
    <div className="w-screen min-h-[40dvh] flex flex-col items-center justify-center mb-20">
      <p className="font-inter-semibold tracking-[-25%] text-[1.125em] md:text-[2em]">Over 2,000 people & companies use our system</p>
      <figure className="flex items-center justify-center gap-10 mt-10">
        {
          images.map((item) =>
            <img src={item} key={item.toString()} />
          )
        }
      </figure>
      <figure className="flex items-center justify-center gap-10 mt-10">
        {shuffle(images).map((item, index) => (
          <img src={item} key={`shuffled-${index}`} />
        ))}
      </figure>
    </div>
  )
}

export default Partner