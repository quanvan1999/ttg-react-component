import styled from 'styled-components'
const SpanParent = styled.span`
    display: inline-flex;
    position: relative;
    flex-shrink: 0;
    vertical-align: middle;
    margin: 35px;
`;
const Svg = styled.svg`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`
const Amout = styled.span`
    height: ${props => props.theme.height || '15px'};
    display: flex;
    padding: 0 6px;
    z-index: 1;
    position: absolute;
    flex-wrap: wrap;
    font-size: 0.75rem;
    min-width: ${props => props.theme.width || '15px'};
    box-sizing: border-box;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1;
    align-content: center;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    color: #fff;
    background-color: rgb(220, 0, 78);
    top: ${props => (props.vertical === "bottom") ? '100%' : '0'};
    right: ${props => (props.horizontal === "left") ? '100%' : '0'};
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
`;

// vertical: để hiển thị trên hay dưới
// horizontal: để hiển thị trái hay phải
// value: số hiển thị
const Badge = (props) => {
    return (
        <>
            <SpanParent>
                <Svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></Svg>
                <Amout className="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle MuiBadge-colorSecondary" vertical={props.vertical} horizontal={props.horizontal}>
                    {props.value}
                </Amout>
            </SpanParent>
        </>
    )
}
export default Badge