import * as React from "react";
import { Answer, AnswerProps } from "./Answer";

type Props = Omit<AnswerProps, "imageUrl"> & {
    text: string;
}

export class AnswerText extends Answer<Props> {
    render() {
        return super.renderAnswer(<span>{this.props.text}</span>);
    }
}
