import React from 'react'
import ClassProps from './ClassProps'
import Funcprops from './Funcprops'

function Propsdara() {
    return (
        <div>
            <h1>Hello this props data access view</h1>

            <div className="container">
                <h1 className='bg-info'>Hello this class props</h1>
                <div className="row">
                    <ClassProps title="car 1" desc="Hello this car1 imge data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*1kzq5zv*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTM1MzMwMTYkbzgkZzEkdDE3NTM1MzMwMjMkajUzJGwwJGgw" />

                    <ClassProps title="car 2" desc="Hello this car 2" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1npfxcy*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTM1MzMwMTYkbzgkZzEkdDE3NTM1MzMwOTEkajUyJGwwJGgw" />
                    <ClassProps title="car 1" desc="Hello this car1 imge data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*1kzq5zv*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTM1MzMwMTYkbzgkZzEkdDE3NTM1MzMwMjMkajUzJGwwJGgw" />

                    <ClassProps title="car 2" desc="Hello this car 2" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1npfxcy*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTM1MzMwMTYkbzgkZzEkdDE3NTM1MzMwOTEkajUyJGwwJGgw" />
                    <ClassProps title="car 1" desc="Hello this car1 imge data" img="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?_gl=1*1kzq5zv*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTM1MzMwMTYkbzgkZzEkdDE3NTM1MzMwMjMkajUzJGwwJGgw" />

                    <ClassProps title="car 2" desc="Hello this car 2" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1npfxcy*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTM1MzMwMTYkbzgkZzEkdDE3NTM1MzMwOTEkajUyJGwwJGgw" />
                </div>
            </div>

            <div className="container">
                <h1 className='bg-success'>Hello this Function compoent Props</h1>
                <div className="row">
                    <Funcprops title="Hello" desc="hello car data" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1npfxcy*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTM1MzMwMTYkbzgkZzEkdDE3NTM1MzMwOTEkajUyJGwwJGgw" />
                    
                    <Funcprops title="Hello 2" desc="hello car data" img="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?_gl=1*1npfxcy*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NTM1MzMwMTYkbzgkZzEkdDE3NTM1MzMwOTEkajUyJGwwJGgw" />
                </div>
            </div>

        </div>
    )
}

export default Propsdara
