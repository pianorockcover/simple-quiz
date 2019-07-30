import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Answer, AnswerProps } from "./Answer";

type Props = Omit<AnswerProps, "text"> & {
    imageUrl: string;
}

export class AnswerImage extends Answer<Props> {
    render() {
        return super.renderAnswer(
            <LazyLoadImage src={this.props.imageUrl} />
        )
    }
}
