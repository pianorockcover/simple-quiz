declare module "react-lazy-load-image-component" {
    type ReactLazyLoadImageProps = {
        alt?: string;
        height: number;
        src: string;
        width: number;
    }

    export class LazyLoadImage extends React.Component<ReactLazyLoadImageProps> {}
}
