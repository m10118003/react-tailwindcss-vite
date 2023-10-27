// QuickStart.tsx
import App from '../App'
export function QuickStart() {
  return (
    <div className='QuickStart'>
      <App />
      <div className='leading-loose'>
        <h1>Hello React.</h1>
        <h2 className='font-black text-rose-600 text-2xl mt-4'>Start editing to see some magic happen!</h2>
        <div className='text-orange-600 text-center md:text-center align-middle tracking-wide'>
          <p className='font-black text-yellow-600 text-xl antialiased'>How to create and nest components</p>
          <p className='font-black text-lime-600 text-l italic md:not-italic'>How to add markup and styles</p>
          <p className='font-black text-blue-600 text-base tracking-widest'>How to display data</p>
          <p className="ordinal slashed-zero tabular-nums overline decoration-dashed decoration-4	text-sky-600 hyphens-manual	my-4">
            1234567890...
          </p>
          <p className='font-black text-l leading-6 overline list-disc decoration-dashed decoration-4	text-gray-400	lowercase'><li>How to render conditions and lists</li></p>
          <p className='font-black text-indigo-600 text-l text-center capitalize'>How to respond to events and update the screen</p>
          <p className='font-black text-purple-600 text-xl text-center uppercase break-all'>How to share data between components</p>
        </div>
      </div>
    </div>
  );
}

export default QuickStart;