const Picture = styled.picture`
    ${props => !!props.$width && `width: ${props.$width};`}
`;

const PictureImage = styled.img`
    ${spacingMixin}
    ${borderMixin}
    ${shadowMixin}
    display: block;
    ${props =>
        props.inline &&
        `
        display: initial;
    `}

    ${props => props.height && `height: ${props.height};`}
    ${props => props.width && `width: ${props.width};`}
    object-fit: cover;

    ${props =>
        props.circle &&
        `
        border-radius: 50%;
    `}
    ${props =>
        props.roundcorner &&
        `
        border-radius: ${props.roundcorner};
    `}
    ${props =>
        props.grayscale &&
        `
        filter: gray; /* IE6-9 */
        -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
        filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
    `}
`;

const Image = ({
    src,
    medium,
    large,
    className,
    alt,
    srcSet,
    loading,
    sizes,
    width,
    height,
    inline,
    lazyLoad,
    circle,
    grayscale,
    decorative,
    roundcorner,
    ...restProps
}) => {
    // Default to lazy loading if nothing is explictly set and we know the width and height (to avoid layout shift)
    if (loading === undefined && lazyLoad === undefined && width && height) {
        loading = 'lazy';
    }

    return (
        <Picture $width={width}>
            {large && (
                <source
                    srcSet={large}
                    data-srcset={large}
                    media={`(min-width: ${LARGE})`}
                />
            )}
            {medium && (
                <source
                    srcSet={medium}
                    data-srcset={medium}
                    media={`(min-width: ${MEDIUM})`}
                />
            )}
            <PictureImage
                circle={circle}
                roundcorner={roundcorner}
                grayscale={grayscale}
                height={height}
                width={width}
                inline={inline}
                src={src}
                srcSet={srcSet}
                sizes={sizes}
                loading={lazyLoad ? 'lazy' : loading}
                alt={decorative && !alt ? '' : alt}
                className={className}
                role={decorative ? 'presentation' : null}
                {...restProps}
            />
        </Picture>
    );
};

export default Image;