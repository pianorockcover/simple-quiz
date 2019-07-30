import * as React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = CharacterInterface;

export const Character = (props: Props) => (
    <div className="character">
        <div className="image">
            <LazyLoadImage src={props.imageUrl} />
        </div>
        <div className="text">
            You are <span>{props.name}</span>!
        </div>
    </div>
);
