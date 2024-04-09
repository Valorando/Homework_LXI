import './Body.css'
import Button from '../Button/Button'
import ShowInfoComp from '../ShowInfoComp/ShowInfoComp'
import { ways } from '../../data'
export default function Body()
{
    return(
        <div className="body">
            <Button/><Button/><Button/>
            <ShowInfoComp title={ways[0].title} description={ways[0].description} />
            <ShowInfoComp title={ways[1].title} description={ways[1].description} />
            <ShowInfoComp title={ways[2].title} description={ways[2].description} />
            <ShowInfoComp title={ways[3].title} description={ways[3].description} />
        </div>
    )
}