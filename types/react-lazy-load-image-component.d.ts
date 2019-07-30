declare module "react-lazy-load-image-component" {
    type ReactLazyLoadImageProps = {
        src: string;
        alt?: string;
        height?: number;
        width?: number;
    }

    export class LazyLoadImage extends React.Component<ReactLazyLoadImageProps> {}
}
