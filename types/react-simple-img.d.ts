declare module "react-simple-img" {
    type ReactSimpleImgProps = {
        src: string;
        height?: number;
    }

    export class SimpleImg extends React.Component<ReactSimpleImgProps> {}
}
