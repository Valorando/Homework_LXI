export default function ShowInfoComp(props)
{
    return(
            <li className="showinfocomp">
                <strong>{props.title}</strong> {props.description}
            </li>
    )
}