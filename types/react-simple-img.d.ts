declare module "react-simple-img" {
    type ReactSimpleImgProps = {
        src: string;
        height?: number;
        placeholder?: string;
        style?: React.CSSProperties;
        className?: string;
    }

    export class SimpleImg extends React.Component<ReactSimpleImgProps> {}
}
