import * as React from "react";
import { SimpleImg } from "react-simple-img";
import { Answer, AnswerProps } from "./Answer";

type Props = Omit<AnswerProps, "text"> & {
    imageUrl: string;
}

export class AnswerImage extends Answer<Props> {
    render() {
        return super.renderAnswer(
            <SimpleImg src={this.props.imageUrl} height={300} />
        )
    }
}
