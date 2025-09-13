import React from 'react'

function Fonts() {
    return (
        <div>
            <h1 className='font-sans text-2xl'>Hello this html data</h1>
            <h1 className='font-serif text-3xl'>Hello this html data</h1>
            <h1 className='font-mono text-4xl font-medium text-left'>Hello this html data</h1>

            <h1 className='font-sans text-5xl uppercase italic font-black text-right'>Hello this html data</h1>
            <h1 className='font-serif text-2xl capitalize underline decoration-amber-500 text-center tracking-widest'>Hello this html data</h1>
            <h1 className='font-mono overline decoration-dotted decoration-2 decoration-cyan-600 text-3xl text-justify'>Hello this html data</h1>
            <h1 className='font-sans line-through decoration-4 decoration-fuchsia-950 decoration-dashed text-5xl'>Hello this html data</h1>
            <h1 className='font-serif text-6xl'>Hello this html data</h1>
            <h1 className='font-mono text-6xl'>Hello this html data</h1>


            <ul className='list-decimal p-10'>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>

        </div>
    )
}

export default Fonts
